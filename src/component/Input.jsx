import React from "react";

const Input = (props) => {
  const {
    type,
    placeholder,
    onChange,
    name,
    value,
    className,
    label,
    ...rest
  } = props;
  return (
    <div className={`w-100 mb-5 ${className}`}>
      <label className="text-xs font-semibold px-1">{label}</label>
      <div className="flex">
        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
        </div>
        <input
          type={type}
          name={name}
          {...rest}
          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
          placeholder="Enter your name"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
