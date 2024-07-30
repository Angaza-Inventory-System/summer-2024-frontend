interface Props {
  text: string;
}

export const FormLabel = ({ text }: Props) => {
  return (
    <label
      htmlFor={text}
      className="w-32 text-sm font-bold text-[#3aaef1ec] dark:text-gray-500"
    >
      {text}
    </label>
  );
};
