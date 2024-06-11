interface FormLabelProps {
  htmlFor: string;
  activeLabel: string;
  label: string;
  labelNumber: string;
}

const FormLabel = ({
  htmlFor,
  activeLabel,
  label,
  labelNumber,
}: FormLabelProps) => {
  return (
    <div className="w-full pt-2">
      <h4 className="inline pr-2 text-[0.5rem]">{labelNumber}</h4>
      <label
        className={`text-sm transition-all ${
          activeLabel === "name" ? "text-[#2d2d2d66]" : ""
        }`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
    </div>
  );
};

export default FormLabel;
