import React from "react";
import Image from "next/image";
import ButtonIcon from "@/components/core/ButtonIcon";

interface HeaderProps {
  onBackClick: () => void;
  onRefreshClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBackClick, onRefreshClick }) => {
  return (
    <div className="w-full flex justify-between items-center mb-8 md:mb-12 mt-3 md:mt-0 z-10">
      <ButtonIcon variant="back" onClick={onBackClick} />
      <Image
        src="/images/logo.svg"
        alt="Juicebox logo"
        width={120}
        height={30}
        className="w-30 md:w-32"
        priority
      />
      <ButtonIcon variant="refresh" onClick={onRefreshClick} />
    </div>
  );
};

export default Header;
