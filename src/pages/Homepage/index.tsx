import Dot from "../../components/Dot";
import coordinatesData from "../../assets/coordinatesData.json";

export default function Homepage() {
  const radius = Math.min(...coordinatesData.map(({ y }) => y));
  return (
    <div
      className="bg-black w-4 aspect-square relative"
      style={{
        perspective: "5000px",
      }}
    >
      <p className="absolute top-4 left-6 font-bold">Origem</p>
      {coordinatesData.map(({ x, y, z }) => (
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
