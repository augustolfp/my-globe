import Dot from "../../components/Dot";
import coordinatesData from "../../assets/coordinatesData.json";

export default function Homepage() {
  const rotationAngle = (180 * Math.PI) / 180;

  const cartesianCoordinates = coordinatesData.map(({ phi, theta, rho }) => {
    const x = Math.cos(phi) * Math.cos(theta + rotationAngle) * rho;
    const y = Math.cos(phi) * Math.sin(theta + rotationAngle) * rho;
    const z = Math.sin(phi) * rho;

    return {
      x: Math.round(x),
      y: Math.round(y),
      z: Math.round(z),
    };
  });
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
          opacity={
            y > 0
              ? 1
              : Math.abs((coordinatesData[0].rho + y) / coordinatesData[0].rho)
          }
        />
      ))}
    </div>
  );
}
