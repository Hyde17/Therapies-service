export default function approachImg() {
  return (
    <svg
      viewBox="0 0 320 250"
      role="img"
      aria-label="Diagram showing thoughts, feelings and behaviour influencing each other"
      style={{ width: "100%", maxWidth: "420px", justifySelf: "center" }}
    >
      <g fill="none" stroke="var(--terra)" stroke-width="3">
        <path d="M160 62 L70 178"></path>
        <path d="M160 62 L250 178"></path>
        <path d="M102 205 L218 205"></path>
      </g>
      <g fill="var(--card)" stroke="var(--brand)" stroke-width="2">
        <rect x="95" y="20" width="130" height="44" rx="22"></rect>
        <rect x="10" y="180" width="120" height="44" rx="22"></rect>
        <rect x="190" y="180" width="120" height="44" rx="22"></rect>
      </g>
      <g
        fill="var(--brand)"
        font-family="DM Sans,system-ui,sans-serif"
        font-size="16"
        font-weight="600"
        text-anchor="middle"
      >
        <text x="160" y="48">
          Thoughts
        </text>
        <text x="70" y="208">
          Feelings
        </text>
        <text x="250" y="208">
          Behaviour
        </text>
      </g>
    </svg>
  );
}
