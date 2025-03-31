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

  const square3D = [
    {
      x: 0,
      y: 0,
      z: 0,
    },
    {
      x: 500,
      y: 0,
      z: 0,
    },
    {
      x: 500,
      y: 0,
      z: 500,
    },
    {
      x: 0,
      y: 0,
      z: 500,
    },
    {
      x: 0,
      y: 500,
      z: 0,
    },
    {
      x: 500,
      y: 500,
      z: 0,
    },
    {
      x: 0,
      y: 500,
      z: 500,
    },
    {
      x: 500,
      y: 500,
      z: 500,
    },
  ];

  return (
    <div className="bg-purple-400 w-[1000px] aspect-square relative">
      {square3D.map(({ x, y, z }) => (
        <Dot x={`${x}px`} y={`${y}px`} z={`${z}px`} />
      ))}
    </div>
  );
}
