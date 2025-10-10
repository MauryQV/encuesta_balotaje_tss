import React, { useState, useEffect } from "react";

import { ChevronRight, ChevronLeft, Send, CheckCircle } from "lucide-react";
import Seccion1Demograficos from "./components/Secciones/Seccion1Demograficos";
import Seccion2IntencionVoto from "./components/Secciones/Seccion2IntencionVoto";
import Seccion3FactoresDecision from "./components/Secciones/Seccion3FactoresDecision";
import Seccion4EvaluacionCandidatos from "./components/Secciones/Seccion4EvaluacionCandidatos";
import Seccion5ParticipacionPolitica from "./components/Secciones/Seccion5ParticipacionPolitica";
import Seccion6PrioridadesFuturo from "./components/Secciones/Seccion6PrioridadesFuturo";
import AvisoInicio from "./components/Mensajes/AvisoInicio";
import RuletaPremios from "./components/Premios/RuletaPremios";

const EncuestaBallotaje = () => {
  const [mostrarAviso, setMostrarAviso] = useState(true);
  const [seccion, setSeccion] = useState(1);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [yaRespondi, setYaRespondi] = useState(false); // ← AGREGADO

  const [datos, setDatos] = useState({
    // Sección 1: Demográficos
    genero: "",
    edad_rango: "",
    departamento: "",
    provincia: "",
    situacion_educativa: "",
    facultad: "",
    carrera_area: "",
    estrato_socioeconomico: "",
    estatus_laboral: "",
    // Sección 2: Intención de voto
    voto_candidato: "",
    voto_seguridad: 3,
    alineamiento_politico: "",
    // Sección 3: Factores de decisión
    educacion_calidad: 3,
    educacion_becas: 3,
    economia_estabilidad: 3,
    economia_empleo: 3,
    economia_deuda: 3,
    derechos_genero: 3,
    modelo_desarrollo: 3,

    // Sección 4: Evaluación candidatos
    candidato_a_experiencia: 3,
    candidato_b_experiencia: 3,
    candidato_a_honestidad: 3,
    candidato_b_honestidad: 3,
    candidato_a_unir: 3,
    candidato_b_unir: 3,
    candidato_a_jovenes: 3,
    candidato_b_jovenes: 3,
    candidato_a_liderazgo: 3,
    candidato_b_liderazgo: 3,
    candidato_a_propuestas: 3,
    candidato_b_propuestas: 3,
    // Sección 5: Participación política y confianza
    participacion_marchas: 3,
    participacion_redes: 3,
    participacion_reuniones: 3,

    confianza_oep: 3,
    confianza_tsj: 3,
    confianza_ffaa_policia: 3,

    // Sección 6: Prioridades futuro
    aspiracion_estabilidad: 3,
    aspiracion_oportunidades: 3,
    aspiracion_comunidad: 3,

    vision_alianzas: 3,
    vision_recursos: 3,
    vision_tecnologia: 3,
  });

  useEffect(() => {
    const yaRespondio = localStorage.getItem("encuesta_respondida");
    if (yaRespondio) {
      setYaRespondi(true);
    }
  }, []);

  const actualizarDato = (campo, valor) => {
    setDatos((prev) => ({ ...prev, [campo]: valor }));
  };

  const validarSeccion = () => {
    if (seccion === 1) {
      return (
        datos.genero &&
        datos.edad_rango &&
        datos.departamento &&
        datos.provincia &&
        datos.situacion_educativa &&
        datos.carrera_area &&
        datos.estrato_socioeconomico &&
        datos.estatus_laboral
      );
    }
    if (seccion === 2)
      return datos.voto_candidato && datos.alineamiento_politico;
    return true;
  };

  const enviarEncuesta = async () => {
    if (!validarSeccion()) return;
    setEnviando(true);

    try {
      const SUPABASE_URL = "https://bsjzshzdpeohknmlisoa.supabase.co";
      const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzanpzaHpkcGVvaGtubWxpc29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1ODYwOTgsImV4cCI6MjA3NTE2MjA5OH0.oOjoYpVlOZ9O420xPLx_LM94FkWnT698ibf8REc5uGs";

      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/respuestas_balotaje`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(datos),
        }
      );

      if (response.ok) {
        // Guardar en localStorage
        localStorage.setItem("encuesta_respondida", "true");
        setEnviado(true);
      } else {
        alert("Error al enviar. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión. Verifica tu internet.");
    } finally {
      setEnviando(false);
    }
  };

  if (yaRespondi) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ya has respondido
          </h2>
          <p className="text-gray-600">
            Ya completaste esta encuesta anteriormente. Solo se permite una
            respuesta por usuario.
          </p>
        </div>
      </div>
    );
  }

  if (enviado) {
    return <RuletaPremios />;
  }

  if (mostrarAviso) {
    return <AvisoInicio onComenzar={() => setMostrarAviso(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Encuesta de Balotaje
            </h1>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    num <= seccion ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">Sección {seccion} de 6</p>
          </div>

          {/* Secciones */}
          {seccion === 1 && (
            <Seccion1Demograficos
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}
          {seccion === 2 && (
            <Seccion2IntencionVoto
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}
          {seccion === 3 && (
            <Seccion3FactoresDecision
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}
          {seccion === 4 && (
            <Seccion4EvaluacionCandidatos
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}
          {seccion === 5 && (
            <Seccion5ParticipacionPolitica
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}
          {seccion === 6 && (
            <Seccion6PrioridadesFuturo
              datos={datos}
              actualizarDato={actualizarDato}
            />
          )}

          {/* Navegación */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => setSeccion((prev) => prev - 1)}
              disabled={seccion === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                seccion === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            {seccion < 6 ? (
              <button
                onClick={() =>
                  validarSeccion() && setSeccion((prev) => prev + 1)
                }
                disabled={!validarSeccion()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  validarSeccion()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={enviarEncuesta}
                disabled={enviando || !validarSeccion()}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  enviando || !validarSeccion()
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {enviando ? "Enviando..." : "Enviar Encuesta"}
                <Send className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncuestaBallotaje;
