import Queue from "./Queue";
import type { QueueAreaProps } from "../../types/QueueAreaProps";

const QueueArea: React.FC<QueueAreaProps> = ({
  priorityQueue,
  firstRegularQueue,
  secondRegularQueue,
}) => {
  return (
    <div className="w-1/2 p-2 rounded-2xl bg-linear-to-t from-gradstart via-gradstop to-gradend">
      <div className="w-full h-full bg-componentbody rounded-lg p-8 flex flex-col gap-4 overflow-hidden">
        <Queue type={0} items={priorityQueue} />
        <Queue type={1} items={firstRegularQueue} />
        <Queue type={2} items={secondRegularQueue} />
      </div>
    </div>
  );
};

export default QueueArea;
