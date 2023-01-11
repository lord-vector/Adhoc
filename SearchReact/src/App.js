import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const cities = ["Mumbai", "Dehli", "Chennai", "Bengaluru", "Hyderabad"];
  const [arrayDisplay, setArrayDisplay] = useState(cities);

  const handleChange = (event) => {
    const suggestion = cities.filter((ele) => {
      if (ele.includes(event.target.value)) {
        return ele;
      }
    });
    setArrayDisplay(suggestion);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start typing and search the city</h2>
      <input type="text" onChange={handleChange} />
      <div>
        {arrayDisplay.map((ele) => (
          <p>{ele}</p>
        ))}
      </div>
    </div>
  );
}
