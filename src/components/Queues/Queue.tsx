import type { QueueProps } from "../../types/QueueProps";
import Items from "../Items";

const Queue: React.FC<QueueProps> = ({ type, items }) => {
  return (
    <div className="min-h-1/3 w-full gap-2 flex flex-col">
      <h1>
        {type === 0 ? "Priority" : "Regular"}
        <span className="text-red-400 italic text-xs ml-2">
          Number of items in queue: {items.length}
        </span>
      </h1>
      <div className="bg-white rounded-2xl p-4 flex flex-wrap overflow-auto gap-2 content-start items-start scrollbar scrollbar-w-2 scrollbar-track-gray-300 scrollbar-thumb-gray-500 scrollbar-hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {items.length === 0 ? (
          <p className="text-gray-400">Empty queue...</p>
        ) : (
          items.map((item) => <Items key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Queue;
