import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 *
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 *
 * Spoiler: the page won't update when new things get added
 * to the array!
 */
function App() {
  let thingsArray = ["Thing 1", "Thing 2"];
  let thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  let [result, setResult] = React.useState(thingsElements);
  function add() {
    setResult((prevElement) => [
      ...prevElement,
      <p>Thing {prevElement.length + 1}</p>,
    ]);
  }
  return (
    <div>
      <button onClick={add}>Add Item</button>
      {result}
    </div>
  );
}
root = createRoot(document.getElementById("root"));
root.render(<App />);
