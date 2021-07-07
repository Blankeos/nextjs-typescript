import React from "react";

interface Props {
  children?: any;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={`max-w-6xl mx-auto p-5 ${className}`}>{children}</div>;
};

export default Container;
