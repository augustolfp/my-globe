import Dot from "../../components/Dot";
import coordinatesData from "../../assets/coordinatesData.json";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [rotationAngleInDegrees, setRotationAngleInDegrees] = useState(0);
  const rotationAngle = (rotationAngleInDegrees * Math.PI) / 180;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (rotationAngleInDegrees === 360) {
        setRotationAngleInDegrees(0);
      }

      setRotationAngleInDegrees((prev) => prev + 1);
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

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
          x={-8 * x}
          y={-8 * z}
          z={8 * y}
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
