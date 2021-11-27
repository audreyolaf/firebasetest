import "./App.css";

import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import Dot from "./Dot";
import { handleNew, handleEdit, handleDelete, handleQueryDelete } from "./util";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [colors, setColors] = useState([{ name: "Loading", id: "initial" }]);
  console.log(colors);
  useEffect(() => {
    const collectionRef = collection(db, "colors");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  return (
    <div className="root">
      <Button variant="primary" className="buttonMargin" onClick={handleNew}>
        New
      </Button>
      <Button
        variant="primary"
        className="buttonMargin"
        onClick={handleQueryDelete}
      >
        Query Delete
      </Button>

      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <Button
              variant="warning"
              className="buttonMargin"
              onClick={() => handleEdit(color.id)}
            >
              edit
            </Button>
            <Button
              variant="danger"
              className="buttonMargin"
              onClick={() => handleDelete(color.id)}
            >
              delete
            </Button>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
