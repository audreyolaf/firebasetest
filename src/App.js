import logo from "./logo.svg";
import "./App.css";

import { onSnapshot, collection, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import Dot from "./Dot";
import { handleEdit, handleNew } from "./util";

function App() {
  const [colors, setColors] = useState([{ name: "Loading", id: "initial" }]);
  console.log(colors);
  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>

      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <a href="#" onClick={() => handleEdit(color.id)}>
              edit
            </a>{" "}
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
