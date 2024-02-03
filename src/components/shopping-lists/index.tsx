import { ShoppingItem } from "@/app"
import ActionButton from "@/components/action-button"
import plusIcon from "@/assets/plus-icon.svg"
import minusIcon from "@/assets/minus-icon.svg"
import styles from './shopping-lists.module.css'

interface ShoppingListsProps {
  shoppingList: ShoppingItem[]
  setShoppingList: React.Dispatch<React.SetStateAction<ShoppingItem[]>>
}

const ShoppingLists: React.FC<ShoppingListsProps> = (props) => {
  return (
    <section className={styles.lists}>
      {props.shoppingList.map((item, index) => {
        return (
          <div
            className={`${styles.listItem} ${
              props.shoppingList.length === index + 1 && styles.divider
            }`}
            key={index}
          >
            {item.title}

            <div className={styles.iconWrapper}>
              <div className={styles.count}>{item.count}</div>

              <ActionButton onClick={() => {}} icon={minusIcon} alt="minus icon" />
              <ActionButton onClick={() => {}} icon={plusIcon} alt="plus icon" />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ShoppingLists
