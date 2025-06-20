import Queue from "./Queue";
import type { QueueAreaProps } from "../../types/QueueAreaProps";

const QueueArea: React.FC<QueueAreaProps> = ({ assignedItems }) => {
  const priorityItems = assignedItems.filter((item) => item.priority === 0);
  const regularItems = assignedItems.filter((item) => item.priority === 1);

  return (
    <div className="w-1/2 h-full bg-gray-300 rounded-2xl p-8 flex flex-col gap-4 overflow-auto scrollbar scrollbar-w-2 scrollbar-track-gray-300 scrollbar-thumb-gray-500 scrollbar-hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Queue type={0} items={priorityItems} />
      <Queue type={1} items={regularItems} />
      <Queue type={1} items={regularItems} />
    </div>
  );
};

export default QueueArea;
