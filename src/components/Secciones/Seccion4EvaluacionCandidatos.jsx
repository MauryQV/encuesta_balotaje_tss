import React from "react";
import EscalaLikert from "../Escalas/EscalaLikert";
import { criteriosSeccion4 } from "../../data/datosEncuesta";

const Seccion4EvaluacionCandidatos = ({ datos, actualizarDato }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">
      Evaluación de Candidatos
    </h2>
    <p className="text-sm text-gray-600 mb-6">
      Califique a cada candidato en los siguientes aspectos (1 = Muy malo, 5 =
      Excelente)
    </p>

    {criteriosSeccion4.map(({ key, label }) => (
      <div key={key} className="border-b pb-6 last:border-b-0">
        <h3 className="font-medium text-gray-800 mb-4">{label}</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-blue-700 mb-2 block font-medium">
              Rodrigo Paz
            </label>
            <EscalaLikert
              valor={datos[`candidato_a_${key}`]}
              onChange={(val) => actualizarDato(`candidato_a_${key}`, val)}
              etiquetas={["Muy malo", "Excelente"]}
            />
          </div>
          <div>
            <label className="text-sm text-green-700 mb-2 block font-medium">
              Jorge Tuto Quiroga
            </label>
            <EscalaLikert
              valor={datos[`candidato_b_${key}`]}
              onChange={(val) => actualizarDato(`candidato_b_${key}`, val)}
              etiquetas={["Muy malo", "Excelente"]}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Seccion4EvaluacionCandidatos;
