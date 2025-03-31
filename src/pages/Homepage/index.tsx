import Dot from "../../components/Dot";
import coordinates from "../../assets/coordinates.json";

export default function Homepage() {
  console.log(coordinates[0]);
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
        // transform: "rotateX(60deg) rotateY(60deg)",
        transformStyle: "preserve-3d",
        transform: "perspective(1240px)",
      }}
    >
      {coordinates.map(({ x, y, z }) => (
        <Dot
          x={Math.round(5 * x)}
          y={5 * Math.round(y)}
          z={5 * Math.round(z)}
        />
      ))}
    </div>
  );
}
