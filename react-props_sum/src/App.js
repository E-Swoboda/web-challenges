import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  console.log("valueA:", valueA);
  console.log("valueB:", valueB);
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
export default function App() {
  return <Sum valueA={5} valueB={3} />;
}
