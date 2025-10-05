import React from "react";
import EscalaLikert from "../Escalas/EscalaLikert";
import { factoresSeccion3 } from "../../data/datosEncuesta";

const Seccion3FactoresDecision = ({ datos, actualizarDato }) => (
  <div className="space-y-8">
    <h2 className="text-xl font-bold text-gray-800 mb-4">
      Factores de Decisión
    </h2>
    <p className="text-sm font-bold text-gray-600 mb-6">
      Califique la importancia de cada factor (1 = Nada importante, 5 = Muy
      importante)*
    </p>

    {factoresSeccion3.map((categoria, idx) => (
      <div key={idx} className="border-b pb-6 last:border-b-0">
        <h3 className="font-semibold text-gray-800 mb-4">{categoria.titulo}</h3>
        <div className="space-y-4">
          {categoria.items.map((item) => (
            <div key={item.key}>
              <label className="text-sm text-gray-700 mb-2 block">
                {item.label}
              </label>
              <EscalaLikert
                valor={datos[item.key]}
                onChange={(val) => actualizarDato(item.key, val)}
                etiquetas={item.etiquetas || ["Nada", "Muy"]}
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Seccion3FactoresDecision;
