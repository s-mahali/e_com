import { type ButtonProps } from "../index";

const Button = ({ title, className = "", icon, ...props }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-2 bg-primary text-white font-family-primary rounded-sm text-xs flex items-center justify-center gap-2 transition-colors duration-200 ease-in-out hover:bg-primary/90  ${className}`}
      {...props}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
