import type { ItemProps } from "./ItemProps";

export type QueueProps = {
  type: 0 | 1 | 2;
  items: ItemProps[];
  removeItemById: (id: number) => void;
};
