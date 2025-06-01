import React, { useState } from "react";

export function Tabs({ defaultValue, className, children }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={className} data-tabs>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}

export function TabsList({ children, className, value, setValue }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: value === child.props.value,
          setValue,
        })
      )}
    </div>
  );
}

export function TabsTrigger({
  children,
  value: triggerValue,
  isActive,
  setValue,
}) {
  return (
    <button
      onClick={() => setValue(triggerValue)}
      className={`py-2 px-4 font-semibold ${
        isActive ? "border-b-2 border-blue-600" : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value: contentValue, value }) {
  return contentValue === value ? <div>{children}</div> : null;
}
