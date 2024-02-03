import { useRef } from "react"
import { ShoppingItem } from "@/app"
import styles from "./add-shopping-item.module.css"

interface AddShoppingItemProps {
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const AddShoppingItem: React.FC<AddShoppingItemProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (!titleRef.current.value) return alert("No blank list!")

    props.setShoppingList((prev) => [
      ...prev,
      { title: titleRef.current.value, count: 0 },
    ])
    titleRef.current.value = ""
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="title"
        ref={titleRef}
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
