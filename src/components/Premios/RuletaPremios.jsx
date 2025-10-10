import React, { useState } from "react";
import { Zap } from "lucide-react";

const RuletaPremios = () => {
  const [girando, setGirando] = useState(false);
  const [premioSeleccionado, setPremioSeleccionado] = useState(null);
  const [mostrarPremio, setMostrarPremio] = useState(false);
  const [yaGiro, setYaGiro] = useState(false);

  const premios = [
    { nombre: "Nada", color: "from-gray-400 to-gray-300", probabilidad: 0.3 },
    { nombre: "Nada", color: "from-gray-400 to-gray-300", probabilidad: 0.3 },
    {
      nombre: "5 Bs",
      color: "from-green-500 to-gold-400",
      probabilidad: 0.025,
    },
    { nombre: "Nada", color: "from-gray-400 to-gray-300", probabilidad: 0.3 },
    { nombre: "Nada", color: "from-gray-400 to-gray-300", probabilidad: 0.05 },
    {
      nombre: "5 Bs",
      color: "from-green-500 to-yellow-400",
      probabilidad: 0.025,
    },
  ];

  const seleccionarPremioAleatorio = () => {
    const random = Math.random();
    let acumulado = 0;
    for (let i = 0; i < premios.length; i++) {
      acumulado += premios[i].probabilidad;
      if (random <= acumulado) return i;
    }
    return premios.length - 1;
  };

  const girarRuleta = () => {
    if (girando || yaGiro) return;

    setGirando(true);
    setMostrarPremio(false);

    const indicePremio = seleccionarPremioAleatorio();

    // Cada segmento tiene un ángulo igual
    const anguloPorSegmento = 360 / premios.length;

    // Calcular hacia dónde debe apuntar la flecha (arriba, 0°)
    const anguloPremio =
      indicePremio * anguloPorSegmento + anguloPorSegmento / 2;

    // Hacemos que la ruleta termine con ese ángulo en la parte superior (0°)
    const rotacionFinal =
      360 * (Math.floor(Math.random() * 3) + 3) - anguloPremio;

    const ruleta = document.getElementById("ruleta");
    ruleta.style.transition = "transform 3s ease-out";
    ruleta.style.transform = `rotate(${rotacionFinal}deg)`;

    setTimeout(() => {
      setPremioSeleccionado(premios[indicePremio]);
      setMostrarPremio(true);
      setGirando(false);
      setYaGiro(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-yellow-500 to-orange-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-800">
          ¡Gira la Ruleta!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Ganaste el derecho de participar en nuestro sorteo
        </p>

        {/* CONTENEDOR RULETA */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            {/* FLECHA INDICADORA */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
              <div
                className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] 
                border-l-transparent border-r-transparent border-t-red-600 drop-shadow-lg"
              ></div>
            </div>

            {/* RULETA */}
            <svg
              id="ruleta"
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-lg"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))" }}
            >
              {premios.map((premio, idx) => {
                const angulo = (360 / premios.length) * idx;
                const startAngle = (angulo * Math.PI) / 180;
                const endAngle =
                  ((angulo + 360 / premios.length) * Math.PI) / 180;

                const x1 = 100 + 100 * Math.cos(startAngle);
                const y1 = 100 + 100 * Math.sin(startAngle);
                const x2 = 100 + 100 * Math.cos(endAngle);
                const y2 = 100 + 100 * Math.sin(endAngle);

                const largeArc = 360 / premios.length > 180 ? 1 : 0;

                const textAngle = angulo + 360 / premios.length / 2;
                const textRad = (textAngle * Math.PI) / 180;
                const textX = 100 + 60 * Math.cos(textRad);
                const textY = 100 + 60 * Math.sin(textRad);

                const [colorStart, colorEnd] = premio.color.split(" ");
                const colorStartMap = {
                  "from-gray-400": "#9ca3af",
                  "from-green-500": "#22c55e",
                };
                const colorEndMap = {
                  "to-gray-300": "#d1d5db",
                  "to-gold-400": "#fcd34d",
                  "to-yellow-400": "#facc15",
                };

                return (
                  <g key={idx}>
                    <path
                      d={`M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={`url(#grad${idx})`}
                      stroke="white"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id={`grad${idx}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            colorStartMap[colorStart] ||
                            colorStartMap["from-gray-400"]
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            colorEndMap[colorEnd] || colorEndMap["to-gray-300"]
                          }
                        />
                      </linearGradient>
                    </defs>
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={premio.nombre === "Nada" ? "white" : "#1f2937"}
                      fontSize="10"
                      fontWeight="bold"
                      style={{
                        transform: `rotate(${textAngle}deg)`,
                        transformOrigin: `${textX}px ${textY}px`,
                      }}
                    >
                      {premio.nombre}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* CENTRO */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-600">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTÓN GIRAR */}
        <button
          onClick={girarRuleta}
          disabled={girando || yaGiro}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            girando || yaGiro
              ? "bg-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-yellow-600 text-white hover:shadow-lg hover:scale-105 active:scale-95"
          }`}
        >
          {girando
            ? "¡Girando!"
            : yaGiro
            ? "Ya giraste tu ruleta"
            : "GIRAR RULETA"}
        </button>

        {/* MODAL DE PREMIO */}
        {mostrarPremio && premioSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-sm w-full animate-bounce">
              <div className="text-6xl mb-4">
                {premioSeleccionado.nombre === "Nada" ? ",:v" : " :v/ "}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {premioSeleccionado.nombre === "Nada"
                  ? "Casi..."
                  : "¡GANASTE! Comunicarse con el creador de la encuesta para reclamar tu premio."}
              </h2>
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400 mb-6">
                {premioSeleccionado.nombre}
              </p>
              <button
                onClick={() => setMostrarPremio(false)}
                className="bg-gradient-to-r from-blue-600 to-yellow-300 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RuletaPremios;
