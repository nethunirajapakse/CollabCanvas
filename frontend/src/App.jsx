import React, { useEffect, useState } from "react";
import { getMessage } from "./services/canvas";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMessage()
      .then((response) => {
        setData(response.data.message);
        console.log(response.data.message); // Move this inside the `then` block
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Data from server:</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
