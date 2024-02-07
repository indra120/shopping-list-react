import { ShoppingItem } from "@/app"
import ActionButton from "@/components/action-button"
import plusIcon from "@/assets/plus-icon.svg"
import minusIcon from "@/assets/minus-icon.svg"

interface ShoppingListsProps {
  shoppingList: ShoppingItem[]
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const ShoppingLists: React.FC<ShoppingListsProps> = (props) => {
  const increment = (i: number) => () => {
    const newList = [...props.shoppingList]
    newList[i].count++
    props.setShoppingList(newList)
  }

  const decrement = (i: number) => () => {
    const newList = [...props.shoppingList]

    if (newList[i].count > 0) {
      newList[i].count--
    } else {
      newList.splice(i, 1)
    }

    props.setShoppingList(newList)
  }

  return (
    <section className="shadow overflow-x-hidden overflow-y-auto rounded-2xl max-h-[640px]">
      {props.shoppingList.map((item, i) => (
        <div
          className={`flex justify-between items-center h-14 py-3 px-4 bg-white text-gray-700 text-base font-semibold ${
            props.shoppingList.length === i + 1 && "border-b border-gray-100"
          }`}
          key={i}
        >
          {item.title}

          <div className="flex items-center justify-between w-32">
            <div className="flex justify-center items-center w-8 h-6 rounded text-indigo-500 bg-gray-100 shadow-md">{item.count}</div>

            <ActionButton onClick={decrement(i)} icon={minusIcon} alt="minus icon" />
            <ActionButton onClick={increment(i)} icon={plusIcon} alt="plus icon" />
          </div>
        </div>
      ))}
    </section>
  )
}

export default ShoppingLists
