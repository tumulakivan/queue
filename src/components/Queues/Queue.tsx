import type { QueueProps } from "../../types/QueueProps";
import Items from "../Items";

const Queue: React.FC<QueueProps> = ({ type, items, removeItemById }) => {
  return (
    <div className="min-h-1/3 w-full gap-2 flex flex-col text-lighttext">
      <h1 className="text-2xl">
        {type === 0 ? "Priority" : "Regular"}
      </h1>
      <div className="bg-base rounded p-4 flex flex-wrap overflow-hidden gap-2 content-start items-start">
        {items.length === 0 ? (
          <p className="text-gray-400">Empty queue...</p>
        ) : (
          items.map((item) => (
            <Items
              key={item.id}
              {...item}
              onClick={() => removeItemById(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Queue;
