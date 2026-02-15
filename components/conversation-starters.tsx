export function ConversationStarters({ inverted }: { inverted?: boolean }) {
  const textMuted = inverted ? "text-love-bg/70" : "text-love-text/70";
  const textBody = inverted ? "text-love-bg/90" : "text-love-text/90";
  const textStrong = inverted ? "text-love-bg/95" : "text-love-text/95";
  const border = inverted ? "border-love-bg/20" : "border-love-text/20";
  const borderTop = inverted ? "border-love-bg/15" : "border-love-text/15";

  const sections = [
    {
      title: "the room",
      questions: [
        "what do you see around you right now?",
        "if I were there with you, what would we be doing?",
      ],
    },
    {
      title: "the path",
      questions: [
        "walk me through how you ended up calling this number",
        "what's something you wish more people knew about you?",
      ],
    },
    {
      title: "what matters",
      questions: [
        "what's your type?",
        "what's been on your mind that you haven't said out loud?",
      ],
    },
    {
      title: "the unexpected",
      questions: [
        "tell me about a moment you felt completely seen",
        "what would you do if you knew you couldn't fail?",
      ],
    },
  ] as const;

  return (
    <div className="w-full max-w-[480px] mx-auto text-left">
      <p className={`text-sm ${textBody} leading-relaxed mb-8`}>
        find somewhere private. close the door. give yourself an hour to be fully
        present with a stranger's voice.
      </p>

      <p className={`text-sm ${textBody} leading-relaxed mb-8`}>
        <strong>if you need somewhere to start:</strong>
      </p>

      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className={`text-xs font-medium tracking-widest uppercase ${textMuted} mb-3`}>
              {section.title}
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {section.questions.map((q) => (
                <li
                  key={q}
                  className={`text-sm ${textStrong} border-l-2 ${border} py-1 pl-3`}
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={`mt-8 pt-6 border-t ${borderTop}`}>
        <h3 className={`text-xs font-medium tracking-widest uppercase ${textMuted} mb-3`}>
          or just
        </h3>
        <p className={`text-sm ${textStrong} border-l-2 ${border} py-1 pl-3 m-0`}>
          what do you want to know about me?
        </p>
      </div>
    </div>
  );
}
