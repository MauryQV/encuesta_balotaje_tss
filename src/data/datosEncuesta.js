
export const carrerasPorFacultad = {
  'FACULTAD DE CIENCAS Y TECNOLOGIA': [
    'Ingeniería de sistemas',
    'Ingeniería civil',
    'Ingeniería industrial',
    'Ingeniería comercial',
    'Ingeniería ambiental',
    'Ingeniería informática',
    'Ingeniería electrónica',
    'Ingeniería electromecánica',
    'Ingeniería eléctrica',
    'Ingeniería mecánica',
    'Ingeniería matemática',
    'Ingeniería en biotecnología'
  ],
  'FACULTAD DE MEDICINA': [
    'Medicina',
    'Enfermería',
    'Veterinaria'
  ],
  'FACULTAD DE DERECHO Y CIENCIAS POLITICAS': [
    'Derecho'
  ],
  'FACULTAD DE CIENCIAS ECONOMICAS': [
    'Administración de empresas',
    'Contaduría pública',
    'Economía',
    'Ingeniería comercial'
  ],
  'FACULTAD DE ARQUITECTURA': [
    'Arquitectura',
    'Diseño gráfico'
  ],
  'FACULTAD DE HUMANIDADES': [
    'Psicología',
    'Comunicación social',
    'Educación',
    'Antropología',
    'Sociología'
  ],
  'FACULTAD DE AGRONOMIA': [
    'Agronomía'
  ],
  'FACULTAD DE TURISMO': [
    'Turismo'
  ]
};

export const departamentosYProvincias = {
  'La Paz': ['Murillo', 'Omasuyos', 'Pacajes', 'Camacho', 'Muñecas', 'Larecaja', 'Franz Tamayo', 'Ingavi', 'Loayza', 'Inquisivi', 'Sud Yungas', 'Los Andes', 'Aroma', 'Nor Yungas', 'Abel Iturralde', 'Bautista Saavedra', 'Manco Kapac', 'Gualberto Villarroel', 'José Manuel Pando', 'General José Manuel Pando'],
  'Cochabamba': ['Cercado', 'Chapare', 'Ayopaya', 'Arani', 'Arque', 'Capinota', 'Campero', 'Bolívar', 'Carrasco', 'Germán Jordán', 'Esteban Arce', 'Mizque', 'Punata', 'Quillacollo', 'Tapacarí', 'Tiraque'],
  'Santa Cruz': ['Andrés Ibáñez', 'Warnes', 'Velasco', 'Ichilo', 'Chiquitos', 'Sara', 'Cordillera', 'Vallegrande', 'Florida', 'Obispo Santistevan', 'Ñuflo de Chávez', 'Ángel Sandoval', 'Caballero', 'Germán Busch', 'Guarayos'],
  'Oruro': ['Cercado', 'Carangas', 'Sajama', 'Litoral', 'Poopó', 'Pantaleón Dalence', 'Ladislao Cabrera', 'Saucarí', 'San Pedro de Totora', 'Sebastián Pagador', 'Mejillones', 'Sud Carangas', 'Cercado', 'Eduardo Avaroa', 'Tomás Barrón'],
  'Potosí': ['Tomás Frías', 'Rafael Bustillo', 'Cornelio Saavedra', 'Chayanta', 'Charcas', 'Nor Chichas', 'Alonso de Ibáñez', 'Sur Chichas', 'Nor Lípez', 'Sur Lípez', 'José María Linares', 'Antonio Quijarro', 'Bernardino Bilbao', 'Daniel Campos', 'Modesto Omiste', 'Enrique Baldivieso'],
  'Chuquisaca': ['Oropeza', 'Azurduy', 'Zudáñez', 'Tomina', 'Hernando Siles', 'Yamparáez', 'Nor Cinti', 'Sud Cinti', 'Belisario Boeto', 'Luis Calvo'],
  'Tarija': ['Cercado', 'Aniceto Arce', 'Gran Chaco', 'José María Avilés', 'Eustaquio Méndez', 'Burnet O\'Connor'],
  'Beni': ['Cercado', 'Vaca Díez', 'José Ballivián', 'Yacuma', 'Moxos', 'Marbán', 'Mamoré', 'Iténez'],
  'Pando': ['Nicolás Suárez', 'Manuripi', 'Madre de Dios', 'Abuná', 'Federico Román']
};

