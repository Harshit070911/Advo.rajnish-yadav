import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="fixed inset-0 h-full w-full bg-[#020617] [background:radial-gradient(125%_125%_at_50%_-50%,#1e3a8a36_40%,#020617_100%)] -z-50 pointer-events-none"></div>
  );
};
