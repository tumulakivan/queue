import { useEffect, useState } from "react";
import type { ItemProps } from "../types/ItemProps";

const Items: React.FC<ItemProps> = ({ id, duration, priority, onClick }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`text-base text-center px-4 py-2 h-fit w-30 rounded border bg-gradient-to-t cursor-pointer transition-all duration-150 hover:shadow-btnshadow ${
        priority === 0 ? "from-priogradstart via-priogradstop to-priogradend" : "from-btngradstart via-btngradstop to-btngradend"
      } transition-opacity duration-200 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClick}
    >
      {id} | {duration}
    </div>
  );
};

export default Items;
