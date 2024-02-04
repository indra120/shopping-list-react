import { useState } from "react"
import { ShoppingItem } from "@/app"
import styles from "./add-shopping-item.module.css"

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="List"
      />
      <button className={styles.addButton} type="submit">
        add
      </button>
    </form>
  )
}

export default AddShoppingItem
