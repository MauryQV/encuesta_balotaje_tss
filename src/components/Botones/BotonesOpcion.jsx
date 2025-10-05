import React from "react";

const BotonesOpcion = ({ opciones, valorActual, onChange }) => (
  <div className="grid grid-cols-3 gap-3">
    {opciones.map((opcion) => {
      // Puede ser un string o un objeto con { label, imagen }
      const label = typeof opcion === "string" ? opcion : opcion.label;
      const imagen =
        typeof opcion === "object" && opcion.imagen ? opcion.imagen : null;

      return (
        <button
          key={label}
          type="button"
          onClick={() => onChange(label)}
          className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg font-medium transition-all border ${
            valorActual === label
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
          }`}
        >
          {imagen && (
            <img
              src={imagen}
              alt={label}
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
          <span className="text-center">{label}</span>
        </button>
      );
    })}
  </div>
);

export default BotonesOpcion;
