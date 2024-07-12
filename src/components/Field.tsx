import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function Field({ text, setValue }: Props) {
  return (
    <div className="mb-6 flex items-center">
      <label className="w-32 font-bold text-[#3aaef1ec]">{text}</label>
      <input
        type="text"
        className="ml-4 flex-1 rounded-md border border-black px-3 py-2 shadow-sm"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Field;
