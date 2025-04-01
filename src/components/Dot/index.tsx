interface Props {
  x: number;
  y: number;
  z: number;
  opacity: number;
}

export default function Dot({ x, y, z, opacity }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translate3d(${x}px,${y}px, ${z}px)`,
        opacity: opacity,
      }}
    >
      <div className="w-2 aspect-square bg-orange-400"></div>
    </div>
  );
}
