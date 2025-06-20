import type { ItemProps } from "../types/ItemProps";

const Items: React.FC<ItemProps> = ({ id, duration, priority }) => {
    return (
        <div className={`px-4 py-2 h-fit w-fit rounded border ${priority === 0 ? "bg-red-300" : "bg-amber-300"}`}>
            {id} | {duration}
        </div>
    )
}

export default Items;