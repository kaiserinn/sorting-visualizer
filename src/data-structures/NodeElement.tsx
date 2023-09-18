const NodeElement = ({ height }: { height: number }) => {
  return (
    <div
      className="w-5 bg-sky-300 flex items-end text-sm justify-center"
      style={{ height: height }}
    >{height}</div>
  )
};

export default NodeElement;
