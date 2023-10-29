import { useEffect, useState } from "react";

export function useRandomCounter() {
  const [data, setData] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setData(Math.random() + "");
    }, 2000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);
  return data;
}
