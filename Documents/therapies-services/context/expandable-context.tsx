"use client";
import { createContext, useContext, useState } from "react";

type ExpandableContextType = {
  expandedCard: string | null;
  toggleCard: (id: string) => void;
};
const ExpandableContext = createContext<ExpandableContextType | undefined>(
  undefined,
);

export function ExpandableProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };
  return (
    <ExpandableContext.Provider value={{ expandedCard, toggleCard }}>
      {children}
    </ExpandableContext.Provider>
  );
}

export const useExpandable = () => {
  const context = useContext(ExpandableContext);

  if (!context) {
    throw new Error("useExpandable must be used within ExpandableProvider");
  }
  return context;
};
