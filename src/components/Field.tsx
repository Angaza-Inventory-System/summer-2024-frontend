import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Field = ({ text, setValue }: Props) => {
  return (
    <div className="flex items-center mb-6">
      <label className="w-32 font-bold text-[#3aaef1ec]">{text}</label>
      <input
        type="text"
        className="flex-1 ml-4 px-3 py-2 border rounded-md shadow-sm border-black"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Field;