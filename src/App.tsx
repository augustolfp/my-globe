import "./App.css";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <div className="bg-purple-400 w-3xl aspect-square">
        <Homepage />
      </div>
    </div>
  );
}
