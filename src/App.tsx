import { useState } from "react";
import Cashier from "./components/Cashier";
import QueueArea from "./components/Queues/QueueArea";
import type { ItemProps } from "./types/ItemProps";

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [assignedItems, setAssignedItems] = useState<ItemProps[]>([]);
  const [countItems, setCountItems] = useState<number | 0>(0);

  const getRandomDuration = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomPriority = (): 0 | 1 => {
    return Math.random() < 0.2 ? 0 : 1;
  };

  const addItem = () => {
    const newItem: ItemProps = {
      id: countItems,
      duration: getRandomDuration(1, 100),
      priority: getRandomPriority(),
    };

    setItems([...items, newItem]);
    setCountItems((prev) => prev + 1);
  };

  const assignItem = () => {
    setItems((prevItems) => {
      const [firstItem, ...otherItems] = prevItems;

      if (firstItem) {
        setAssignedItems((prev) => [...prev, firstItem]);
      }

      return otherItems;
    });
  };

  return (
    <div className="p-8 bg-gray-800 w-screen h-screen overflow-hidden flex flex-row gap-8">
      <Cashier items={items} addItem={addItem} assignItem={assignItem} />
      <QueueArea assignedItems={assignedItems} />
    </div>
  );
}

export default App;
