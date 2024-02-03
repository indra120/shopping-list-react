import { useState } from "react"
import Navbar from "@/components/navbar"
import ShoppingLists from "@/components/shopping-lists"
import AddShoppingItem from "@/components/add-shopping-item"

export interface ShoppingItem {
  title: string
  count: number
}

const App = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([
    { title: "Susu ultra", count: 1 },
    { title: "Tahu sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ])

  return (
    <>
      <Navbar />
      <section className="container">
        <AddShoppingItem setShoppingList={setShoppingList} />
        {shoppingList.length > 0 ? (
          <ShoppingLists
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        ) : (
          <div className="empty">Kosong nih...</div>
        )}
      </section>
    </>
  )
}

export default App
