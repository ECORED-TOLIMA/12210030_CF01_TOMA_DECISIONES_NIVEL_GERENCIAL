<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Enfoques contemporáneos en la toma de decisiones

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El mundo gerencial del siglo XXI se caracteriza por un nivel de complejidad, velocidad e incertidumbre sin precedentes. Los modelos clásicos de toma de decisiones, si bien conservan su valor conceptual, resultan insuficientes para dar cuenta de los desafíos que enfrentan los directivos contemporáneos. En este contexto han surgido enfoques complementarios que incorporan herramientas tecnológicas avanzadas, hallazgos de la psicología cognitiva y nuevas perspectivas sobre la gestión del conocimiento organizacional.

    p.mb-4 Estos enfoques importan porque el gerente actual decide con más datos que nunca y, al mismo tiempo, con más incertidumbre sobre lo que esos datos significan. Disponer de información abundante no elimina los sesgos ni la ambigüedad del futuro; solo cambia la forma en que se manifiestan.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img2.svg" alt="")
      .col-lg-9
        .tarjeta.tema3-destacado-secundario.p-4.mb-4
          .row.align-items-center.h-100
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img3.svg" alt="")
            .col
              p.mb-0 En Colombia, la adopción de facturación electrónica, pasarelas de pago y plataformas de gestión en la nube ha puesto al alcance de empresas medianas y pequeñas volúmenes de información que antes solo manejaban las grandes. Ese acceso cambia la pregunta de fondo. Ya no se trata de conseguir datos, sino de saber decidir con ellos en un entorno que no deja de moverse, y es ahí donde los enfoques actuales aportan lo que los modelos clásicos no alcanzan a explicar.
        p.mb-4 Los enfoques contemporáneos no forman una teoría única. Comparten, sin embargo, cuatro rasgos que los distinguen de los modelos clásicos y que explican por qué se necesitan hoy. Se describen a continuación con la situación empresarial que los hace evidentes:

    .tarjeta--container.row.mb-4
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-1.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img4.svg" alt="")
        h5.text-center Aceptación de la incertidumbre
        p.mb-0.text-center Se parte de que el futuro no puede calcularse con probabilidades confiables y de que la planeación debe prepararse para varios futuros. Se hace evidente cuando: un cambio normativo o una variación de la tasa de cambio altera en semanas un plan anual.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-2.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img5.svg" alt="")
        h5.text-center Atención al juicio humano
        p.mb-0.text-center Se reconoce que la mente toma atajos y comete errores sistemáticos, incluso con buena información. Se hace evidente cuando: un comité experimentado aprueba una inversión que los datos no respaldaban.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-3.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img6.svg" alt="")
        h5.text-center Apoyo en la evidencia
        p.mb-0.text-center Se prefiere sustentar las decisiones en datos verificables antes que en la sola intuición o experiencia. Se hace evidente cuando: dos áreas discuten una tendencia de ventas y ninguna tiene la cifra a la mano.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-4.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img7.svg" alt="")
        h5.text-center Uso de tecnología para decidir
        p.mb-0.text-center Se incorporan sistemas que analizan grandes volúmenes de información y proponen opciones. Se hace evidente cuando: la cantidad de datos supera lo que un equipo puede revisar en el tiempo disponible.

    p.mb-4 Los cuatro rasgos no reemplazan al análisis racional ni a la racionalidad limitada, sino que los sitúan en un entorno más exigente. Reconocerlos permite entender que decidir hoy exige, al mismo tiempo, más humildad frente al futuro y más disciplina frente a la evidencia.
    p.mb-0 El primero de esos rasgos, la incertidumbre, es también el punto de partida lógico, dado que condiciona a los demás. Distinguir qué puede calcularse y qué no es lo que permite escoger la herramienta adecuada para cada decisión.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Decisiones bajo incertidumbre y riesgo

    p.mb-4 La distinción entre riesgo e incertidumbre fue establecida por el economista Frank Knight en su obra #[em Risk, Uncertainty and Profit] (1921). Según Knight, el riesgo es una situación en la que es posible asignar probabilidades objetivas a los distintos resultados, como en el lanzamiento de un dado. La incertidumbre, en cambio, es una situación en la que ni siquiera pueden estimarse probabilidades confiables, como al predecir el comportamiento de un nuevo mercado o de una innovación tecnológica disruptiva.
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .tema3-destacado-secundario.p-4.h-100
          .row.align-items-center
            .col-lg-2.mb-4
              img(src="@/assets/curso/temas/t3/img8.svg" alt="")
            .col-12
              p.mb-0 En el mundo real de la gestión, la mayoría de las decisiones importantes se toman bajo condiciones de incertidumbre, no de riesgo calculable. El directivo no sabe con precisión cuáles son las probabilidades de éxito de un nuevo producto, cómo reaccionarán sus competidores ante un cambio de precios o cuál será el impacto de una nueva regulación sobre su modelo de negocio. En ese contexto, las herramientas de cálculo del valor esperado tienen limitaciones severas, y el gerente debe recurrir a otras estrategias.
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img9.png" alt="")
    p.mb-4 Para las empresas colombianas la incertidumbre es un dato permanente. La tasa de cambio, el precio internacional de los productos agrícolas, los cambios en la regulación y el clima afectan a un mismo negocio en el mismo año, y ninguno de esos factores admite una probabilidad confiable de antemano.
    p.mb-4 Cuando el cálculo del valor esperado deja de ser posible, el gerente recurre a estrategias que no exigen predecir el futuro, sino prepararse para él. Tres de ellas concentran la práctica actual y se describen a continuación con la situación en que cada una resulta más útil:

    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img10.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              h5.mt-3.text-center Planeación por escenarios
              p.mb-0.text-center Consiste en construir varias visiones posibles del futuro y diseñar planes que funcionen en cada una, en lugar de apostar por una sola. Aporta más cuando: la decisión depende de una variable externa que la empresa no controla, como un precio internacional.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img11.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              h5.mt-3.text-center Opciones reales
              p.mb-0.text-center Reconoce el valor de conservar flexibilidad, es decir, de posponer, ampliar, reducir o abandonar una inversión según cambien las condiciones. Aporta más cuando: una inversión puede hacerse por etapas y cada etapa entrega información nueva.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img12.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              h5.mt-3.text-center Gestión adaptativa
              p.mb-0.text-center Propone aprender de la experiencia por ciclos cortos, con decisiones reversibles y de pequeña escala cuyos efectos se registran y corrigen. Aporta más cuando: se trata de un servicio o mercado nuevo cuyas reacciones nadie puede anticipar.

    p.mb-4 Las tres estrategias comparten una renuncia y una ganancia. Renuncian a predecir con exactitud y ganan la capacidad de responder sin improvisar, que es lo que en la práctica separa a una organización preparada de una que solo tuvo suerte.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tema3-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t3/img13.svg" alt="")
          p.mb-0.fw-bold.text-center Planear por escenarios no consiste en acertar el futuro, sino en no quedar sorprendido por ninguno de los futuros posibles.
    p.mb-4 En el contexto colombiano estas estrategias se aplican en sectores muy distintos y con los recursos de cada empresa, como se comprueba en los siguientes casos:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Exportadora de café del Tolima") Construye escenarios de precio alto, medio y bajo y define para cada uno cuánto vende con contrato anticipado y cuánto conserva, para que ninguna cotización la encuentre sin plan.
          p.mb-0(numero="2" titulo="Constructora de vivienda en Barranquilla") Adquiere la opción de compra sobre un lote en lugar del lote completo. Si las ventas del primer proyecto responden, ejerce la opción; si no, pierde solo el valor de la reserva.
          p.mb-0(numero="3" titulo="Empresa de domicilios en Bucaramanga") Antes de cubrir toda la ciudad, prueba el servicio en dos barrios durante un mes, ajusta tarifas y horarios con lo aprendido y solo entonces amplía la zona de cobertura.
          p.mb-0(numero="4" titulo="Hotel rural en el Eje Cafetero") Ante la incertidumbre del turismo internacional, diseña paquetes distintos para visitantes nacionales y extranjeros y decide cada trimestre a cuál destinar la promoción según la ocupación registrada. Ninguna temporada la toma sin plan.
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t3/img14.png" alt="")

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema3-destacado-acento.p-4.mb-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img15.svg" alt="")
            .col
              p.mb-0 En los cuatro casos la empresa decidió sin conocer el futuro y sin quedar atrapada por él. La diferencia con una apuesta está en que cada decisión conserva una salida y deja información para la siguiente.
    p.mb-4 Distinguir entre riesgo e incertidumbre, y escoger la estrategia adecuada, puede hacerse con una secuencia breve de preguntas que ordena el análisis antes de comprometer recursos:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t3/img16.png" alt="")
      .col-lg-8
        .tema3-lista-letras.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span A
              p.mb-2 Determinar si los resultados posibles admiten probabilidades confiables o si se trata de incertidumbre plena, porque de esa respuesta depende la herramienta que se use.
            li
              .lista-ol--cuadro__vineta
                span B
              p.mb-2 Identificar cuáles variables externas afectan más el resultado y construir con ellas dos o tres escenarios contrastados, desde el más favorable hasta el más adverso.
            li
              .lista-ol--cuadro__vineta
                span C
              p.mb-2 Buscar la forma de dividir la decisión en etapas reversibles, de manera que cada una aporte información antes de la siguiente.
            li
              .lista-ol--cuadro__vineta
                span D
              p.mb-2 Definir de antemano qué señales del entorno obligarán a cambiar de plan y quién las vigilará, para no descubrir el cambio cuando ya sea tarde.
    p.mb-4 La secuencia convierte la incertidumbre en un problema de diseño y no de adivinación. Quien la aplica no sabe más sobre el futuro que los demás, pero llega a él con planes en lugar de reacciones.
    p.mb-0 Estas estrategias preparan a la empresa frente a lo que el entorno no permite anticipar. Sin embargo, aun con buenos planes, quien decide puede equivocarse por la forma en que su propia mente procesa la información. Esos errores del juicio, que se repiten con un patrón reconocible, se examinan a continuación.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Heurísticas y sesgos cognitivos

    .row.align-items-start.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Daniel Kahneman, premio Nobel de Economía en 2002, junto con Amos Tversky, desarrollaron durante las décadas de 1970 y 1980 una teoría sistemática sobre los sesgos cognitivos que afectan los juicios y decisiones humanas. Sus investigaciones, plasmadas en numerosos artículos científicos y sintetizadas en el libro #[em Thinking, Fast and Slow] (2011) de Kahneman, han tenido un impacto profundo y duradero tanto en la psicología cognitiva como en la economía conductual y la gestión organizacional.
        .tema3-destacado-primario.p-4
          p.mb-0 El punto de partida de la teoría de Kahneman y Tversky es la propuesta de que el cerebro humano opera con dos sistemas de procesamiento que interactúan de manera dinámica. El primero es rápido, automático, intuitivo y reactivo, opera sin esfuerzo consciente y genera juicios inmediatos. El segundo es lento, deliberado, analítico y consciente, requiere esfuerzo y se activa ante problemas nuevos, complejos o inciertos.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t3/img17.png" alt="")

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img18.svg" alt="")
      .col-lg-9
        .tema3-destacado-secundario.p-4.mb-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.-d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img19.svg" alt="")
            .col
              p La mayor parte de las decisiones cotidianas las domina el primer sistema, lo que produce eficiencia, pero también vulnerabilidad frente a errores sistemáticos. En la gestión colombiana esa vulnerabilidad aparece en decisiones tomadas al cierre de un mes difícil, en reuniones apuradas o bajo la presión de una cifra que alguien puso sobre la mesa.
        p.mb-0 Entre los sesgos más documentados en contextos gerenciales se destacan seis por su impacto en las decisiones directivas. Cada uno se presenta con una señal que permite reconocerlo en la práctica:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .d-none.d-md-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/t3/img20.svg" alt="Seis sesgos cognitivos: anclaje, exceso de confianza, confirmación, temor a perder lo invertido, disponibilidad y encuadre.")
            .tarjeta.tema3-infografia-card.p-3(x="12.5%" y="57%"  numero="+")
              p.mb-0 Tendencia a apoyarse en la primera cifra o dato recibido y a ajustar poco a partir de él, aunque la información posterior lo contradiga. Señal concreta: el precio inicial que propone un proveedor termina definiendo el rango de toda la negociación.
            .tarjeta.tema3-infografia-card.p-3(x="27.5%" y="57%"  numero="+")
              p.mb-0 Sobrestimación de la propia capacidad de predecir resultados o de controlar situaciones, que lleva a subestimar riesgos y a omitir planes de contingencia. Señal concreta: una gerencia proyecta ventas del doble sin evidencia de mercado y compromete un inventario que después no rota.
            .tarjeta.tema3-infografia-card.p-3(x="42.5%" y="57%"  numero="+")
              p.mb-0 Búsqueda y valoración preferente de la información que respalda una idea previa, con descarte de la que la cuestiona. Señal concreta: en un comité solo se presentan los indicadores favorables a la apertura de una sede y se omiten las quejas de los clientes.
            .tarjeta.tema3-infografia-card.p-3(x="58.5%" y="57%"  numero="+")
              p.mb-0 Las pérdidas pesan más que las ganancias de igual magnitud, de modo que se rechazan opciones razonables por temor a perder lo ya invertido. Señal concreta: una empresa mantiene una línea de producto deficitaria durante años para no reconocer el costo de cerrarla.
            .tarjeta.tema3-infografia-card.p-3(x="72.5%" y="57%"  numero="+")
              p.mb-0 Tendencia a evaluar la probabilidad de un evento según la facilidad con que se recuerdan ejemplos similares. Señal concreta: un gerente que acaba de vivir una crisis de liquidez sobrestima la probabilidad de que se repita, y uno que nunca la ha enfrentado la subestima.
            .tarjeta.tema3-infografia-card.p-3(x="87.5%" y="57%"  numero="+")
              p.mb-0 La forma en que se presenta una decisión afecta la elección resultante, incluso cuando las opciones son equivalentes. Señal concreta: una propuesta formulada en términos de ganancias potenciales recibe apoyo con más facilidad que la misma propuesta formulada en términos de pérdidas potenciales.

        .d-md-none.mb-4
          figure
            img(src="@/assets/curso/temas/t3/img20_1.svg" alt="Seis sesgos cognitivos: anclaje, exceso de confianza, confirmación, temor a perder lo invertido, disponibilidad y encuadre.")
        
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        .tema3-destacado-acento.p-4.h-100
          p.mb-4 Estos sesgos no se eliminan con buena voluntad, porque operan por debajo de la conciencia; se contrarrestan con procedimientos que obliguen a examinar el juicio antes de actuar.
          p.mb-0 Los sesgos no son un asunto de laboratorio. Los siguientes casos, tomados de situaciones frecuentes en empresas colombianas, ponen de manifiesto cómo uno de ellos puede cambiar el rumbo de una decisión:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img21.svg" alt="")

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario
          p.mb-0(numero="1" titulo="Presupuesto de una fábrica de muebles en Duitama") En la reunión de presupuesto, el gerente de producción propuso la primera cifra y desde ese momento todos discutieron alrededor de ella. Nadie comprobó si esa cantidad respondía a los costos reales del año siguiente, y el presupuesto aprobado quedó atado a un número que no se revisó.
          p.mb-0(numero="2" titulo="Lanzamiento de una marca de café en Bogotá") Antes del lanzamiento, el equipo presentó a la junta solo las encuestas que respaldaban la idea y dejó por fuera los grupos focales que advertían un precio demasiado alto. La marca no alcanzó las ventas previstas. La información existía, pero nadie la llevó a la reunión.
          p.mb-0(numero="3" titulo="Cierre de una sucursal en Cúcuta") La sede llevaba tres años con pérdidas, pero la gerencia aplazaba el cierre porque hacerlo significaba admitir que la inversión inicial no se recuperaría. Cuando por fin tomó la decisión, el dinero gastado en sostenerla superaba varias veces lo que el cierre habría costado a tiempo.
          p.mb-0(numero="4" titulo="Compra de seguros en una transportadora de Villavicencio") Tras un accidente reciente, la empresa contrató coberturas muy por encima de su riesgo real, porque el suceso seguía fresco en la memoria de la gerencia y parecía más probable de lo que era. Las primas de ese año costaron más que el ahorro que pretendían proteger.

    p.mb-4 En los cuatro casos la empresa tenía a mano la información que necesitaba para decidir mejor. Lo que faltó no fueron datos, sino una pausa obligatoria dentro del proceso en la que alguien pusiera en duda el juicio de la gerencia antes de convertirlo en decisión.
    p.mb-4 El conocimiento de estos sesgos tiene implicaciones prácticas directas para el diseño de los procesos decisionales. Entre las estrategias más efectivas para contrarrestarlos se encuentran las siguientes:

    .tarjeta--container.row.mb-4
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-1.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img22.svg" alt="")
        h5.text-center Listas de verificación
        p.mb-0.text-center Fuerzan la consideración explícita de alternativas y criterios que de otro modo se ignorarían; su valor está en que se aplican antes de la decisión, no para justificarla después.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-2.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img23.svg" alt="")
        h5.text-center Abogado del diablo
        p.mb-0.text-center Se designa a una persona para cuestionar de forma deliberada las conclusiones preliminares, de modo que las objeciones aparezcan en la reunión y no durante la ejecución.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-3.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img24.svg" alt="")
        h5.text-center Consulta de perspectivas distintas
        p.mb-0.text-center Antes de comprometerse con una decisión se consultan áreas, clientes o aliados con intereses diferentes, porque un mismo dato se interpreta de forma distinta desde cada posición.
      .col-md-6.col-xl-3.tarjeta.tema3-conectada-4.p-4
        img.tema3-conectada__icono(src="@/assets/curso/temas/t3/img25.svg" alt="")
        h5.text-center #[em Pre-mortem]
        p.mb-0.text-center Se imagina que la decisión ya fracasó y se analizan sus posibles causas antes de tomarla; el ejercicio pone de manifiesto los riesgos que el optimismo del grupo oculta.
    p.mb-0 Las cuatro estrategias comparten un principio, el de introducir en el proceso un momento obligatorio de contraste antes de decidir. Reconocer los sesgos no basta para neutralizarlos; hace falta confrontar el juicio con evidencia externa, y esa es la promesa de la toma de decisiones basada en datos.

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Decisiones basadas en datos

    p.mb-4 La explosión de datos digitales que ha acompañado la transformación tecnológica del siglo XXI ha generado nuevas posibilidades para la toma de decisiones gerenciales. El #[em Data-Driven Decision Making] (DDDM), o toma de decisiones basada en datos, es un enfoque que prioriza el uso sistemático de datos empíricos sobre la intuición o la experiencia como base para las elecciones organizacionales.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img26.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El principio fundamental del DDDM es que las decisiones deben sustentarse en evidencia cuantitativa y cualitativa obtenida de fuentes confiables y procesada con rigor metodológico. En lugar de confiar solo en el juicio del directivo, el DDDM invita a formular hipótesis verificables, recopilar datos relevantes, analizarlos con las herramientas adecuadas y basar las elecciones en los resultados de ese análisis. Esta aproximación no elimina el juicio directivo, pero lo complementa y enriquece con información más objetiva y sistemática.

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img27.svg" alt="")
      .col-lg-9
        p.mb-4 En Colombia, la factura electrónica, las plataformas de pago y los programas de gestión en la nube han puesto al alcance de las pymes registros que antes solo tenían las grandes empresas. El reto ya no es conseguir datos, sino organizarlos e interpretarlos con las competencias del equipo directivo.
        .tema3-destacado-acento.p-4
          p.mb-0 Decidir con base en datos exige una infraestructura mínima que no depende del tamaño de la empresa sino de su orden. Cuatro componentes la forman y se describen a continuación con la versión sencilla que cualquier pyme puede adoptar:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-componentes
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-md-auto.mb-4.mb-md-0
                img.tema3-icono-90(src="@/assets/curso/temas/t3/img28.svg" alt="")
              .col
                h5 Captura y almacenamiento
                p.mb-0 Sistemas que registran las operaciones de forma consistente, desde una base de datos hasta un formato compartido. Versión sencilla: una hoja de cálculo única de ventas, actualizada a diario, reemplaza a las libretas de cada vendedor.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-md-auto.mb-4.mb-md-0
                img.tema3-icono-90(src="@/assets/curso/temas/t3/img29.svg" alt="")
              .col
                h5 Herramientas de análisis
                p.mb-0 Programas que permiten resumir, comparar y representar los datos, como los paquetes estadísticos o las plataformas de inteligencia de negocios. Versión sencilla: las tablas dinámicas de una hoja de cálculo bastan para empezar.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-md-auto.mb-4.mb-md-0
                img.tema3-icono-90(src="@/assets/curso/temas/t3/img30.svg" alt="")
              .col
                h5 Competencias analíticas
                p.mb-0 Capacidad del equipo directivo para interpretar los resultados y traducirlos en decisiones, sin delegarlo por completo en un técnico. Versión sencilla: cada gerente de área revisa cada mes tres indicadores que él mismo eligió.
          .tema3-componentes__item.p-4
            .row.align-items-center
              .col-md-auto.mb-4.mb-md-0
                img.tema3-icono-90(src="@/assets/curso/temas/t3/img31.svg" alt="")
              .col
                h5 Implementación progresiva
                p.mb-0 Avance por etapas desde los datos ya disponibles hacia capacidades más complejas, en lugar de un proyecto tecnológico de golpe. Versión sencilla: se empieza con los registros de transacciones y los historiales de clientes que ya existen.

    p.mb-0 Ninguno de los cuatro componentes sirve sin los otros tres. Los datos sin análisis son archivo, el análisis sin competencias es un informe que nadie usa, y las competencias sin datos ordenados terminan discutiendo cifras que nadie puede comprobar.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema3-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t3/img32.svg" alt="")
          p.mb-0.fw-bold.text-center Los datos que una pyme necesita para decidir mejor casi siempre ya están en sus facturas, sus registros y sus aplicaciones de pago. Lo que suele faltar no es información, sino la rutina de ordenarla y de preguntarle algo concreto.
    p.mb-4 En la gestión colombiana ya existen ejemplos de decisiones sustentadas en datos que no requirieron grandes inversiones, como los siguientes:

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        .tema3-casos.p-4.h-100
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Horarios de una clínica veterinaria de Medellín
                p.mb-0 El registro de citas de un año reveló que el 40 % de las consultas se pedían después de las cinco de la tarde, y la clínica amplió el horario nocturno en lugar de abrir otra sede.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Surtido de una tienda de barrio en Cali
                p.mb-0 Con el historial de la aplicación de pagos, el tendero identificó veinte productos que representaban la mayor parte de sus ventas y redujo el inventario de los que rotaban poco.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Rutas de reparto de una lechería en Boyacá
                p.mb-0 Al comparar el tiempo de entrega por ruta durante tres meses, la empresa reorganizó dos recorridos y redujo el consumo de combustible sin comprar vehículos. La mejora salió de datos que ya se registraban a diario.
            li.mb-0
              i.fas.fa-bookmark
              div
                h5.mb-1 Retiro de clientes en un gimnasio de Barranquilla
                p.mb-0 El análisis de asistencia permitió detectar que quien deja de ir dos semanas seguidas casi siempre cancela, y el gimnasio empezó a contactar a esos usuarios a tiempo. La retención mejoró sin reducir la mensualidad.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img33.png" alt="")

    p.mb-4 En cada caso los datos ya existían dentro de la empresa. La decisión mejoró no porque hubiera más información, sino porque alguien la organizó, la examinó con una pregunta concreta y actuó sobre lo que encontró.
    p.mb-4 Los datos tienen límites que conviene tener presentes antes de confiar en ellos. Los tres siguientes son los más frecuentes y se ordenan según la facilidad con que pasan inadvertidos:

    .row.justify-content-center.mb-0
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img34.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              p.mb-0.text-center Los datos siempre requieren interpretación, y ese ejercicio está expuesto a los mismos sesgos que el análisis pretendía evitar.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img35.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              p.mb-0.text-center Los datos disponibles describen el pasado, lo que limita su valor cuando el entorno cambia con rapidez o cuando aparece una tecnología que no existía cuando se registraron.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t3/img36.svg" alt="")
          .tarjeta.tema3-tarjeta-clara.w-100.h-100
            .p-4
              p.mb-0.text-center El exceso de información puede producir más confusión que claridad y llevar a la parálisis por análisis, sobre todo cuando los datos se contradicen.

    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-3.col-8.mb-4.mb-lg-0
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img37.svg" alt="")
      .col-lg-7
        p.mb-4 Estos límites no restan valor al enfoque, sino que definen su lugar. Los datos sirven para sustentar el juicio del directivo, no para reemplazarlo, y la organización que lo olvida termina decidiendo lo que la cifra permite y no lo que la situación requiere.
        .tema3-destacado-secundario.p-5
          p.mb-0 Cuando el volumen de datos supera lo que un equipo puede analizar, la organización recurre a sistemas que aprenden de esa información y proponen decisiones. La inteligencia artificial es hoy el principal de esos sistemas, y conviene entender qué apoyo real ofrece a la gerencia y qué riesgos trae consigo.

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Inteligencia artificial como apoyo gerencial

    p.mb-4 La inteligencia artificial (IA) está transformando de manera acelerada el panorama de la toma de decisiones en las organizaciones de todos los tamaños y sectores. Sistemas de aprendizaje automático, procesamiento de lenguaje natural, visión por computadora y otras tecnologías de IA ofrecen capacidades sin precedentes para analizar grandes volúmenes de datos, identificar patrones ocultos, realizar predicciones y generar recomendaciones de acción en tiempo real.
    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-destacado-primario.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema3-icono-84(src="@/assets/curso/temas/t3/img38.svg" alt="")
            .col
              p.mb-0 En el contexto gerencial, la IA puede apoyar los procesos decisionales de múltiples maneras. En el nivel operativo, los sistemas de IA pueden automatizar decisiones rutinarias y estructuradas, como la aprobación de créditos de bajo monto, la asignación automática de tareas o la detección de anomalías en los estados financieros. En el nivel táctico, las plataformas de inteligencia de negocios potenciadas con IA pueden identificar tendencias en el comportamiento de los clientes, proyectar flujos de caja u optimizar la asignación de recursos entre departamentos.

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 En el nivel estratégico, los modelos de análisis de escenarios apoyados en inteligencia artificial pueden respaldar la planeación de largo plazo, la evaluación de oportunidades de expansión o la gestión de riesgos. En Colombia, bancos, aseguradoras y grandes comercializadoras ya la emplean, y las herramientas de uso general la han puesto al alcance de empresas medianas y pequeñas.
        p.mb-0 Antes de examinar sus riesgos conviene distinguir qué tipo de apoyo puede prestar la inteligencia artificial a una decisión, porque no todos exigen el mismo control. Cuatro formas de apoyo se describen a continuación con la decisión que suelen respaldar:
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t3/img39.png" alt="")

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-casos.p-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Automatización de decisiones rutinarias
                p.mb-0 El sistema toma por sí mismo decisiones repetitivas y de bajo impacto, dentro de reglas definidas por la organización. Decisión que respalda: la aprobación de créditos de bajo monto o la asignación de turnos.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Detección de patrones y anomalías
                p.mb-0 El sistema identifica regularidades o desviaciones en grandes volúmenes de datos que una persona no alcanzaría a revisar. Decisión que respalda: la revisión de estados financieros o la vigilancia de fraudes.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Predicción y proyección
                p.mb-0 El sistema estima comportamientos futuros a partir de datos históricos, como la demanda, el flujo de caja o la rotación de personal. Decisión que respalda: la planeación de inventarios o de presupuesto.
            li.mb-0
              i.fas.fa-bookmark
              div
                h5.mb-1 Recomendación para el juicio humano
                p.mb-0 El sistema propone opciones y las ordena, pero la elección final queda en manos del directivo. Decisión que respalda: la selección de proveedores o de mercados de expansión. Es la forma que mejor conserva el juicio humano en la decisión.

    p.mb-4 Las cuatro formas van de menor a mayor participación humana, y esa gradación es la que debe guiar su adopción. Cuanto más impacto tenga la decisión sobre las personas y los recursos, menos conviene delegarla por completo en el sistema.
    p.mb-4 Sin embargo, la adopción de IA en los procesos decisionales plantea también desafíos éticos y organizacionales que el gerente responsable no puede ignorar. Tres de ellos concentran la discusión actual:

    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tema3-acordeon")
          .row(titulo="Opacidad")
            p.mb-0 Muchos sistemas de IA, sobre todo los basados en redes neuronales profundas, son cajas negras cuyo razonamiento interno es difícil de interpretar. Cuando una IA recomienda una decisión y no puede explicar por qué, el directivo enfrenta un dilema de rendición de cuentas, en particular donde la transparencia frente a clientes, socios y autoridades es un valor fundamental. #[strong Situación frecuente:] un banco niega un crédito con base en un puntaje automático y el asesor no puede explicar al cliente qué factor pesó más.
          .row(titulo="Sesgo algorítmico")
            p.mb-0 Los modelos de IA aprenden de datos históricos que pueden reflejar discriminaciones o inequidades del pasado; si no se gestionan con cuidado, pueden perpetuar y amplificar esas desigualdades en las decisiones futuras. #[strong Situación frecuente:] un sistema de selección de personal entrenado con contrataciones anteriores descarta hojas de vida de mujeres para cargos técnicos porque en el pasado casi no las hubo.
          .row(titulo="Sustitución del juicio humano")
            p.mb-0 La dependencia excesiva de los sistemas de IA puede atrofiar las capacidades críticas y deliberativas de los equipos directivos, y genera vulnerabilidad ante situaciones nuevas para las que los modelos no fueron entrenados. #[strong Situación frecuente:] un equipo comercial acepta las metas que sugiere la plataforma sin discutirlas y deja de detectar un cambio del mercado que el modelo no había registrado.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img40.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 La postura más prudente para el gerente contemporáneo es considerar la IA como un complemento, no como un sustituto, del juicio humano. Los sistemas de IA son excelentes para analizar datos y generar recomendaciones; los seres humanos son indispensables para contextualizar esas propuestas, evaluar su pertinencia ética y asumir la responsabilidad por las decisiones tomadas. Esta complementariedad, gestionada con inteligencia y ética, puede potenciar significativamente la calidad de los procesos decisionales en cualquier tipo de organización.

    p.mb-4 Adoptar la inteligencia artificial con responsabilidad no exige detener su uso, sino ordenarlo. Los siguientes pasos, en el orden en que conviene darlos, permiten aprovechar sus ventajas sin ceder el control de la decisión:
    .row.tema3-tarjetas-boton.mb-0
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tarjeta--boton.tema3-tarjeta-boton.p-4.h-100
          .tema3-tarjeta-boton__iconos
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--base(src="@/assets/curso/temas/t3/img41.svg" alt="")
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--hover(src="@/assets/curso/temas/t3/img45.svg" alt="")
          p.mb-0.text-center Definir qué decisiones puede tomar el sistema por sí mismo y cuáles requieren siempre revisión humana, según su impacto.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tarjeta--boton.tema3-tarjeta-boton.p-4.h-100
          .tema3-tarjeta-boton__iconos
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--base(src="@/assets/curso/temas/t3/img42.svg" alt="")
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--hover(src="@/assets/curso/temas/t3/img46.svg" alt="")
          p.mb-0.text-center Exigir que toda recomendación automática venga acompañada de los factores que más pesaron en ella, aunque sea de forma resumida.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tarjeta--boton.tema3-tarjeta-boton.p-4.h-100
          .tema3-tarjeta-boton__iconos
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--base(src="@/assets/curso/temas/t3/img43.svg" alt="")
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--hover(src="@/assets/curso/temas/t3/img47.svg" alt="")
          p.mb-0.text-center Revisar de manera periódica los resultados del sistema frente a grupos de clientes o de empleados distintos, para detectar sesgos.
      .col-md-6.col-xl-3.mb-4
        .tarjeta.tarjeta--boton.tema3-tarjeta-boton.p-4.h-100
          .tema3-tarjeta-boton__iconos
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--base(src="@/assets/curso/temas/t3/img44.svg" alt="")
            img.tema3-tarjeta-boton__img.tema3-tarjeta-boton__img--hover(src="@/assets/curso/temas/t3/img48.svg" alt="")
          p.mb-0.text-center Mantener en el equipo directivo la práctica de discutir las recomendaciones antes de aceptarlas, de modo que el juicio no se atrofie.

    p Estos pasos convierten a la inteligencia artificial en lo que debe ser dentro de una organización, una herramienta poderosa bajo responsabilidad humana. La decisión sigue siendo de la gerencia, y con ella la obligación de explicarla.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tema3-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t3/img49.svg" alt="")
          p.mb-0.fw-bold.text-center Un sistema de inteligencia artificial puede recomendar la decisión, pero no puede rendir cuentas por ella: la responsabilidad sigue siendo humana.
    p.mb-4 Comprender qué apoyo presta la inteligencia artificial y qué riesgos trae resulta más sencillo cuando se examinan casos reales. Para profundizar en cómo una empresa puede aprovecharla sin ceder el control de sus decisiones, se presenta el siguiente pódcast, “Decidir con inteligencia artificial: quién manda cuando la máquina recomienda”, que recorre las formas de apoyo, los riesgos y las prácticas con las que la gerencia conserva la responsabilidad de decidir:

    .row.justify-content-center.mb-4
      .col-lg-10
        .tema3-podcast.p-4
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              img(src="@/assets/curso/temas/t3/img50.svg" alt="")
            .col-md-9
              .tarjeta.clr--pink.p-4.rounded-0.h-100
                h5 Pódcast
                .tarjeta.bg-white.p-3
                  TarjetaAudio.color-acento-botones.mb-3(
                  texto="Decidir con inteligencia artificial: quién manda cuando la máquina recomienda."
                  :audio="require_src('@/assets/curso/temas/audio/Podcast_CF01.mp3')"
              )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

    
    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 Queda así completo el panorama de la inteligencia artificial como apoyo gerencial, desde las tareas que puede asumir hasta las prácticas que conservan la decisión en manos humanas. Es el último de los enfoques contemporáneos, y comparte con los anteriores una misma condición, la de servir a quien decide sin reemplazar su juicio.
        .tema3-destacado-primario.p-4
          .row.align-items-center.h-100
            .col-lg-2.mb-4.mb-md-0.d-none.d-lg-block
              img(src="@/assets/curso/temas/t3/img51.svg" alt="")
            .col
              p.mb-0 Estos enfoques no sustituyen a los modelos clásicos, sino que los completan allí donde el análisis tradicional se queda corto frente a un futuro incierto, a los atajos mentales y a la información abundante. Para la gerencia colombiana, que combina empresas con sistemas avanzados y negocios que se guían por la experiencia, el reto consiste en incorporar escenarios, evidencia y tecnología sin renunciar a la ética ni a la responsabilidad de cada elección. Decidir bien sigue siendo, en última instancia, una tarea humana apoyada en mejores herramientas.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema3-img-cover(src="@/assets/curso/temas/t3/img52.png" alt="")
</template>

<script>
export default {
  name: 'Tema3',
}
</script>
