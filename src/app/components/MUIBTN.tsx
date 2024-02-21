"use client";

import { Button } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/button";

type Props = {
  children: React.ReactNode;
  placeholder: string;
  color: color | undefined;
  // otherProps: any;
  onClick: () => void;
};

function MUIBTN({
  children,
  color,
  placeholder,
  onClick,
  ...otherProps
}: Props) {
  return (
    <Button
      color={color}
      placeholder={placeholder}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default MUIBTN;
