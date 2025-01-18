import React from "react";
import GradientButton from "./GradientButton";

interface FloatingGradientButtonProps {
  children: React.ReactNode;
  extraClassName?: string;
  onClick?: () => void;
}

const FloatingGradientButton: React.FC<FloatingGradientButtonProps> = ({
  children,
  extraClassName,
  onClick,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
      <GradientButton
        extraClassName={extraClassName}
        onClick={onClick}
      >
        {children}
      </GradientButton>
    </div>
  );
};

export default FloatingGradientButton;
