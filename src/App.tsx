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

  const removeItemById = (id: number, type: 0 | 1 | 2) => {
    switch (type) {
      case 0:
        setPriorityQueue((queue) => queue.filter((item) => item.id !== id));
        break;
      case 1:
        setFirstRegularQueue((queue) => queue.filter((item) => item.id !== id));
        break;
      case 2:
        setSecondRegularQueue((queue) =>
          queue.filter((item) => item.id !== id)
        );
        break;
    }
  };

  const addItem = () => {
    const newItem: ItemProps = {
      id: countItems,
      duration: getRandomDuration(1, 100),
      priority: getRandomPriority(),
      onClick: () => {},
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

  const assignAllItems = () => {
    const newPriorityQueue = [...priorityQueue];
    const newFirstRegular = [...firstRegularQueue];
    const newSecondRegular = [...secondRegularQueue];

    items.forEach((item) => {
      if (item.priority === 0) {
        newPriorityQueue.push(item);
      } else {
        if (newFirstRegular.length === 0) {
          newFirstRegular.push(item);
        } else if (newSecondRegular.length === 0) {
          newSecondRegular.push(item);
        } else if (newFirstRegular.length <= newSecondRegular.length) {
          newFirstRegular.push(item);
        } else {
          newSecondRegular.push(item);
        }
      }
    });

    setPriorityQueue(newPriorityQueue);
    setFirstRegularQueue(newFirstRegular);
    setSecondRegularQueue(newSecondRegular);
    setItems([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPriorityQueue((prev) => {
        if (prev.length === 0) return prev;

        const [first, ...rest] = prev;
        const updatedFirst = {
          ...first,
          duration: first.duration > 0 ? first.duration - 1 : 0,
        };

        const updatedQueue = [updatedFirst, ...rest];

        return updatedQueue.filter((item) => item.duration > 0);
      });

      setFirstRegularQueue((prev) => {
        if (prev.length === 0) return prev;

        const [first, ...rest] = prev;
        const updatedFirst = {
          ...first,
          duration: first.duration > 0 ? first.duration - 1 : 0,
        };

        const updatedQueue = [updatedFirst, ...rest];

        return updatedQueue.filter((item) => item.duration > 0);
      });

      setSecondRegularQueue((prev) => {
        if (prev.length === 0) return prev;

        const [first, ...rest] = prev;
        const updatedFirst = {
          ...first,
          duration: first.duration > 0 ? first.duration - 1 : 0,
        };

        const updatedQueue = [updatedFirst, ...rest];

        return updatedQueue.filter((item) => item.duration > 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const offset = firstRegularQueue.length - secondRegularQueue.length;

    if (
      priorityQueue.length === 0 &&
      (firstRegularQueue.length > 0 || secondRegularQueue.length > 0)
    ) {
      const totalItems = firstRegularQueue.length + secondRegularQueue.length;
      const average = Math.floor(totalItems / 3);

      // Step 1: Merge regular queues
      const combined = [...firstRegularQueue, ...secondRegularQueue];

      // Step 2: Distribute evenly across the 3 queues
      const newFirst = combined.slice(0, average);
      const newSecond = combined.slice(average, average * 2);
      const newPriority = combined.slice(average * 2);

      setFirstRegularQueue(newFirst);
      setSecondRegularQueue(newSecond);
      setPriorityQueue(newPriority);
    } else if (Math.abs(offset) >= 2) {
      // Regular 2-way balancing
      if (offset > 0) {
        setFirstRegularQueue((prev) => {
          const [transferItem, ...rest] = prev;
          setSecondRegularQueue((second) => [...second, transferItem]);
          return rest;
        });
      } else {
        setSecondRegularQueue((prev) => {
          const [transferItem, ...rest] = prev;
          setFirstRegularQueue((first) => [...first, transferItem]);
          return rest;
        });
      }
    }
  }, [priorityQueue, firstRegularQueue, secondRegularQueue]);

  return (
    <div className="p-8 font-small bg-base w-screen h-screen overflow-hidden flex flex-row gap-8">
      <Cashier
        items={items}
        addItem={addItem}
        assignItem={assignItem}
        assignAllItems={assignAllItems}
      />
      <QueueArea
        priorityQueue={priorityQueue}
        firstRegularQueue={firstRegularQueue}
        secondRegularQueue={secondRegularQueue}
        removeItemById={removeItemById}
      />
    </div>
  );
}

export default App;
