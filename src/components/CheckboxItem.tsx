function CheckboxItem() {
  return (
    <div className="flex items-center">
      <input
        id="checkbox-item-1"
        type="checkbox"
        value=""
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
      />
      <label
        htmlFor="checkbox-item-1"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Default checkbox
      </label>
    </div>
  );
}

export default CheckboxItem;
