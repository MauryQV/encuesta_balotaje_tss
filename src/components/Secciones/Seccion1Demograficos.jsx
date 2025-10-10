import React from "react";
import BotonesOpcion from "../Botones/BotonesOpcion";
import { departamentosYProvincias } from "../../data/datosEncuesta";
import { carrerasPorFacultad } from "../../data/datosEncuesta";

const Seccion1Demograficos = ({ datos, actualizarDato }) => {
  const provincias = datos.departamento
    ? departamentosYProvincias[datos.departamento]
    : [];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Datos Demográficos
      </h2>

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Género*
        </label>
        <BotonesOpcion
          opciones={[
            "Masculino",
            "Femenino",
            "No binario",
            "Prefiero no decir",
          ]}
          valorActual={datos.genero}
          onChange={(val) => actualizarDato("genero", val)}
        />
      </div>

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Rango de edad*
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["18-25", "26-30"].map((rango) => (
            <button
              key={rango}
              type="button"
              onClick={() => actualizarDato("edad_rango", rango)}
              className={`p-3 rounded-lg font-medium transition-all ${
                datos.edad_rango === rango
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {rango}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Departamento*
        </label>
        <select
          value={datos.departamento}
          onChange={(e) => {
            actualizarDato("departamento", e.target.value);
            actualizarDato("provincia", "");
          }}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Seleccione un departamento</option>
          {Object.keys(departamentosYProvincias).map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      {datos.departamento && (
        <div>
          <label className="block text-3x1 font-medium text-gray-700 mb-2">
            Provincia*
          </label>
          <select
            value={datos.provincia}
            onChange={(e) => actualizarDato("provincia", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Situación educativa*
        </label>
        <select
          value={datos.situacion_educativa}
          onChange={(e) =>
            actualizarDato("situacion_educativa", e.target.value)
          }
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Seleccione una opción</option>
          <option value="Estudiante Universitario">
            Estudiante Universitario
          </option>
          <option value="Recién Profesionalizado">
            Recién Profesionalizado
          </option>
        </select>
      </div>

      {datos.situacion_educativa && (
        <div>
          <label className="block text-3x1 font-medium text-gray-700 mb-2">
            {datos.situacion_educativa === "Estudiante Universitario"
              ? "Facultad y Carrera"
              : "Área y carrera"}
          </label>

          {/* Selección de Facultad */}
          <select
            value={datos.facultad}
            onChange={(e) => {
              const nuevaFacultad = e.target.value;
              actualizarDato("facultad", nuevaFacultad);
              actualizarDato("carrera_area", "");
            }}
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Seleccione una facultad</option>
            {Object.keys(carrerasPorFacultad).map((fac) => (
              <option key={fac} value={fac}>
                {fac}
              </option>
            ))}
          </select>

          {/* Selección de Carrera */}
          {datos.facultad && (
            <select
              value={datos.carrera_area || ""}
              onChange={(e) => {
                const carreraSeleccionada = e.target.value;
                actualizarDato("carrera_area", carreraSeleccionada);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Seleccione una carrera*</option>
              {carrerasPorFacultad[datos.facultad].map((carrera) => (
                <option key={carrera} value={carrera}>
                  {carrera}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Estrato socioeconómico*
        </label>
        <div className="space-y-2">
          {[
            { valor: "Bajo", desc: "Luchando para cubrir necesidades básicas" },
            {
              valor: "Medio-Bajo",
              desc: "Cubriendo necesidades, pocos ahorros",
            },
            { valor: "Medio", desc: "Vida cómoda, capacidad de ahorro" },
            {
              valor: "Medio-Alto",
              desc: "Ingresos significativos, estabilidad",
            },
          ].map(({ valor, desc }) => (
            <button
              key={valor}
              type="button"
              onClick={() => actualizarDato("estrato_socioeconomico", valor)}
              className={`w-full text-left p-3 rounded-lg transition-all ${
                datos.estrato_socioeconomico === valor
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <div className="font-medium">{valor}</div>
              <div
                className={`text-sm ${
                  datos.estrato_socioeconomico === valor
                    ? "text-blue-100"
                    : "text-gray-600"
                }`}
              >
                {desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-3x1 font-medium text-gray-700 mb-2">
          Estatus laboral*
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Empleado Institución Pública",
            "Empleado Empresa Privada",
            "Desempleado",
            "Emprendedor",
          ].map((estatus) => (
            <button
              key={estatus}
              type="button"
              onClick={() => actualizarDato("estatus_laboral", estatus)}
              className={`p-3 rounded-lg font-medium transition-all text-sm ${
                datos.estatus_laboral === estatus
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {estatus}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seccion1Demograficos;
