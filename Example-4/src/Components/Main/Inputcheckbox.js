import React from "react";

function InputCheckbox({ isChecked, onCheckedChange }) {
  return (
    <div>
      <input type="checkbox" className="toggle-all" checked={isChecked} />
      <label htmlFor="toggle-all" onClick={onCheckedChange}></label>
    </div>
  );
}

export default InputCheckbox;
