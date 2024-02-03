import styles from "./action-button.module.css"

interface ActionButtonProps {
  onClick: () => void
  icon: string
  alt: string
}

const ActionButton: React.FC<ActionButtonProps> = (props) => (
  <button onClick={props.onClick} className={styles.actionButton}>
    <img src={props.icon} alt={props.alt} />
  </button>
)

export default ActionButton
