interface Props {
  table: any;
  index: number;
}

export function PaginationButton({
  table,
  index,
  setPage,
  pageCount,
  get,
}: Props) {
  const handlePreviousPage = () => {
    if (index > 1) {
      setPage(index - 1);
      get();
    }
  };

  const handleNextPage = () => {
    if (index < pageCount) {
      setPage(index + 1);
      get();
    }
  };
  return (
    <div className="flex h-8 items-center -space-x-px text-sm">
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={index === 1}
        className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {"<"}
      </button>
      <div className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        {"Page " + index + "/" + pageCount}
      </div>
      <button
        type="button"
        onClick={() => {}}
        className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        ...
      </button>
      <button
        type="button"
        onClick={handleNextPage}
        disabled={index === pageCount}
        className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {">"}
      </button>
    </div>
  );
}
