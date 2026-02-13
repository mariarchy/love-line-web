import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { normalizePhone } from "@/lib/phone";

export type LookupResponse =
  | { ok: true; dateTime: string; dateName: string | null }
  | { ok: false; error: string };

export async function POST(
  request: NextRequest
): Promise<NextResponse<LookupResponse>> {
  try {
    const body = await request.json();
    const raw = typeof body?.phone === "string" ? body.phone.trim() : "";
    if (!raw) {
      return NextResponse.json(
        { ok: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    const phone = normalizePhone(raw);
    if (phone.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    // Backend stores E.164; try normalized and raw for flexibility
    const participant = await prisma.participant.findFirst({
      where: {
        OR: [{ phone }, { phone: raw }],
      },
      include: {
        matchesAsParticipant: { take: 1 },
        matchesAsMatchParticipant: { take: 1 },
      },
    });

    if (!participant) {
      return NextResponse.json(
        { ok: false, error: "We couldn't find a date for this number." },
        { status: 404 }
      );
    }

    const match =
      participant.matchesAsParticipant[0] ??
      participant.matchesAsMatchParticipant[0];

    if (!match) {
      return NextResponse.json(
        { ok: false, error: "No date is scheduled for this number yet." },
        { status: 404 }
      );
    }

    const otherParticipantId =
      match.participantId === participant.id
        ? match.matchParticipantId
        : match.participantId;
    const other = await prisma.participant.findUnique({
      where: { id: otherParticipantId },
    });

    const dateTime = match.scheduledAt;
    if (!dateTime) {
      return NextResponse.json(
        { ok: false, error: "Your date time hasn't been set yet." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      dateTime: dateTime.toISOString(),
      dateName: other?.name ?? null,
    });
  } catch (e) {
    console.error("Lookup error:", e);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
