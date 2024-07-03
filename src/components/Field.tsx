interface Props {
  text: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Field = ({ text, setValue }: Props) => {
  return (
    <>
      <label className="font-extrabold text-[#00008B]">{text}</label>
      <input
        type="text"
        className="mb-3 rounded-md border-none"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default Field;
