interface Props {
  x: string;
  y: string;
}

export default function Dot({ x, y }: Props) {
  return (
    <div style={{ position: "absolute", left: x, bottom: y }}>
      <div className="w-2 aspect-square bg-orange-400 -translate-x-1/2 translate-y-1/2"></div>
    </div>
  );
}
