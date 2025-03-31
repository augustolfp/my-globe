import Dot from "../../components/Dot";
import cartesianCoordinates from "../../assets/cartesianCoordinates.json";
import geoCoordinates from "../../assets/geoCoordinates.json";

export default function Homepage() {
  return (
    <div
      className="border-solid border-2 border-purple-300 w-[700px] aspect-square relative"
      style={{
        // transform: "rotateX(60deg) rotateY(60deg)",
        transformStyle: "preserve-3d",
        transform: "perspective(1240px)",
      }}
    >
      {cartesianCoordinates.map(({ x, y, z }) => (
        <Dot
          x={Math.round(5 * x)}
          y={5 * Math.round(y)}
          z={5 * Math.round(z)}
        />
      ))}
    </div>
  );
}
