import { useCallback, useMemo, useState } from "react"
import Navbar from "@/components/navbar"
import ShoppingLists from "@/components/shopping-lists"
import AddShoppingItem from "@/components/add-shopping-item"
import Info from "@/components/info"

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

  const totalCounts = useMemo(
    () => shoppingList.reduce((total, num) => total + num.count, 0),
    [shoppingList]
  )

  const deleteAllItems = useCallback(() => {
    setShoppingList([])
  }, [])

  return (
    <>
      <Navbar />

      <section className="container">
        <AddShoppingItem setShoppingList={setShoppingList} />

        <Info
          totalItems={shoppingList.length}
          totalCounts={totalCounts}
          onDelete={deleteAllItems}
        />

        {shoppingList.length > 0 ? (
          <ShoppingLists
            shoppingList={shoppingList}
            setShoppingList={setShoppingList}
          />
        ) : (
          <div className="empty">There is nothing in here...</div>
        )}
      </section>
    </>
  )
}

export default App
