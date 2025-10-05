import React from "react";
import { Info } from "lucide-react";
import logo from "../../../public/logo/umss.png";

const AvisoInicio = ({ onComenzar }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
        <Info className="mx-auto mb-4 text-blue-500" size={48} />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Encuesta de Balotaje
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Este formulario tiene{" "}
          <strong className="font-bold text-black-600 ">
            fines exclusivamente académicos para la materia de Taller de
            simulacion de sistemas
          </strong>
          . No se recopilará información personal ni identificable de los
          participantes.
          <br />
          <br />
          Agradecemos tu colaboración y honestidad al responder.
          <br />
          <span className="italic text-gray-500">
            — Atte: Vicente y asociados :v
          </span>
        </p>
        <button
          onClick={onComenzar}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all"
        >
          Comenzar Encuesta
        </button>
      </div>
    </div>
  );
};

export default AvisoInicio;
