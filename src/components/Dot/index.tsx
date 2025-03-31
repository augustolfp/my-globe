interface Props {
  x: number;
  y: number;
  z: number;
}

export default function Dot({ x, y, z }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translateZ(${z}px) translateY(${y}px) translateX(${x}px)`,
      }}
    >
      <div className="w-6 aspect-square bg-orange-400"></div>
    </div>
  );
}
