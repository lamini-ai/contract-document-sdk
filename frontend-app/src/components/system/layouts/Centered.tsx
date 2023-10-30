import React from "react";

interface CenteredProps {
  children: React.ReactNode;
}

export const Centered = ({ children }: CenteredProps) => {
  return (
    <div className="default 2xl:max-w-screen-lg lg:max-w-screen-lg md:max-w-screen-md sm:max-w-[960px] m-auto">
      {children}
    </div>
  );
};
