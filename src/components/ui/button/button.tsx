import { ButtonHTMLAttributes } from "react";
import Spinner from "../spinner/spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  textLoading?: string;
  color?:
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
  isLoading?: boolean;
};

export default function Button({
  text,
  textLoading,
  isLoading = false,
  color = "primary",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <div>
    <button
      className={`btn d-flex align-items-center justify-content-center gap-2 ${isLoading ? `btn-outline-${color}` : `btn-${color}`}`}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading && <Spinner size="sm" />}
      
      <span className="mx-2">  
        {
          isLoading
          ? textLoading ?? text
          : text
        }
     </span>
    </button>
    </div>
  );
}
