import React from "react";

export const Avatar = ({ children }) => (
  <div className="h-10 w-10 rounded-full overflow-hidden border">
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-full w-full object-cover" />
);
