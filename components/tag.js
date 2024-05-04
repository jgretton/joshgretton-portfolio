import React from "react";

const Tag = ({ children, idx }) => {
  return (
    <div
      key={idx}
      className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium tracking-wide text-gray-700 sm:text-sm"
    >
      {children}
    </div>
  );
};

export default Tag;