export const factoresSeccion3 = [
  {
    titulo: 'Educación',
    items: [
      { key: 'educacion_calidad', label: 'Calidad universitaria' },
      { key: 'educacion_becas', label: 'Acceso a becas' }
    ]
  },
  {
    titulo: 'Economía',
    items: [
      { key: 'economia_estabilidad', label: 'Estabilidad económica' },
      { key: 'economia_empleo', label: 'Generación de empleo' },
      { key: 'economia_deuda', label: 'Manejo de la deuda' }
    ]
  },
  {
    titulo: 'Derechos Sociales',
    items: [
      { key: 'derechos_genero', label: 'Temas de género' }
    ]
  },
  {
    titulo: 'Modelo de Desarrollo',
    items: [
      { key: 'modelo_desarrollo', label: 'Estatismo vs Mercado', etiquetas: ['Estatismo', 'Mercado'] }
    ]
  }
];

export const criteriosSeccion4 = [
  { key: 'experiencia', label: 'Experiencia en gestión' },
  { key: 'honestidad', label: 'Honestidad/Transparencia' },
  { key: 'unir', label: 'Capacidad de unir a la población' },
  { key: 'jovenes', label: 'Conexión con los jóvenes' },
  { key: 'liderazgo', label: 'Liderazgo fuerte/Decisivo' },
  { key: 'propuestas', label: 'Propuestas claras y realistas' }
];

export const participacionSeccion5 = [
  {
    titulo: 'Nivel de Participación Cívica',
    descripcion: '¿Con qué frecuencia participa usted en actividades relacionadas con las elecciones o el debate político nacional?',
    etiquetas: ['Nunca', 'Muy Frecuentemente'],
    items: [
      { key: 'participacion_marchas', label: 'Participación en marchas, concentraciones o cabildos sobre temas políticos o electorales' },
      { key: 'participacion_redes', label: 'Participación en debates sobre los candidatos o sus propuestas (por ejemplo, Tuto Quiroga o Rodrigo Paz) en redes sociales' },
      { key: 'participacion_reuniones', label: 'Asistencia a reuniones o foros organizados por movimientos ciudadanos o agrupaciones políticas' }
    ]
  },
  {
    titulo: 'Confianza en Instituciones',
    descripcion: '¿Qué nivel de confianza tiene en las siguientes instituciones para garantizar elecciones transparentes y una democracia estable en Bolivia?',
    etiquetas: ['Ninguna confianza', 'Mucha confianza'],
    items: [
      { key: 'confianza_oep', label: 'Órgano Electoral Plurinacional (OEP)' },
      { key: 'confianza_tsj', label: 'Tribunal Supremo de Justicia' },
      { key: 'confianza_ffaa_policia', label: 'Fuerzas Armadas y Policía Nacional durante el proceso electoral' }
    ]
  }
];

export const prioridadesSeccion6 = [
  {
    titulo: 'Aspiraciones Personales a Largo Plazo',
    descripcion: 'Pensando en el futuro del país y en su vida personal, ¿qué tan importantes son para usted las siguientes metas a 5-10 años?',
    etiquetas: ['Nada importante', 'Muy importante'],
    items: [
      { key: 'aspiracion_estabilidad', label: 'Lograr estabilidad económica y laboral bajo un gobierno eficiente y transparente' },
      { key: 'aspiracion_oportunidades', label: 'Tener oportunidades para progresar sin emigrar del país' },
      { key: 'aspiracion_comunidad', label: 'Contribuir al desarrollo de su comunidad a través de iniciativas ciudadanas o proyectos locales' }
    ]
  },
  {
    titulo: 'Visión de Bolivia en el Mundo',
    descripcion: '¿Qué tan de acuerdo está con las siguientes afirmaciones sobre la dirección que debería tomar Bolivia bajo un nuevo gobierno?',
    etiquetas: ['Totalmente en desacuerdo', 'Totalmente de acuerdo'],
    items: [
      { key: 'vision_alianzas', label: 'Bolivia debería priorizar alianzas internacionales basadas en valores democráticos y económicos del candidato electo' },
      { key: 'vision_recursos', label: 'Bolivia debería promover el desarrollo aprovechando sus recursos naturales de forma sostenible y transparente' },
      { key: 'vision_tecnologia', label: 'El próximo gobierno debería impulsar el desarrollo tecnológico y la innovación como política de Estado' }
    ]
  }
];