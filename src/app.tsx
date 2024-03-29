import { useCallback, useMemo, useState } from "react"
import Header from "@/components/header"
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
      <Header />

      <section className="flex flex-col h-[540px] max-w-[480px] p-4 my-6 mx-auto bg-gray-100 rounded-xl shadow-md">
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
          <div className="size-full flex justify-center items-center text-base font-semibold">
            There is nothing in here...
          </div>
        )}
      </section>
    </>
  )
}

export default App
