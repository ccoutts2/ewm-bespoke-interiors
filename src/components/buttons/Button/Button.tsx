import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ href, label, onClick }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className="no-underline">
        <button
          className="w-fit rounded bg-[#444444] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#e4e8ed]"
          onClick={onClick}
        >
          {label}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className="w-fit rounded bg-[#444444] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#e4e8ed]"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
};

export default Button;
