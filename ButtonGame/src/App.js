import "./style.css";
import Button from "./Button";
import DisplayBlock from "./displayBlock";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(false);

  const handleCreate = () => {
    setCount(count + 1);
  };
  const handledelete = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };
  const handleUpdate = () => {
    setUpdate(!update);
  };
  const handleOnchange = (event) => {
    isNaN(parseInt(event.target.value, 10))
      ? setCount(count)
      : setCount(parseInt(event.target.value, 10));
    console.log(count);
    console.log(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start clicking to see some magic happen!</h2>
      <DisplayBlock displayCount={count} />
      <div className="buttons">
        <Button action={"create"} handleEvent={handleCreate} />
        <Button action={"delete"} handleEvent={handledelete} />
        <Button action={"update"} handleEvent={handleUpdate} />
      </div>
      <div>{update && <input type="text" onChange={handleOnchange} />}</div>
    </div>
  );
}
