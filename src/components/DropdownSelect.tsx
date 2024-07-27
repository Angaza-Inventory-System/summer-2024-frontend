import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  setProperty: Dispatch<SetStateAction<string | undefined>>;
}

export const DropdownSelect = ({ text, setProperty }: Props) => {
  return (
    <div
      onClick={() => setProperty(text)}
      className="ml-2 text-sm font-medium text-gray-900 hover:bg-slate-200 dark:text-gray-300"
    >
      {text}
    </div>
  );
};
