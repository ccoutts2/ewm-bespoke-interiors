interface DropDownListProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
  options: { value: string; label: string }[];
  onFocus?: () => void;
  onBlur?: () => void;
  isError: boolean;
  formFields: {
    [key: string]: string;
  };
}

const DropDownList = ({
  onChange,
  id,
  name,
  options,
  onFocus,
  onBlur,
  isError,
  formFields,
}: DropDownListProps) => {
  return (
    <select
      onChange={onChange}
      className={`w-full resize-none border-none bg-[transparent] p-4 outline-none placeholder:text-sm ${
        isError && !formFields.name.length ? "rounded-3xl bg-[#7006061a]" : ""
      }`}
      id={id}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDownList;
