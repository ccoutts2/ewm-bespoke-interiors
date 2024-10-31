interface ButtonProps {
  label: string;
  ariaLabel: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const Button = ({
  label,
  ariaLabel,
  onClick,
  type,
  ...defaultProps
}: ButtonProps) => {
  return (
    <button
      className="w-fit rounded bg-[#444444] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#f6f6f6]"
      onClick={onClick}
      aria-label={ariaLabel}
      {...defaultProps}
    >
      {label}
    </button>
  );
};

export default Button;
