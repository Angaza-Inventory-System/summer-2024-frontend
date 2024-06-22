interface Props {
  text: string;
}

function PaginationNumber({ text }: Props) {
  return (
    <button
      type="button"
      onClick={() => {}}
      className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      {text}
    </button>
  );
}
export default PaginationNumber;
