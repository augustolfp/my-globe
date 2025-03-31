import Dot from "../../components/Dot";

export default function Homepage() {
  const square2D = [
    {
      x: 0,
      y: 0,
    },
    {
      x: 500,
      y: 0,
    },
    {
      x: 0,
      y: 500,
    },
    {
      x: 500,
      y: 500,
    },
  ];
  return (
    <div className="bg-purple-400 w-[1000px] aspect-square relative">
      <Dot x="500px" y="500px" />
      {square2D.map(({ x, y }) => (
        <Dot x={`${x}px`} y={`${y}px`} />
      ))}
    </div>
  );
}
