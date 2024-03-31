import React from "react";

const sizes = {
  xs: "text-xl font-normal",
  s: "text-2xl font-normal md:text-[22px]",
  md: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_03 font-shortstack ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
