import type { ItemProps } from "./ItemProps";

export type QueueAreaProps = {
  priorityQueue: ItemProps[];
  firstRegularQueue: ItemProps[];
  secondRegularQueue: ItemProps[];
  removeItemById: (id: number, type: 0 | 1 | 2) => void;
};
