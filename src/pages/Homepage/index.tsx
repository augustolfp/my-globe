import Dot from "../../components/Dot";
import cartesianCoordinates from "../../assets/cartesianCoordinates.json";
// import geoCoordinates from "../../assets/geoCoordinates.json";

export default function Homepage() {
  return (
    <div className="bg-black w-4 aspect-square relative" style={{}}>
      <p className="absolute top-4 left-6 font-bold">Origem</p>
      {cartesianCoordinates.map(({ x, y, z }) => (
        <Dot x={-10 * x} y={-10 * z} z={10 * y} />
      ))}
    </div>
  );
}
