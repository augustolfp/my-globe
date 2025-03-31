interface Props {
  x: string;
  y: string;
  z: string;
}

export default function Dot({ x, y, z }: Props) {
  return (
    <div style={{ position: "absolute", left: y, bottom: z }}>
      <div className="w-2 aspect-square bg-orange-400 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
