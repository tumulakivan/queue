import { useState, useEffect } from "react";
import Cashier from "./components/Cashier";
import QueueArea from "./components/Queues/QueueArea";
import type { ItemProps } from "./types/ItemProps";

function App() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [countItems, setCountItems] = useState<number | 0>(0);
  const [priorityQueue, setPriorityQueue] = useState<ItemProps[]>([]);
  const [firstRegularQueue, setFirstRegularQueue] = useState<ItemProps[]>([]);
  const [secondRegularQueue, setSecondRegularQueue] = useState<ItemProps[]>([]);

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

      if (firstItem && firstItem.priority === 0) {
        setPriorityQueue((prev) => [...prev, firstItem]);
      } else if (firstItem && firstItem.priority === 1) {
        if (firstRegularQueue.length === 0) {
          setFirstRegularQueue((prev) => [...prev, firstItem]);
        } else if (secondRegularQueue.length === 0) {
          setSecondRegularQueue((prev) => [...prev, firstItem]);
        } else if (firstRegularQueue.length <= secondRegularQueue.length) {
          setFirstRegularQueue((prev) => [...prev, firstItem]);
        } else {
          setSecondRegularQueue((prev) => [...prev, firstItem]);
        }
      }

      return otherItems;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPriorityQueue((prev) =>
        prev
          .map((item) => ({
            ...item,
            duration: item.duration > 0 ? item.duration - 1 : 0,
          }))
          .filter((item) => item.duration > 0)
      );

      setFirstRegularQueue((prev) =>
        prev
          .map((item) => ({
            ...item,
            duration: item.duration > 0 ? item.duration - 1 : 0,
          }))
          .filter((item) => item.duration > 0)
      );

      setSecondRegularQueue((prev) =>
        prev
          .map((item) => ({
            ...item,
            duration: item.duration > 0 ? item.duration - 1 : 0,
          }))
          .filter((item) => item.duration > 0)
      );
    }, 1000); // every 1 second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  useEffect(() => {
    const offset = firstRegularQueue.length - secondRegularQueue.length;

    if (Math.abs(offset) >= 2) {
      if (offset > 0) {
        setFirstRegularQueue((prev) => {
          const [transferItem, ...prevQueue] = prev;
          setSecondRegularQueue((second) => [...second, transferItem]);
          return prevQueue;
        });
      } else {
        setSecondRegularQueue((prev) => {
          const [transferItem, ...prevQueue] = prev;
          setFirstRegularQueue((first) => [...first, transferItem]);
          return prevQueue;
        });
      }
    }
  }, [firstRegularQueue, secondRegularQueue]);

  return (
    <div className="p-8 bg-gray-800 w-screen h-screen overflow-hidden flex flex-row gap-8">
      <Cashier items={items} addItem={addItem} assignItem={assignItem} />
      <QueueArea
        priorityQueue={priorityQueue}
        firstRegularQueue={firstRegularQueue}
        secondRegularQueue={secondRegularQueue}
      />
    </div>
  );
}

export default App;
