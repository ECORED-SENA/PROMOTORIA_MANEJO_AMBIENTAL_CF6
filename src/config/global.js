export default {
  global: {
    componenteFormativo: 'Protocolos y muestras de agua',
    descripcionCurso:
      'El componente se centra en la formulación del plan de muestreo, los conocimientos teóricos y habilidades prácticas necesarias para la toma de muestras y preparación en el desarrollo de los procedimientos. Esto llevará a asociar técnicas de dosificación, hojas de seguridad, fichas técnicas y técnicas de almacenamiento y la cadena de custodia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Área de recolección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de adecuación del área',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de aseo e higiene de la toma de muestra',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de fuentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Parámetros técnicos de la toma de muestra de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Métodos de la toma de muestras de agua',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estándares de calidad para la toma de muestras de agua',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Productos químicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Hojas de seguridad de productos químicos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Fichas técnicas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas de almacenamiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '5. Cadena de custodia ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Identificación de la muestra y embalaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: '7.Transporte de la muestra ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Registro de campo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Manuales de procedimiento',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Formatos',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Georeferenciación del sitio de muestreo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Nacional de Salud. (2011). Manual de instrucciones para la toma, preservación y transporte de muestra de agua de consumo humano para análisis de laboratorio. ',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      referencia:
        'Villada, A. (2014). Documentación de los manuales para la toma de muestra de calidad del agua y vertimientos, realizados por la Corporación Autónoma de Risaralda – (CARDER). ',
      link:
        'http://repositorio.utp.edu.co/dspace/bitstream/handle/11059/4558/628161V712.pdf;sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de custodia ',
      significado:
        'Proceso por medio del cual se mantiene una muestra bajo posesión física o control durante su ciclo de vida completo, es decir, desde que se toma hasta que se desecha.',
    },
    {
      termino: 'Caudal',
      significado:
        'Cantidad de agua que pasa por una superficie en un determinado tiempo',
    },
    {
      termino: 'Muestra',
      significado:
        'Es una porción de una matriz ambiental o de fuente que se selecciona de acuerdo con un procedimiento prescrito según el caso, para determinar las características de la matriz. ',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad del Norte (s.f.). Criterios de aceptación de muestras de agua para análisis fisicoquímico.',
      tipo: 'Documento web',
      descarga: '/downloads/Reglamento_de_servicio.pdf',
    },
    {
      texto:
        'Subdirección Red Nacional de Laboratorios. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio. ',
      tipo: 'Documento web',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf',
    },
    {
      texto:
        'Noticias de seguridad informática. (s.f.). Seguridad de equipos satelitales de navegación y comunicación. ',
      tipo: 'Documento web',
      link:
        'https://noticiasseguridad.com/importantes/seguridad-de-equipos-satelitales-de-navegacion-y-comunicacion/',
    },
    {
      texto: 'Invima. Resolución 811 de 2008.',
      tipo: 'Documento web',
      link:
        'https://normograma.invima.gov.co/docs/resolucion_minproteccion_0811_2008.htm',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Tatiana Palacios Martínez',
        cargo: 'Experta Temática',
        centro:
          'Centro de Recursos Naturales, Industria y Biodiversidad - Regional Chocó',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
