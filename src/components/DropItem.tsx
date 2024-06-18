interface Props {
  text: string;
}

function DropItem({ text }: Props) {
  return (
    <div className="flex items-center hover:bg-slate-200">
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {text}
      </label>
    </div>
  );
}
export default DropItem;
