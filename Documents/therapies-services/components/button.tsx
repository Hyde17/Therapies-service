type ButtonColor =
  | "bg"
  | "clay"
  | "sage"
  | "brand"
  | "brand-ink"
  | "text"
  | "muted"
  | "terra"
  | "link"
  | "ochre"
  | "card"
  | "line";
type BorderColor = "brand" | "brand-ink";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  color: ButtonColor;
  border: BorderColor;
  text: ButtonColor;
}
export default function Button({
  children,
  color,
  onClick,
  border,
  text,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-${color} border-2 flex items-center justify-center font-bold text-base cursor-pointer border-${border} border-2 text-${text} px-4 rounded-lg min-h-12`}
    >
      {children}
    </button>
  );
}
