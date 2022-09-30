import { useState } from "react";
import "./styles.css";
import "./index.css";

const Timer = () => {
  console.log("Mounting Component Timer");
  const [count, setCount] = useState();
  // setInterval(() => {
  // setCount(count + 1)
  //   console.log("loop");
  // }, 1000);

  console.log("component mount success");
  return <div>Timer: {count}</div>;
};

export default function App() {
  return (
    <div className="App">
      <Timer />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
