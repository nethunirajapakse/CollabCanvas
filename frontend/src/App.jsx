import React, { useEffect, useState } from "react";
import { getMessage } from "./services/canvas";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMessage()
      .then((response) => {
        setData(response.data.message);
        console.log(response.data.message); // Optionally, you can log the message here
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      {/*<h2>Message:</h2>
      <h1>{data}</h1>*/}
    </div>
  );
}

export default App;
