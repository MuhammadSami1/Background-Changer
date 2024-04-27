import { useState } from "react";
import "./index.css";

function App() {
  const [color, setcolor] = useState();
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="flex flex-wrap justify-center fixed top-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-5 px-3 py-2 bg-white rounded-lg shadow-lg">
          <button
            onClick={() => setcolor("red")}
            className="px-5 py-2 rounded-xl text-white shadow-lg"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="px-5 py-2 rounded-xl text-white shadow-lg"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("green")}
            className="px-5 py-2 rounded-xl text-white shadow-lg"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("black")}
            className="px-5 py-2 rounded-xl text-white shadow-lg"
            style={{ background: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setcolor("white")}
            className="px-5 py-2 rounded-xl text-black shadow-lg"
            style={{ background: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setcolor("")}
            className="px-5 py-2 rounded-xl text-white shadow-lg"
            style={{ background: "black" }}
          >
            Remove color
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
