export default {
  global: {
    Name: 'Fundamentos, procesos y condiciones para la decisión gerencial',
    Description:
      'El componente formativo aborda los fundamentos de la decisión gerencial, sus características y los tipos de decisiones en las organizaciones. Desarrolla las etapas y los actores del proceso de toma de decisiones, los factores personales y del entorno que influyen en quien decide, el modelo racional clásico, la racionalidad limitada de Herbert Simon, la teoría de juegos y los enfoques actuales basados en datos e inteligencia artificial.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Naturaleza, proceso y condiciones de la decisión gerencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y alcance de la decisión',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de decisiones organizacionales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Etapas y actores de la toma de decisiones',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comunicación asertiva y liderazgo para decidir',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Factores que influyen en quien decide',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos clásicos de decisión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Modelo racional clásico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Racionalidad limitada de Herbert Simon',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Teoría de juegos en las decisiones empresariales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Análisis costo-beneficio y árboles de decisión',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfoques contemporáneos en la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Decisiones bajo incertidumbre y riesgo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Heurísticas y sesgos cognitivos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Decisiones basadas en datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Inteligencia artificial como apoyo gerencial',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Árbol de decisión',
      significado:
        'Representación gráfica de una elección con sus alternativas, resultados posibles, probabilidades y valores, que permite calcular el valor esperado de cada camino.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Forma de expresar opciones, criterios y decisiones con claridad, de manera directa y respetuosa, sin agredir ni someterse.',
    },
    {
      termino: 'Decisión gerencial',
      significado:
        'Elección que realiza quien dirige una organización entre varias alternativas, con efectos sobre los recursos, las personas y los resultados de la empresa.',
    },
    {
      termino: 'Decisión programada',
      significado:
        'Elección repetitiva y estructurada que se resuelve con un procedimiento establecido, a diferencia de la no programada, que exige juicio ante problemas nuevos.',
    },
    {
      termino: 'Heurística',
      significado:
        'Regla de juicio simplificada que permite decidir con rapidez en condiciones de complejidad, a costa de posibles sesgos.',
    },
    {
      termino: 'Incertidumbre',
      significado:
        'Situación en la que no pueden estimarse probabilidades confiables para los resultados de una decisión, a diferencia del riesgo, en el que sí es posible calcularlas.',
    },
    {
      termino: 'Modelo racional',
      significado:
        'Representación del proceso decisional que supone información completa, preferencias estables y elección de la alternativa que maximiza la utilidad.',
    },
    {
      termino: 'Proceso decisional',
      significado:
        'Secuencia de etapas que va de la identificación del problema a la implementación y el seguimiento de la alternativa elegida.',
    },
    {
      termino: 'Sesgo cognitivo',
      significado:
        'Desviación sistemática del juicio que afecta la calidad de las decisiones, como el anclaje, el exceso de confianza o el temor a perder lo invertido.',
    },
    {
      termino: 'Teoría de juegos',
      significado:
        'Rama de la economía y la matemática que analiza decisiones cuyo resultado depende de las elecciones de otros participantes.',
    },
    {
      termino: 'Valor esperado',
      significado:
        'Suma de los resultados posibles de una alternativa, cada uno multiplicado por su probabilidad, que sirve para comparar opciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Gorry, G. A., & Scott Morton, M. S. (1971). A framework for management information systems. Sloan Management Review, 13(1), 55-70.',
      link: '',
    },
    {
      referencia:
        'Hersey, P., & Blanchard, K. H. (1969). Life cycle theory of leadership. Training and Development Journal, 23(5), 26-34.',
      link: '',
    },
    {
      referencia:
        'Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.',
      link: '',
    },
    {
      referencia:
        'Knight, F. H. (1921). Risk, uncertainty and profit. Houghton Mifflin.',
      link: '',
    },
    {
      referencia:
        'Mintzberg, H., Raisinghani, D., & Theoret, A. (1976). The structure of «unstructured» decision processes. Administrative Science Quarterly, 21(2), 246-275.',
      link: '',
    },
    {
      referencia:
        'Simon, H. A. (1957). Models of man: Social and rational. Wiley.',
      link: '',
    },
    {
      referencia:
        'Simon, H. A. (1960). The new science of management decision. Harper & Row.',
      link: '',
    },
    {
      referencia:
        'Tversky, A., & Kahneman, D. (1974). Judgment under uncertainty: Heuristics and biases. Science, 185(4157), 1124-1131.',
      link: '',
    },
    {
      referencia:
        'Von Neumann, J., & Morgenstern, O. (1944). Theory of games and economic behavior. Princeton University Press.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
