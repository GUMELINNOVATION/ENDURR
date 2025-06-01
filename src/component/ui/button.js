import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${className} px-4 py-2 font-semibold rounded`}
    >
      {children}
    </button>
  );
}
