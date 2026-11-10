type CardSummaryProps = {
  description: string;
  lists?: React.ReactNode;
  conclusion: string;
};

export default function CardSummary({
  description,
  conclusion,
  lists,
}: CardSummaryProps) {
  return (
    <article className="grid gap-3">
      <p>{description}</p>
      <article>
        <strong>Common experiences</strong>
        <ul className="grid gap-2 pl-5 ">{lists}</ul>
      </article>
      <p className="text-base">{conclusion}</p>
    </article>
  );
}
