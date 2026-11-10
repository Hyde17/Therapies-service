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
    <article>
      <p>{description}</p>
      <article>
        <strong>Common experiences</strong>
        <ul>{lists}</ul>
        <p>{conclusion}</p>
      </article>
    </article>
  );
}
