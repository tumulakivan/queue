import type { ItemProps } from "./ItemProps";

export type QueueAreaProps = {
  priorityQueue: ItemProps[];
  firstRegularQueue: ItemProps[];
  secondRegularQueue: ItemProps[];
};
