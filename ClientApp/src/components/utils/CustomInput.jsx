import React from "react";

const CustomInput = ({
  component: Component = "input",
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  label = "",
  wrapperProps,
  labelProps,
  ...props
}) => {
  return (
    <div
      className={`wrap-input100 validate-input ${wrapperClassName}`}
      data-validate={`Enter ${label}`}
      {...wrapperProps}
    >
      <Component className={`input100 ${className}`} {...props} />
      <span
        {...labelProps}
        className={`focus-input100 ${labelClassName}`}
        data-placeholder={label}
      ></span>
    </div>
  );
};

export default CustomInput;
