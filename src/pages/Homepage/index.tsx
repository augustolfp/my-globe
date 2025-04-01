import Dot from "../../components/Dot";
import cartesianCoordinates from "../../assets/cartesianCoordinates.json";
// import geoCoordinates from "../../assets/geoCoordinates.json";

export default function Homepage() {
  const radius = Math.min(...cartesianCoordinates.map(({ y }) => y));
  return (
    <div
      className="bg-black w-4 aspect-square relative"
      style={{
        perspective: "5000px",
      }}
    >
      <p className="absolute top-4 left-6 font-bold">Origem</p>
      {cartesianCoordinates.map(({ x, y, z }) => (
        <Dot
          x={-10 * x}
          y={-10 * z}
          z={10 * y}
          opacity={y > 0 ? 1 : Math.abs((radius - y) / radius)}
        />
      ))}
    </div>
  );
}
