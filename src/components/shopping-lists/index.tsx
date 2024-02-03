import { FC } from "react"
import { ShoppingItem } from "@/app"
import ActionButton from "@/components/action-button"
import plusIcon from "@/assets/plus-icon.svg"
import minusIcon from "@/assets/minus-icon.svg"
import styles from "./shopping-lists.module.css"

interface ShoppingListsProps {
  shoppingList: ShoppingItem[]
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const ShoppingLists: FC<ShoppingListsProps> = (props) => {
  const increment = (i: number) => () => {
    const newList = [...props.shoppingList]
    newList[i].count++
    props.setShoppingList(newList)
  }

  const decrement = (i: number) => () => {
    const newList = [...props.shoppingList]

    if (newList[i].count > 0) {
      // Selama jumlah count masih di atas 0, bisa lakuin pengurangan
      newList[i].count--
    } else {
      // Kalo udah 0 dan masih dikurangin juga, hapus array value dengan index yang sesuai
      newList.splice(i, 1)
    }

    props.setShoppingList(newList)
  }

  return (
    <section className={styles.lists}>
      {props.shoppingList.map((item, i) => {
        return (
          <div
            className={`${styles.listItem} ${
              props.shoppingList.length === i + 1 && styles.divider
            }`}
            key={i}
          >
            {item.title}

            <div className={styles.iconWrapper}>
              <div className={styles.count}>{item.count}</div>

              <ActionButton
                onClick={decrement(i)}
                icon={minusIcon}
                alt="minus icon"
              />
              <ActionButton
                onClick={increment(i)}
                icon={plusIcon}
                alt="plus icon"
              />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ShoppingLists
