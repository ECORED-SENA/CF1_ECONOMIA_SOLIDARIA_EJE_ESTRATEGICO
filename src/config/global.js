export default {
  global: {
    componenteFormativo: 'Organizaciones de economía solidaria en Colombia.',
    descripcionCurso:
      'El presente componente aborda a partir de la ley 454 de 1998, el concepto de economía solidaria, su clasificación, valores, principios, fines y características que regulan esta forma de asociatividad empresarial sin ánimo de lucro, cuyo aspecto diferenciador es que prevalecen los intereses comunes de los asociados y de la comunidad por encima del interés particular.',
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
        titulo:
          'Organizaciones de economía solidaria en Colombia y sectores económicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sector solidario y su clasificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadenas productivas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Principios y fines de la economía solidaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        'Bair, J. (2009). <em>Global commodity chains. Genealogy and review. In Bair, Jennifer, ed. Frontiers of commodity chains research.</em> Palo Alto, CA: Stanford University Press.',
    },
    {
      referencia:
        'Coraggio, J., Arancibia, M. & Deux, M. (2010). <em>Guía para el mapeo y relevamiento de la economía popular solidaria en latinoamérica y caribe</em> (Primera Edición, Vol. 1).',
      link:
        'https://base.socioeco.org/docs/gu_a_para_mapeo_y_relevamiento_eps_en_lac.pdf',
    },
    {
      referencia:
        'Dávila Ladrón de Guevara, R. (s.f.). <em>Características de la economía solidaria en Colombia. Colombia:</em> CIRIEC España.',
    },
    {
      referencia: 'Definición.de. (s.f.). <em>Asociación.</em>',
      link: 'https://definicion.de/asociacion/',
    },
    {
      referencia:
        'DNP. (2017). <em>Cadenas productivas industriales, estructura, comercio internacional y prospectiva 2002-2017.</em>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/Cadenas-Productivas-Industriales.pdf',
    },
    {
      referencia: 'Economipedia. (2021). <em>Actividad económica.</em>',
      link: 'https://economipedia.com/definiciones/actividad-economica.html',
    },
    {
      referencia:
        'Ley 79 de 1988. Por la cual se actualiza la Legislación Cooperativa. Diciembre 23 de 1988. D.O. No. 38.648',
    },
    {
      referencia:
        'Ley 454 de 1998. Agosto 6 de 1998. Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Administrativo Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. D.O. No. 43.357',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (s.f.). <em>Objetivos de Desarrollo Sostenible.</em>',
      link:
        'https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/',
    },
    {
      referencia: 'Real Academia Española. (2021). <em>Asociado.</em>',
      link: 'https://dle.rae.es/asociado',
    },
    {
      referencia: 'Significados. (2021). <em>Valores humanos.</em>',
      link: 'https://www.significados.com/valores-humanos/',
    },
  ],
  glosario: [
    {
      termino: 'Actividad económica',
      significado:
        'Es toda aquella forma mediante la que se produce, se intermedia y/o se vende un bien o servicio destinado a satisfacer una necesidad o deseo.',
    },
    {
      termino: 'Asociado',
      significado:
        'Dicho de una persona: Que acompaña a otra en alguna comisión o encargo.',
    },
    {
      termino: 'Asociación',
      significado:
        'Asociación es la acción y efecto de asociar o asociarse (unir una persona a otra para que colabore en algún trabajo, juntar una cosa con otra para un mismo fin, establecer una relación entre cosas o personas.',
    },
    {
      termino: 'Economía colidaria',
      significado:
        'Sistema socioeconómico, cultural y ambiental conformado por el conjunto de fuerzas sociales organizadas en formas asociativas identificadas por prácticas autogestionarias solidarias, democráticas y humanistas, sin ánimo de lucro para el desarrollo integral del ser humano como sujeto, actor y fin de la economía.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible (ODS)',
      significado:
        'Constituyen un llamamiento universal a la acción para poner fin a la pobreza, proteger el planeta y mejorar las vidas y las perspectivas de las personas en todo el mundo.',
    },
    {
      termino: 'Principios',
      significado:
        'Es una base de ideales, fundamentos, reglas y/o políticas de la cual nacen las ideologías, teorías, doctrinas, religiones y ciencias.',
    },
    {
      termino: 'Valores humanos',
      significado:
        'Conjunto de virtudes que posee una persona u organización, que determinan el comportamiento e interacción con otros individuos y el espacio.',
    },
  ],
  complementario: [
    {
      texto:
        'Ley 454 de 1998 [Congreso de Colombia]. Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. Agosto 4 de 1998.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=3433',
    },
    {
      texto:
        'DNP. (2017). <em>Cadenas productivas industriales, estructura, comercio internacional y prospectiva 2002-2017.</em>',
      tipo: 'Libro',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Prensa/Cadenas-Productivas-Industriales.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: ['https://www.google.com/', 'https://www.google.com/'],
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
