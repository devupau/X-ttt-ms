import React from "react";

const SizeOption = ({ selectedVal, updater }) => {
  const onUpdate = (e) => {
    updater("size", e.target.value);
  };

  return (
    <div className="ttt-comp-opt ttt-comp-opt__size">
      <label>Grid size</label>
      <select onChange={onUpdate} defaultValue={selectedVal}>
        <option value="3">3x3</option>
        <option value="4">4x4</option>
      </select>
    </div>
  );
};

export default SizeOption;
