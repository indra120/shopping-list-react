import { useState } from "react"
import { ShoppingItem } from "@/app"
// import styles from "./add-shopping-item.module.css"

interface AddShoppingItemProps {
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const AddShoppingItem: React.FC<AddShoppingItemProps> = (props) => {
  const [title, setTitle] = useState<string>("")

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (!title) return alert("No title provided!")

    props.setShoppingList((prev) => [...prev, { title, count: 0 }])
    setTitle("")
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="flex-1 mr-2 shadow border-0 rounded-full p-3 text-gray-700 text-base font-semibold outline-0"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="List"
      />
      <button
        className="border-0 rounded-full text-slate-50 text-base font-bold uppercase w-20 bg-indigo-400 shadow"
        type="submit"
      >
        add
      </button>
    </form>
  )
}

export default AddShoppingItem
