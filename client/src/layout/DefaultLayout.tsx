import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Default Layout</h1>
      {children}
    </div>
  );
};

export default DefaultLayout;
