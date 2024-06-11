interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  isError: boolean;
  formFields: {
    [key: string]: string;
  };
}

const Input = ({
  onChange,
  id,
  name,
  type,
  placeholder,
  onFocus,
  onBlur,
  isError,
  formFields,
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:text-sm ${
        isError && !formFields.name.length ? "rounded-3xl bg-[#7006061a]" : ""
      }`}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    ></input>
  );
};

export default Input;
