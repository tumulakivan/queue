const Cashier: React.FC = () => {
  return (
    <div className="w-1/2 h-full bg-gray-300 rounded-2xl p-8 flex flex-row">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold">Cashier Queue</h1>
        <button className="bg-white w-fit px-4 py-2 rounded border cursor-pointer hover:bg-gray-200">Add Customer</button>
        <button className="bg-white w-fit px-4 py-2 rounded border cursor-pointer hover:bg-gray-200">Assign Customer</button>
      </div>
      <div className="w-1/2 h-full bg-gray-800 rounded-2xl p-4">
      </div>
    </div>
  );
};

export default Cashier;
