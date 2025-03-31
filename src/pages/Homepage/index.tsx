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
      y: 0,
      z: -500,
    },
    {
      x: 500,
      y: 0,
      z: -500,
    },
    {
      x: 0,
      y: 500,
      z: -500,
    },
    {
      x: 500,
      y: 500,
      z: -500,
    },
  ];

  return (
    <div
      className="border-solid border-2 border-purple-300 w-[700px] aspect-square relative"
      style={{
        transform: "rotateX(30deg) rotateY(30deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {square3D.map(({ x, y, z }) => (
        <Dot x={x} y={y} z={z} />
      ))}
    </div>
  );
}
