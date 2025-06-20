import Queue from "./Queue";

const QueueArea: React.FC = () => {
  return (
    <div className="w-1/2 h-full bg-gray-300 rounded-2xl p-8 flex flex-col gap-4">
      <Queue type={0} />
      <Queue type={1} />
      <Queue type={1} />
    </div>
  );
};

export default QueueArea;
