interface ActionButtonProps {
  onClick: () => void
  icon: string
  alt: string
}

const ActionButton: React.FC<ActionButtonProps> = (props) => (
  <button onClick={props.onClick} className="border-0 bg-[unset] p-[unset] size-6 cursor-pointer">
    <img src={props.icon} alt={props.alt} />
  </button>
)

export default ActionButton
