import { useState } from "react";

export default function DefaultLoad() {
  const [data] = useState({ id: "test" });

  return <>{data ? <h2>{data.id}</h2> : <h2>test</h2>}</>;
}
