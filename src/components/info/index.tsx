interface InfoProps {
  totalItems: number
  totalCounts: number
  onDelete: () => void
}

const Info: React.FC<InfoProps> = (props) => (
  <div className="flex justify-between items-center w-full py-4 px-0">
    <div className="flex justify-center items-center text-gray-700 text-xs">
      <p className="font-bold">Total List: {props.totalItems}</p>
    </div>

    <div className="flex justify-center items-center text-gray-700 text-xs">
      <p className="font-bold">Total Counts: {props.totalCounts}</p>
    </div>

    <button
      onClick={props.onDelete}
      className="bg-[none] border-0 p-0 text-red-500 text-xs font-bold cursor-pointer"
    >
      Delete All Items
    </button>
  </div>
)

export default Info
