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
        transform: `translateZ(${z}px) translateY(${
          y + 400
        }px) translateX(${x}px)`,
      }}
    >
      <div className="w-2 aspect-square bg-orange-400"></div>
    </div>
  );
}
