// import CardSummary from "./card-summary";
import Expandable from "./expandable";

type CardProps = {
  id: string;
  title: string;
  info: string;
  summary?: React.ReactNode;
  icon?: number;
};

export default function Card({ id, icon, title, info, summary }: CardProps) {
  return (
    <article className="bg-card border min-w-60 border-line rounded-2xl p-6 h-auto  self-start">
      <article className=" ">
        {icon ? (
          <p className="bg-ochre rounded-full w-10 h-10 text=[#2b2a24] grid place-items-center font-semibold text-[1.1rem] mb-4">
            {icon}
          </p>
        ) : (
          ""
        )}
        <h3 className="text-[1.5rem] font-semibold">{title}</h3>
        <p className="max-w-[64ch] mb-4 text-base ">{info}</p>
      </article>
      {id !== "" && (
        <Expandable id={id} title="Explore support">
          {summary}
        </Expandable>
      )}
    </article>
  );
}
