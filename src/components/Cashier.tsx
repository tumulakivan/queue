import type { CashierProps } from "../types/CashierProps";
import Items from "./Items";

const Cashier: React.FC<CashierProps> = ({
  items,
  addItem,
  assignItem,
  assignAllItems,
}) => {
  return (
    <div className="w-1/2 p-2 rounded-2xl bg-linear-to-t from-gradstart via-gradstop to-gradend">
      <div className="w-full h-full rounded-lg bg-componentbody p-6 flex flex-row">
        <div className="w-1/2 h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-lighttext text-5xl font-bold font-big">
            Cashier Queue
          </h1>
          <div className="flex gap-4">
            <div className="bg-gradient-to-t from-gradstart via-gradstop to-gradend p-1 w-fit h-fit rounded transition-all duration-150 hover:shadow-btnshadow">
              <button
                className="text-lighttext bg-black hover:bg-base transition-colors duration-150 w-fit px-4 py-2 rounded cursor-pointer"
                onClick={addItem}
              >
                Add Item
              </button>
            </div>
            <div className="bg-gradient-to-t from-gradstart via-gradstop to-gradend p-1 w-fit h-fit rounded transition-all duration-150 hover:shadow-btnshadow">
              <button
                className="text-lighttext bg-black hover:bg-base transition-colors duration-150 w-fit px-4 py-2 rounded cursor-pointer"
                onClick={assignItem}
              >
                Assign Item
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-t from-gradstart via-gradstop to-gradend p-1 w-fit h-fit rounded transition-all duration-150 hover:shadow-btnshadow">
            <button
              className="text-lighttext bg-black hover:bg-base transition-colors duration-150 w-fit px-4 py-2 rounded cursor-pointer"
              onClick={assignAllItems}
            >
              Assign All Items
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full bg-base inset-shadow-cashier rounded p-4 flex flex-wrap overflow-auto gap-2 content-start items-start scrollbar scrollbar-w-1 scrollbar-thumb-gray-500 scrollbar-hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full transition-all duration-100">
          {items.length === 0 ? (
            <p className="text-gray-400">No items yet.</p>
          ) : (
            items.map((item) => <Items key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Cashier;
