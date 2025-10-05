import React from "react";

const EscalaLikert = ({ valor, onChange, etiquetas = ["Nada", "Muy"] }) => (
  <div className="flex items-center gap-2">
    <span className="text-sm text-gray-600 w-16">{etiquetas[0]}</span>
    <div className="flex gap-2 flex-1 justify-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => onChange(num)}
          className={`w-12 h-12 rounded-lg font-semibold transition-all ${
            valor === num
              ? "bg-blue-600 text-white scale-110"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
    <span className="text-sm text-gray-600 w-16 text-right">
      {etiquetas[1]}
    </span>
  </div>
);

export default EscalaLikert;
