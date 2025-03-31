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
        transform: `translate3d(${x}px,${y + 400}px, ${z}px)`,
      }}
    >
      <div className="w-2 aspect-square bg-orange-400"></div>
    </div>
  );
}
