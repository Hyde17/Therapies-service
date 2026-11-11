"use client";

import { FaCaretDown } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { useExpandable } from "@/context/expandable-context";

type ExpandableProps = {
  id: string | number;
  title: string;
  children: React.ReactNode;
};
export default function Expandable({ id, title, children }: ExpandableProps) {
  const { expandedCard, toggleCard } = useExpandable();

  const expand = expandedCard === id;
  return (
    <div>
      <p className="flex items-center font-semibold text-base text-brand min-h-6 mb-3 gap-1 border-t border-t-line pt-2">
        <span>
          <button
            className="border-none outline-none cursor-pointer"
            onClick={() => toggleCard(id)}
            aria-expanded={expand}
          >
            {expand ? <FaCaretDown /> : <FaCaretRight />}
          </button>
        </span>

        {title}
      </p>
      {expand && <article>{children}</article>}
    </div>
  );
}
