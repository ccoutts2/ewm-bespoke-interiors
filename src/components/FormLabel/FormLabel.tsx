interface FormLabelProps {
  htmlFor: string;
  label: string;
  labelNumber: string;
}

const FormLabel = ({ htmlFor, label, labelNumber }: FormLabelProps) => {
  return (
    <div className="w-full pt-2">
      <h4 className="inline pr-2 text-[0.5rem]">{labelNumber}</h4>
      <label className="text-sm" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default FormLabel;
