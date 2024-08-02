import React from "react";

interface ComponentProps {}

const Component: React.FC<ComponentProps> = ({}) => {
  return (
    <>
      <div className="text-blue-500">I'm a React Component!</div>
    </>
  );
};

export default Component;
