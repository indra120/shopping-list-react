import { FC } from "react"
import styles from "./info.module.css"

interface InfoProps {
  totalItems: number
  totalCounts: number
  onDelete: () => void
}

const Info: FC<InfoProps> = (props) => (
  <div className={styles.info}>
    <div className={styles.infoTotal}>
      <p>Total List: {props.totalItems}</p>
    </div>

    <div className={styles.infoTotal}>
      <p>Total Counts: {props.totalCounts}</p>
    </div>

    <button onClick={props.onDelete} className={styles.deleteAllButton}>
      Delete All Items
    </button>
  </div>
)

export default Info
