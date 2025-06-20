import type { ItemProps } from "../types/CustomerProps";

const Items: React.FC<ItemProps> = ({ id, duration }) => {
    return (
        <div className="px-4 py-2 bg-amber-300 h-fit w-fit">
            {id} | {duration}
        </div>
    )
}

export default Items;