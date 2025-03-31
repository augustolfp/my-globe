import Dot from "../../components/Dot";
// import cartesianCoordinates from "../../assets/cartesianCoordinates.json";
// import geoCoordinates from "../../assets/geoCoordinates.json";

export default function Homepage() {
  const points = [
    {
      x: 100,
      y: 150,
      z: 10,
    },
  ];
  return (
    <div className="bg-black w-4 aspect-square relative" style={{}}>
      <p className="absolute top-4 left-6 font-bold">Origem</p>
      {points.map(({ x, y, z }) => (
        <Dot x={x} y={y} z={z} />
      ))}
    </div>
  );
}
