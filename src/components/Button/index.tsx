import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface BaseButtonProps {
  className?: string;
  size?: "small" | "middle" | "large";
  disabled?: boolean;
  children?: ReactNode;
}

type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
const Index: FC<ButtonProps> = (props) => {
  const {
    size = "middle",
    children = "按钮",
    className,
    disabled,
    ...restProps
  } = props;
  return (
    <button
      className={cn("btn", `btn-${size}`, className, { disabled })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Index;
