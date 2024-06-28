interface Props {
  text: string;
  setValue: React.FormEvent;
}

const Field = ({ text, setValue }: Props) => {
  return (
    <>
      <label className="font-extrabold text-[#00008B]">{text}</label>
      <input
        type="text"
        className="mb-3 rounded-md border-none"
        onChange={setValue}
        value={text}
      />
    </>
  );
};

export default Field;
