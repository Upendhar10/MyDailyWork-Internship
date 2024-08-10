import React from "react";

function InputForm({
  htmlFor,
  labelText,
  type,
  id,
  value,
  handleChange,
  options = [],
}) {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor={htmlFor}
          className="form-label text-gray-700 text-sm font-semibold mb-2"
        >
          {labelText}
        </label>
        {type === "select" ? (
          <select
            id={id}
            value={value}
            onChange={handleChange}
            className="form-control w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            id={id}
            value={value}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

export default InputForm;
