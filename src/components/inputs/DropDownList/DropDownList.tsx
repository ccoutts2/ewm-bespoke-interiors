interface DropDownListProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
  options: { value: string; label: string }[];
}

const DropDownList = ({
  onChange,
  id,
  name,
  options,
  ...defaultProps
}: DropDownListProps) => {
  return (
    <select
      onChange={onChange}
      className="w-full resize-none border-none bg-[transparent] p-4 text-sm outline-none"
      id={id}
      name={name}
      defaultValue=""
      {...defaultProps}
    >
      <option disabled value="">
        Please select from the following
      </option>
      {options.map((option, index) => (
        <option className="text-sm" key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropDownList;
