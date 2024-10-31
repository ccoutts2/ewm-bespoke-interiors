interface TextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  value: string;
  placeholder: string;
}

const TextArea = ({
  onChange,
  id,
  name,
  value,
  placeholder,
}: TextAreaProps) => {
  return (
    <textarea
      onChange={onChange}
      className="w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:pl-1 placeholder:text-sm"
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
