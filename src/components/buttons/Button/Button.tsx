import Link from "next/link";

const Button = (props: { href: string; label: string }) => {
  return (
    <Link href={props.href} className="no-underline">
      <button className="w-fit rounded bg-[#191919] px-4 py-2 text-start text-sm capitalize leading-relaxed text-[#e4e8ed]">
        {props.label}
      </button>
    </Link>
  );
};

export default Button;
