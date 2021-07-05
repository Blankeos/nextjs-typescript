import React from "react";

interface Props {
  children: any;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="max-w-5xl mx-auto p-5">{children}</div>;
};

export default Container;
