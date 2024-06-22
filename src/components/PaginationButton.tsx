import PaginationNumber from "./PaginationNumbers";
interface Props {
  table: any;
  index: number;
  pageCount: number;
}
export function PaginationButton({ table, index, pageCount }: Props) {
  console.log(typeof pageCount);
  return (
    <div className="flex h-8 items-center -space-x-px text-sm">
      <button
        type="button"
        className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {"<"}
      </button>
      <PaginationNumber text={String(index + 1)} />
      <PaginationNumber text="..." />
      <PaginationNumber text={String(pageCount)} />
      <button
        type="button"
        className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {">"}
      </button>
    </div>
  );
}
