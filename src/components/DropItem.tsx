import { ColumnVisibilityState } from "./ColumnVisibilityState";

interface Props {
  text: string;
  checkbox: boolean;
  col?: string;
  toggleColumnVisibility?: (columnName: keyof ColumnVisibilityState) => void;
}

function DropItem({
  text,
  col = "",
  checkbox,
  toggleColumnVisibility = (): void => {},
}: Props) {
  return (
    <div className="flex items-center hover:bg-slate-200">
      <input
        type="checkbox"
        defaultChecked={true}
        onChange={() => toggleColumnVisibility(col)}
        className={[
          "h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700",
          checkbox ? "" : "invisible",
        ].join(" ")}
      />
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {text}
      </label>
    </div>
  );
}
export default DropItem;
