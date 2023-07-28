import Link from "next/link";
import { store } from "../store";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  console.log();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>server state: {JSON.stringify(store.get("state"), null, 2)}</pre>
      <Link href="/about">to /about</Link>
    </div>
  );
}
