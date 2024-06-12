interface TextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  isError: boolean;
  formFields: {
    [key: string]: string;
  };
}

const TextArea = ({
  onChange,
  id,
  name,
  placeholder,
  onFocus,
  onBlur,
  isError,
  formFields,
}: TextAreaProps) => {
  return (
    <textarea
      onChange={onChange}
      className={`w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:pl-1 placeholder:text-sm ${
        isError && !formFields.name.length ? "rounded-3xl bg-[#7006061a]" : ""
      }`}
      id={id}
      name={name}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    ></textarea>
  );
};

export default TextArea;
