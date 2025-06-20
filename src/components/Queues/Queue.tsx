import type { QueueProps } from "../../types/QueueProps";

const Queue: React.FC<QueueProps> = ({ type }) => {
  return (
    <div className="min-h-1/3 w-full">
      <h1>{type === 0 ? "Priority" : "Regular"}</h1>
    </div>
  );
};

export default Queue;
