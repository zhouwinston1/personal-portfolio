// Renders **phrase** as a highlighted metric.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong
            key={i}
            className="font-medium text-foreground decoration-signal decoration-2 underline-offset-[5px] [text-decoration-line:underline]"
          >
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  )
}
