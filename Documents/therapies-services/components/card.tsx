import { FunctionComponent } from "react";
// import CardSummary from "./card-summary";
import Expandable from "./expandable";

type CardProps = {
  title: string;
  info: string;
  summary: React.FunctionComponent;
};

export default function Card({ title, info, summary }: CardProps) {
  return (
    <article className="bg-card border min-w-60 border-line rounded-2xl p-6">
      <article className="border-b border-b-line mb-2">
        <h3 className="text-[1.5rem] font-semibold">{title}</h3>
        <p className="max-w-[64ch] mb-[1em] text-base">{info}</p>
      </article>
      <Expandable title="Explore support">{summary}</Expandable>
    </article>
  );
}
