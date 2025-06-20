const Cashier: React.FC = () => {
  return (
    <div className="w-1/2 h-full bg-gray-300 rounded-2xl p-8 flex flex-col">
      <h1>Cashier</h1>
      <button className="w-fit border bg-white rounded px-4 py-2 cursor-pointer hover:bg-gray-200">
        Press Me
      </button>
    </div>
  );
};

export default Cashier;
