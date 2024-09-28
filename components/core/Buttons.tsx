import React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "w-[360px] h-[60px] text-lg font-regular rounded-[19px] transition-colors duration-300 font-sohne";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "text-black bg-mainColor hover:bg-white",
    secondary: "text-black bg-white hover:bg-mainColor",
    outline:
      "text-white bg-transparent border border-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
