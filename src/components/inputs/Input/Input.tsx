interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

const Input = ({
  onChange,
  id,
  name,
  type,
  placeholder,
  required = false,
  ...defaultProps
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className="w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:pl-1 placeholder:text-sm"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      {...defaultProps}
    ></input>
  );
};

export default Input;
