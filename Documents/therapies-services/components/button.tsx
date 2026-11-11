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

const backgroundColors: Record<ButtonColor, string> = {
  bg: "bg-bg",
  clay: "bg-clay",
  sage: "bg-sage",
  brand: "bg-brand",
  "brand-ink": "bg-brand-ink",
  text: "bg-text",
  muted: "bg-muted",
  terra: "bg-terra",
  link: "bg-link",
  ochre: "bg-ochre",
  card: "bg-card",
  line: "bg-line",
};

const borderColors: Record<BorderColor, string> = {
  brand: "border-brand",
  "brand-ink": "border-brand-ink",
};

const textColors: Record<ButtonColor, string> = {
  bg: "text-bg",
  clay: "text-clay",
  sage: "text-sage",
  brand: "text-brand",
  "brand-ink": "text-brand-ink",
  text: "text-text",
  muted: "text-muted",
  terra: "text-terra",
  link: "text-link",
  ochre: "text-ochre",
  card: "text-card",
  line: "text-line",
};

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
      className={`${backgroundColors[color]} border-2 flex items-center justify-center font-bold font-head text-base cursor-pointer ${borderColors[border]} ${textColors[text]} px-2  md:px-4 md:py-1 rounded-lg min-h-12 text-nowrap`}
    >
      {children}
    </button>
  );
}
