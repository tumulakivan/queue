import type { CashierProps } from "../types/CashierProps";
import Items from "./Items";

const Cashier: React.FC<CashierProps> = ({
  items,
  addItem,
  assignItem,
  assignAllItems,
}) => {
  return (
    <div className="w-1/2 h-full bg-gray-300 rounded-2xl p-8 flex flex-row">
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold">Cashier Queue</h1>
        <button
          className="bg-white w-fit px-4 py-2 rounded border cursor-pointer hover:bg-gray-200"
          onClick={addItem}
        >
          Add Item
        </button>
        <button
          className="bg-white w-fit px-4 py-2 rounded border cursor-pointer hover:bg-gray-200"
          onClick={assignItem}
        >
          Assign Item
        </button>
        <button
          className="bg-white w-fit px-4 py-2 rounded border cursor-pointer hover:bg-gray-200"
          onClick={assignAllItems}
        >
          Assign All Items
        </button>
      </div>
      <div className="w-1/2 h-full bg-white rounded-2xl p-4 flex flex-wrap overflow-auto gap-2 content-start items-start scrollbar scrollbar-w-2 scrollbar-track-gray-300 scrollbar-thumb-gray-500 scrollbar-hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full transition-all duration-100">
        {items.length === 0 ? (
          <p className="text-white">No items yet.</p>
        ) : (
          items.map((item) => <Items key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
};

export default Cashier;
