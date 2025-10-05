
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
    descripcion: '¿Con qué frecuencia participa usted en actividades cívicas o políticas?',
    etiquetas: ['Nunca', 'Muy Frecuentemente'],
    items: [
      { key: 'participacion_marchas', label: 'Participación en marchas o protestas' },
      { key: 'participacion_redes', label: 'Participación en debates políticos en redes sociales' },
      { key: 'participacion_voluntariado', label: 'Voluntariado en organizaciones cívicas o comunitarias' },
      { key: 'participacion_reuniones', label: 'Asistencia a reuniones de organizaciones estudiantiles o profesionales' }
    ]
  },
  {
    titulo: 'Confianza en Instituciones',
    descripcion: '¿Qué nivel de confianza tiene en las siguientes instituciones?',
    etiquetas: ['Ninguna confianza', 'Mucha confianza'],
    items: [
      { key: 'confianza_tse', label: 'Tribunal Supremo Electoral' },
      { key: 'confianza_judicial', label: 'Órgano Judicial' },
      { key: 'confianza_ffaa', label: 'Fuerzas Armadas' },
      { key: 'confianza_policia', label: 'Policía Nacional' },
      { key: 'confianza_medios', label: 'Medios de comunicación tradicionales' },
      { key: 'confianza_ong', label: 'Organizaciones internacionales presentes en Bolivia' }
    ]
  }
];

export const prioridadesSeccion6 = [
  {
    titulo: 'Aspiraciones Personales a Largo Plazo',
    descripcion: '¿Qué tan importantes son para usted las siguientes metas a 5-10 años?',
    etiquetas: ['Nada importante', 'Muy importante'],
    items: [
      { key: 'aspiracion_estabilidad', label: 'Estabilidad económica y laboral' },
      { key: 'aspiracion_familia', label: 'Formar una familia' },
      { key: 'aspiracion_comunidad', label: 'Contribuir al desarrollo de su comunidad' },
      { key: 'aspiracion_emprender', label: 'Emprender un negocio propio' },
      { key: 'aspiracion_extranjero', label: 'Vivir o trabajar en el extranjero temporal o permanentemente' }
    ]
  },
  {
    titulo: 'Visión de Bolivia en el Mundo',
    descripcion: '¿Qué tan de acuerdo está con las siguientes afirmaciones sobre el rol de Bolivia?',
    etiquetas: ['Totalmente en desacuerdo', 'Totalmente de acuerdo'],
    items: [
      { key: 'vision_alianzas', label: 'Bolivia debería fortalecer sus alianzas con países de la región' },
      { key: 'vision_recursos', label: 'Bolivia debería enfocarse en la explotación de recursos naturales para su desarrollo' },
      { key: 'vision_ambiente', label: 'Bolivia debería liderar en la protección del medio ambiente a nivel global' },
      { key: 'vision_integracion', label: 'La integración económica con países vecinos es crucial para el crecimiento boliviano' },
      { key: 'vision_tecnologia', label: 'El desarrollo tecnológico y la innovación deben ser la principal prioridad nacional' }
    ]
  }
];