"use client";

import MUIBTN from "../components/MUIBTN";
import { toast } from "react-hot-toast";

export default function Home() {
  return (
    <main className="">
      hello, world
      <div className="flex w-max gap-4">
        <MUIBTN
          color="red"
          placeholder="Toast Button"
          onClick={() => {
            toast.success("aaaaaa", { position: "top-right", duration: 4000 });
            // toast .error("bbbbbb");
          }}
        >
          Toast
        </MUIBTN>
      </div>
    </main>
  );
}
