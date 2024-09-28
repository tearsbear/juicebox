import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonIconVariant = "refresh" | "back";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonIconVariant;
  href?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  variant,
  href,
  className,
  ...props
}) => {
  const baseStyles =
    "w-[46px] h-[46px] rounded-full bg-[#252833] flex items-center justify-center";

  const iconSrc =
    variant === "refresh"
      ? "/images/icons/refresh.svg"
      : "/images/icons/arrow-left.svg";

  const buttonContent = (
    <div className={cn(baseStyles, className)}>
      <Image
        src={iconSrc}
        alt={variant === "refresh" ? "Refresh" : "Back"}
        width={24}
        height={24}
      />
    </div>
  );

  if (variant === "back" && href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button type="button" {...props}>
      {buttonContent}
    </button>
  );
};

export default ButtonIcon;
