interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
}

const Input = ({
  onChange,
  id,
  name,
  type,
  value,
  placeholder,
  ...defaultProps
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className="w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:pl-1 placeholder:text-sm"
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      {...defaultProps}
    ></input>
  );
};

export default Input;
