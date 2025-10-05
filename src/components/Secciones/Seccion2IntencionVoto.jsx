import React from "react";
import BotonesOpcion from "../Botones/BotonesOpcion";
import EscalaLikert from "../Escalas/EscalaLikert";

const Seccion2IntencionVoto = ({ datos, actualizarDato }) => {
  const opcionesVoto = [
    {
      label: "Jorge Tuto Quiroga",
      imagen: "/imagenes/tuto.jpg",
    },
    {
      label: "Rodrigo Paz",
      imagen: "/imagenes/rodrigo.jpg",
    },
    {
      label: "Indeciso",
      imagen: "/imagenes/indeciso.jpg",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Intención de Voto
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Por quién votaría?
        </label>
        <BotonesOpcion
          opciones={opcionesVoto}
          valorActual={datos.voto_candidato}
          onChange={(val) => actualizarDato("voto_candidato", val)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          ¿Qué tan seguro está de su decisión?
        </label>
        <EscalaLikert
          valor={datos.voto_seguridad}
          onChange={(val) => actualizarDato("voto_seguridad", val)}
          etiquetas={["Nada seguro", "Muy seguro"]}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Alineamiento político
        </label>
        <select
          value={datos.alineamiento_politico}
          onChange={(e) =>
            actualizarDato("alineamiento_politico", e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Seleccione una opción</option>
          <option value="Izquierda">Izquierda</option>
          <option value="Centro-izquierda">Centro-izquierda</option>
          <option value="Centro">Centro</option>
          <option value="Centro-derecha">Centro-derecha</option>
          <option value="Derecha">Derecha</option>
          <option value="Independiente">Ninguno/Independiente</option>
        </select>
      </div>
    </div>
  );
};

export default Seccion2IntencionVoto;
