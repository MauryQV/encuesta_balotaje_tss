import React from "react";

const EscalaLikert = ({ valor, onChange, etiquetas = ["Nada", "Muy"] }) => (
  <div className="flex items-center gap-1 sm:gap-2">
    <span className="text-[9px] sm:text-sm font-bold text-gray-600 w-[45px] sm:w-16 leading-[1.1]">
      {etiquetas[0]}
    </span>
    <div className="flex gap-1 sm:gap-2 flex-1 justify-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          type="button"
          onClick={() => onChange(num)}
          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg font-semibold transition-all text-xs sm:text-base ${
            valor === num
              ? "bg-blue-600 text-white scale-110"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
    <span className="text-[9px] sm:text-sm font-bold text-gray-600 w-[45px] sm:w-16 text-right leading-[1.1]">
      {etiquetas[1]}
    </span>
  </div>
);

export default EscalaLikert;
