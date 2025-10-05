import React from "react";
import EscalaLikert from "../Escalas/EscalaLikert";
import { prioridadesSeccion6 } from "../../data/datosEncuesta";

const Seccion6PrioridadesFuturo = ({ datos, actualizarDato }) => (
  <div className="space-y-8">
    <h2 className="text-xl font-bold text-red-600 italic mb-4">
      Prioridades para el Futuro y Percepción Global
    </h2>

    {prioridadesSeccion6.map((categoria, idx) => (
      <div key={idx} className="border-b pb-6 last:border-b-0">
        <h3 className="font-semibold text-red-600 italic mb-2">
          {categoria.titulo}
        </h3>
        <p className="font-semibold text-sm text-red-600 mb-4">
          {categoria.descripcion}
        </p>
        <div className="space-y-4">
          {categoria.items.map((item) => (
            <div key={item.key}>
              <label className="text-sm text-gray-700 mb-2 block">
                {item.label}
              </label>
              <EscalaLikert
                valor={datos[item.key]}
                onChange={(val) => actualizarDato(item.key, val)}
                etiquetas={categoria.etiquetas}
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Seccion6PrioridadesFuturo;
