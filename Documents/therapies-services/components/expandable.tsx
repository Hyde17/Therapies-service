"use client";
import React, { useState } from "react";

type ExpandableProps = {
  title: string;
  children: React.FunctionComponent;
};
export default function Expandable({ title, children }: ExpandableProps) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <p>
        {open ? (
          <button
            className="border-none outline-none cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            caret
          </button>
        ) : (
          <button className="border-none outline-none cursor-pointer">
            caret
          </button>
        )}

        {title}
      </p>
      <article>{children}</article>
    </div>
  );
}
