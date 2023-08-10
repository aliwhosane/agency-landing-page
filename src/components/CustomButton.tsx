"use client";
import { MouseEventHandler } from "react";
import Image from "next/image";

interface CustomButtonProps {
  title: string;
  rightIcon?: string;
  isDisabled?: boolean;
  textStyles?: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  isDisabled,
  rightIcon,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={isDisabled}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
