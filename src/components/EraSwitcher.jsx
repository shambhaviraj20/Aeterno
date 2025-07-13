// src/components/EraSwitcher.jsx
import React from "react";

const eras = ["80s", "90s", "2000s", "Future"];

function EraSwitcher({ selectedEra, onChange }) {
  return (
    <div className="mb-6">
      <label htmlFor="era" className="block text-lg font-medium text-gray-700 mb-1">
        Choose an Era:
      </label>
      <select
        id="era"
        value={selectedEra}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        {eras.map((era) => (
          <option key={era} value={era}>
            {era}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EraSwitcher;
