// import styles from "./navbar.module.css"
import shoppingIcon from "@/assets/shopping-icon.svg"

const Navbar = () => (
  <nav className="flex justify-center items-center text-center bg-[#818cf8] py-0 px-4 h-14">
    <img src={shoppingIcon} alt="shopping icon" className="size-6" />
    <h1 className="text-[#f3f4f6] text-2xl font-bold">Shopping List</h1>
  </nav>
)

export default Navbar
