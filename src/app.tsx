import shoppingIcon from "@/assets/shopping-icon.svg"
import "@/app.css"

const App = () => {
  return (
    <>
      <nav className="nav">
        <img src={shoppingIcon} alt="shopping icon" className="nav-icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>
    </>
  )
}

export default App
