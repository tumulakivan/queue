import { useEffect, useState } from "react";
import type { ItemProps } from "../types/ItemProps";

const Items: React.FC<ItemProps> = ({ id, duration, priority }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`text-base text-center px-4 py-2 h-fit w-28 rounded border ${
        priority === 0 ? "bg-red-300" : "bg-amber-300"
      } transition-opacity duration-200 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {id} | {duration}
    </div>
  );
};

export default Items;
