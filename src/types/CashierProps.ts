import type { ItemProps } from "./ItemProps";

export type CashierProps = {
  items: ItemProps[];
  addItem: () => void;
  assignItem: () => void;
};
