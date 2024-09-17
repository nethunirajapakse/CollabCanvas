import React, { useEffect, useState } from "react";
import { getMessage } from "../services/canvas";

const Home = () => {
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
      <h1 className="text-3xl font-bold  text-stone-500">Message:</h1>
      <h1>{data}</h1>
    </div>
  );
};

export default Home;
