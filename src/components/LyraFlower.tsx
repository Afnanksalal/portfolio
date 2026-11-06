const drawings = {
  pencil: { box: "42 38 565 411", label: "A pencil flower with red stamens" },
  blue: { box: "1376 22 511 412", label: "A blue lily with orange stamens" },
  violet: { box: "101 583 553 497", label: "A violet lily" },
  mint: { box: "1409 650 490 418", label: "A mint green lily" },
};
export type FlowerName = keyof typeof drawings;
export default function LyraFlower({
  name,
  decorative = true,
}: {
  name: FlowerName;
  decorative?: boolean;
}) {
  const drawing = drawings[name];
  return (
    <svg
      className={`lyra-flower lyra-flower-${name}`}
      viewBox={drawing.box}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : drawing.label}
      focusable="false"
    >
      <image href={`/art/lyra-${name}.png`} width="1920" height="1080" />
    </svg>
  );
}
