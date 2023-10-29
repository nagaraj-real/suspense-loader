import { memo, use } from "react";
let count = 0;
async function getData() {
  if (count !== 0) {
    return;
  }
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos/3?_delay=5000"
  );
  const res = await data.json();
  count++;
  return res;
}
export function LoadData() {
  let data = use(getData());

  return (
    <>
      {data ? <h2>{data.id}</h2> : <h2>test</h2>}
    </>
  );
}

export const Load = memo(LoadData)
