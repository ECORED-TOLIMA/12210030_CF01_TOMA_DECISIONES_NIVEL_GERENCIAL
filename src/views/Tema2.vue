<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos clásicos de decisión
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        img.tema2-icono-84(src="@/assets/curso/temas/t2/img1.svg" alt="")
      .col-lg-11
        p.mb-0 La teoría administrativa y la ciencia conductual han desarrollado, a lo largo del siglo XX y lo que va del XXI, un conjunto de modelos sobre la decisión gerencial. Esos modelos buscan explicar cómo deciden los gerentes, cómo deberían hacerlo y qué factores distorsionan o mejoran la calidad de sus juicios. Conocer estos modelos no es un ejercicio meramente académico, ya que proporciona al directivo un repertorio conceptual para analizar sus propias prácticas, identificar sus debilidades y adoptar enfoques más efectivos.
    p.mb-4 Es importante señalar que ninguno de estos modelos ofrece una receta universal. Cada uno capta una dimensión de la realidad decisional, y su valor práctico depende del contexto en que se aplique. Un buen gerente es aquel que conoce la caja de herramientas teóricas y sabe elegir, en cada situación, el instrumento más adecuado.
    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 En el contexto colombiano conviven grandes empresas con sistemas formales de análisis y miles de negocios familiares que deciden por experiencia. Allí, conocer los modelos tiene un valor adicional, porque da nombre a lo que ya se hace de manera intuitiva y señala sus límites. Los cuatro subtemas que siguen recorren los modelos en el orden en que aparecieron en la teoría, del ideal racional a las herramientas de cálculo que lo hacen operativo.
        .tema2-destacado-primario.p-4
          p.mb-0 Antes de estudiar cada modelo conviene tener claro qué se le puede pedir a un modelo de decisión y qué no. Un modelo es una representación simplificada de cómo se elige, y su utilidad depende de que el directivo sepa en qué se parece a su situación y en qué se aleja de ella. Cuatro rasgos permiten interpretar cualquier modelo de decisión con ese criterio y se describen a continuación con la pregunta que ayuda a identificarlos:
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/img2.png" alt="")

    .BGF01.p-4.p-lg-5.mb-4
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block
          img(src="@/assets/curso/temas/t2/img3.png" alt="")
        .col-lg-8
          SlyderF(columnas="col-lg-12")
            .tarjeta.tema2-slyder.p-4.h-100
              img.tema2-slyder__icono(src="@/assets/curso/temas/t2/img4.svg" alt="")
              h5 Supuestos sobre quien decide
              p Todo modelo parte de una idea de la persona que decide, desde el agente que lo sabe todo hasta el que actúa con información parcial. 
              p.mb-0 #[b Pregunta guía]: ¿qué se supone que conoce y puede calcular el directivo según este modelo?
            .tarjeta.tema2-slyder.p-4.h-100
              img.tema2-slyder__icono(src="@/assets/curso/temas/t2/img5.svg" alt="")
              h5 Tipo de situación que explica
              p Cada modelo fue creado para un tipo de problema, como la elección individual, la interacción con competidores o la evaluación de inversiones. 
              p.mb-0 #[b Pregunta guía:] ¿la situación que se enfrenta se parece a la que el modelo tuvo en mente?
            .tarjeta.tema2-slyder.p-4.h-100
              img.tema2-slyder__icono(src="@/assets/curso/temas/t2/img6.svg" alt="")
              h5 Carácter descriptivo o normativo
              p Algunos modelos describen cómo se decide en realidad y otros indican cómo debería decidirse. 
              p.mb-0 #[b Pregunta guía:] ¿este modelo explica lo que ocurre o señala lo que conviene hacer? Ninguno de los dos usos es superior; lo que importa es no confundirlos.
            .tarjeta.tema2-slyder.p-4.h-100
              img.tema2-slyder__icono(src="@/assets/curso/temas/t2/img7.svg" alt="")
              h5 Herramientas que ofrece
              p Los modelos más útiles se traducen en instrumentos concretos, como matrices, árboles de decisión o reglas de negociación. 
              p.mb-0 #[b Pregunta guía:] ¿qué procedimiento práctico deja este modelo en manos de quien decide?

    p.mb-4 Interpretar los modelos con estas cuatro preguntas evita dos errores frecuentes. El primero es descartar un modelo porque no describe con exactitud la realidad, cuando su valor está en orientar. El segundo es aplicar un modelo a una situación para la que no fue pensado y confiar en resultados que no puede ofrecer.
    p.mb-0 El recorrido comienza por el modelo más antiguo y más exigente, el que supone un decisor con información completa y capacidad ilimitada de cálculo. Aunque nadie decide así en la práctica, ese ideal fijó el punto de referencia frente al cual se construyeron los demás modelos.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Modelo racional clásico

    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 El modelo racional, fundamentado en la teoría económica neoclásica, postula que el decisor es un agente con información completa sobre todas las alternativas disponibles. Con esa información calcula con precisión las consecuencias de cada una y elige la que maximiza su función de utilidad.
        p.mb-4 Este modelo fue desarrollado de forma amplia por von Neumann y Morgenstern (1944) en el contexto de la teoría de juegos y de la utilidad esperada. Durante décadas constituyó el paradigma dominante tanto en la economía como en la administración.
        .tema2-destacado-secundario.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema2-icono-84(src="@/assets/curso/temas/t2/img8.svg" alt="")
            .col
              p.mb-0 En la gestión colombiana este ideal aparece con frecuencia en los formatos de evaluación de proyectos que exigen las entidades financieras y los fondos públicos. Una empresa de Manizales que solicita un crédito de fomento debe presentar alternativas, cifras de resultado y criterios de elección como si dispusiera de toda la información, aunque en la práctica la construya sobre la marcha.
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/img9.png" alt="")

    p.mb-4 En su versión más pura, el modelo racional se apoya en cuatro supuestos sobre quien decide. Si los cuatro se cumplieran, la decisión óptima sería identificable y alcanzable con solo hacer bien los cálculos. Cada supuesto se describe a continuación con la situación en que suele fallar:

    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tema2-acordeon")
          .row(titulo="Conocimiento completo de las alternativas")
            p.mb-0 Se supone que el decisor conoce todas las opciones posibles de acción, incluidas las que nadie ha propuesto aún. Dónde falla: en la mayoría de las reuniones solo se discuten las dos o tres alternativas que alguien llevó preparadas.
          .row(titulo="Predicción cierta de las consecuencias")
            p.mb-0 Se supone que el decisor puede anticipar con exactitud el resultado de cada alternativa. Dónde falla: el efecto de un cambio de precio depende de clientes y competidores cuya reacción no se conoce de antemano.
          .row(titulo="Preferencias claras y estables")
            p.mb-0 Se supone que el decisor sabe con precisión qué valora más y que ese orden no cambia durante el proceso. Dónde falla: una junta directiva prioriza la rentabilidad en enero y la estabilidad del empleo en junio.
          .row(titulo="Elección de la alternativa de mayor utilidad")
            p.mb-0 Se supone que siempre se escoge la opción de mayor beneficio esperado. Dónde falla: una alternativa algo menos rentable pero conocida suele preferirse a otra mejor pero incierta. Esa preferencia por lo conocido no es irracional, pero el modelo no la contempla.

    p.mb-4 En la práctica los cuatro supuestos rara vez se cumplen a la vez. La información es incompleta, el tiempo escaso, las preferencias de los actores se contradicen y los resultados dependen de lo que hagan otros. Eso no invalida el modelo, pero obliga a usarlo como referencia y no como descripción.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t2/img10.svg" alt="")
          p.mb-0.fw-bold.text-center El modelo racional vale menos como retrato de cómo se decide y más como espejo para comprobar qué se dejó de hacer. Cada supuesto incumplido señala una pregunta que la gerencia todavía puede formular antes de elegir.
    p.mb-4 No obstante, sus limitaciones descriptivas, el modelo racional conserva un valor normativo, ya que orienta al gerente hacia la sistematización del proceso, la búsqueda de información y la definición de criterios claros. Ese valor se reconoce mejor en situaciones concretas del entorno empresarial colombiano, como las siguientes:

    .row.mb-0
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img11.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Compra de maquinaria en una metalmecánica de Barranquilla
              p.mb-0 Antes de escoger proveedor, la gerencia define por escrito los criterios de costo, garantía y tiempo de entrega, y solo después recibe las cotizaciones. Ese orden evita que la primera oferta fije el estándar de comparación.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img12.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Apertura de un punto de venta en Pereira
              p.mb-0 Una cadena de droguerías exige un estudio de la zona con número de hogares, competencia cercana y arriendo estimado antes de aprobar cada apertura, aunque el gerente regional ya tenga un local favorito.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img13.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Selección de un programa contable en una pyme de Cali
              p.mb-0 El área financiera compara tres opciones con la misma lista de requisitos y asigna puntajes, de modo que la elección pueda explicarse a los socios con un cuadro y no con una preferencia personal.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img14.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Renovación de flota en una transportadora de Montería
              p.mb-0 La empresa calcula el costo total de cada vehículo durante su vida útil, incluidos combustible y mantenimiento, en lugar de comparar solo el precio de compra de cada modelo. El resultado cambió la elección del modelo y del proveedor.

    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img15.png" alt="")
      .col-lg-9
        p.mb-4 En ninguno de estos casos la empresa dispone de información completa ni de certeza sobre el futuro. Lo que toman del modelo racional es su disciplina, es decir, la costumbre de fijar criterios antes de examinar las opciones y de dejar registro del razonamiento que sustenta la elección.
        p.mb-4 Esa disciplina puede convertirse en una rutina sencilla que cualquier gerencia aplica sin herramientas complejas. Los siguientes pasos, en el orden en que conviene recorrerlos, acercan una decisión al ideal racional dentro de los límites reales de tiempo e información:
        .tarjeta.tema3-casos.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              p.mb-3 Definir por escrito los criterios de evaluación antes de conocer las alternativas, para que ninguna de ellas los ajuste a su favor.
            li
              .lista-ol--cuadro__vineta
                span 2
              p.mb-3 Buscar al menos una alternativa adicional a las que llegaron a la mesa, con el fin de ampliar el conjunto de opciones consideradas.
            li
              .lista-ol--cuadro__vineta
                span 3
              p.mb-3 Solicitar la información que falta cuando su costo sea razonable frente al monto de la decisión, y fijar un plazo para obtenerla.
            li
              .lista-ol--cuadro__vineta
                span 4
              p.mb-3 Registrar la comparación y las razones de la elección, para que puedan revisarse cuando se conozcan los resultados.
    p.mb-4 Estos pasos no garantizan la decisión óptima, porque el ideal racional sigue fuera del alcance de cualquier organización real. Lo que garantizan es una decisión explicable, y una decisión explicable es la que puede corregirse sin buscar culpables.
    p.mb-0 El modelo racional describe cómo debería decidirse si nada limitara al decisor. Sin embargo, la información incompleta, el tiempo escaso y la capacidad finita de análisis son la regla y no la excepción; explicar cómo se decide bajo esas restricciones fue el aporte de Herbert Simon.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Racionalidad limitada de Herbert Simon

    p.mb-4 Herbert Simon, premio Nobel de Economía en 1978, fue el primer teórico en cuestionar de forma sistemática el supuesto de racionalidad plena en los procesos decisionales humanos. En su obra #[em Administrative Behavior] (1947) y después en #[em Models of Man] (1957), Simon introdujo el concepto de racionalidad limitada (#[em bounded rationality]) para describir la realidad de los procesos decisionales en las organizaciones.
    .row.align-items-stretch.justify-content-center.mb-4
    
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        .tema2-destacado-secundario.p-4.h-100
          .row.h-100
            .col-auto.d-none.d-lg-block
              img(src="@/assets/curso/temas/t2/img16.svg" alt="")
            .col-lg-12
              p.mb-0 Según Simon, los seres humanos no maximizan, sino que satisfacen. El gerente no busca la decisión óptima en sentido matemático, sino una decisión lo suficientemente buena dado el nivel de información disponible, el tiempo del que dispone y sus capacidades cognitivas. Este fenómeno se conoce como #[em satisficing], término híbrido acuñado por el propio Simon que combina #[em satisfying] (satisfacer) y #[em sufficing] (ser suficiente).
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img17.png" alt="")

    p La consecuencia gerencial de este planteamiento es liberadora y exigente a la vez. Liberadora, porque reconoce que decidir con información parcial no es un fracaso sino la condición normal de la gestión. Exigente, porque obliga a definir con claridad qué nivel de información y de análisis es suficiente antes de comprometerse con una alternativa.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t2/img18.svg" alt="")
          p.mb-0.fw-bold.text-center Decidir con información incompleta no es un fracaso gerencial: es la condición normal de la gestión, y saberlo evita esperar certezas que nunca llegan.
    p.mb-4 La racionalidad limitada reconoce tres restricciones fundamentales que operan sobre todo proceso decisional humano:

    .row.justify-content-center.mb-4
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t2/img19.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.mt-3.w-100.h-100
            .p-4
              h5.text-center La primera es la incompletud de la información disponible
              p.mb-0.text-center El decisor nunca cuenta con toda la información relevante, ya sea porque es costosa de obtener, porque no existe, o porque el tiempo necesario para recopilarla supera el tiempo disponible para decidir.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t2/img20.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.mt-3.w-100.h-100
            .p-4
              h5.text-center La segunda es la capacidad cognitiva finita para procesar información
              p.mb-0.text-center El cerebro humano tiene límites en la cantidad de datos que puede manejar simultáneamente, en la precisión con que puede calcular probabilidades y en la consistencia con que puede aplicar criterios a lo largo de un proceso deliberativo extendido.
      .col-md-6.col-xl-4.mb-4
        .tarjeta-avatar.h-100
          img(src="@/assets/curso/temas/t2/img21.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.mt-3.w-100.h-100
            .p-4
              h5.text-center La tercera es la escasez de tiempo
              p.mb-0.text-center En el mundo real de la gestión, las decisiones deben tomarse en plazos concretos, que con frecuencia son menores a los que sería deseable para un análisis exhaustivo; esperar más información puede costar la oportunidad.

    p.mb-4 En conjunto, estas restricciones conducen a que el gerente utilice heurísticas, es decir, reglas de juicio simplificadas que permiten llegar a decisiones razonables con un esfuerzo moderado. Las heurísticas no son errores de razonamiento, sino estrategias adaptativas que funcionan bien en la mayoría de los contextos habituales, aunque pueden fallar de forma sistemática en situaciones atípicas o en presencia de sesgos específicos.
    p.mb-4 La racionalidad limitada no es una teoría lejana. Se reconoce cada vez que una empresa colombiana decide con la información que tiene a mano y en el plazo que la situación impone, como en los siguientes casos:

    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tema2-acordeon")
          .row(titulo="Reposición de inventario en una ferretería de Valledupar")
            p.mb-0 El administrador no calcula la demanda de cada referencia. Fija un nivel mínimo para las diez que más rotan y repone cuando lo alcanzan, una regla suficiente que le ahorra horas de análisis cada semana.
          .row(titulo="Contratación en un restaurante de Cartagena")
            p.mb-0 Ante la salida repentina de un cocinero, la dueña entrevista a tres candidatos recomendados y contrata al primero que cumple los requisitos, ya que cada día sin cocinero cuesta más que la búsqueda del ideal.
          .row(titulo="Fijación de precios en una empresa de eventos de Armenia")
            p.mb-0 En lugar de estudiar el mercado completo, la gerencia toma como referencia lo que cobran dos competidores conocidos y ajusta según su costo, con la certeza de que el precio es aceptable, aunque no sea el óptimo.
          .row(titulo="Elección de un proveedor de internet en una alcaldía de Tunja")
            p.mb-0 El comité evalúa las ofertas que llegaron a la convocatoria y selecciona una que cumple lo exigido, sin esperar a que aparezcan mejores, dado que el plazo de ejecución del presupuesto no admite demoras.

    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p En los cuatro casos se decidió con una regla suficiente y a tiempo. Ninguna de esas decisiones es óptima en sentido matemático, pero todas son razonables, y la diferencia entre una decisión razonable y una demora indefinida suele ser la diferencia entre operar y detenerse.
        p.mb-4 Para el gerente contemporáneo, la teoría de la racionalidad limitada deja tres implicaciones prácticas, que se presentan en el orden en que conviene incorporarlas:
        .tarjeta.tema3-casos.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span 1
              p.mb-2 Reconocer los propios límites de información, tiempo y capacidad de análisis, ya que admitirlos es el primer paso para gestionarlos.
            li
              .lista-ol--cuadro__vineta
                span 2
              p.mb-2 Definir antes de decidir qué nivel de información y de análisis será suficiente, de modo que el perfeccionismo no aplace una decisión que ya está madura.
            li
              .lista-ol--cuadro__vineta
                span 3
              p.mb-2 Diseñar procesos que compensen los límites individuales, como la deliberación en equipo, la consulta a expertos o el uso de herramientas de apoyo a la decisión.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/temas/t2/img22.png" alt="")
    p.mb-4 Las tres implicaciones apuntan a la misma idea. Una decisión buena tomada a tiempo suele superar a una decisión perfecta tomada tarde, siempre que quien decide sepa con qué información contaba y por qué la consideró suficiente.
    .row.justify-content-center.mb-0
      .col-lg-10
        .row.justify-content-center.align-items-center.tema3-tarjeta-clara.p-4
          .col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/img23.svg" alt="")
          .col-lg-11
            p.mb-0 La racionalidad limitada explica cómo decide una persona con restricciones, pero no aclara qué ocurre cuando el resultado de esa decisión depende también de lo que decidan otros. Ese es el terreno de la teoría de juegos, que se examina a continuación.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Teoría de juegos en las decisiones empresariales

    p.mb-4 La teoría de juegos es una rama de la matemática y la economía que estudia las situaciones de decisión interdependiente. En ellas, el resultado para cada participante (jugador) depende no solo de su propia elección, sino también de las elecciones de los demás. Fue desarrollada al inicio por John von Neumann y Oskar Morgenstern (1944) y ampliada por John Nash, premio Nobel de Economía en 1994. Ofrece un marco conceptual poderoso para analizar situaciones de interdependencia estratégica, frecuentes en el mundo empresarial.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(role="img" :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img24.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ámbito gerencial, la teoría de juegos resulta particularmente útil para analizar situaciones de competencia y cooperación entre organizaciones. Cuando dos empresas deben decidir si lanzan un nuevo producto al mismo tiempo, si reducen sus precios o si negocian un acuerdo de colaboración, cada una debe tener en cuenta la probable respuesta de la otra al tomar su decisión. Este tipo de razonamiento estratégico, en el que lo óptimo para cada actor depende de lo que hagan los demás, es precisamente el objeto de estudio de la teoría de juegos.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img25.svg" alt="")
      .col-lg-8
        p Las situaciones de interdependencia son cotidianas en el mercado colombiano. Dos estaciones de servicio de una misma vía fijan sus precios, varias empresas de vigilancia participan en la misma licitación o los caficultores de una vereda negocian con un único comprador. En los tres casos, el resultado de cada uno depende de lo que hagan los demás.
        .row.align-items-center
          .col-auto.d-none.d-md-block
            img(src="@/assets/curso/temas/t2/img26.svg" alt="")
          .col-lg-10
            p.mb-0 Para razonar en estas situaciones, la teoría de juegos utiliza unos pocos conceptos que conviene manejar con precisión. Cuatro de ellos bastan para interpretar la mayoría de los casos empresariales y se describen a continuación con una situación que los ejemplifica:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .d-none.d-md-block.mb-4
        
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src="@/assets/curso/temas/t2/img27.svg" alt="Cuatro conceptos de la teoría de juegos: jugadores y estrategias, interdependencia, dilema del prisionero, y juego repetido y reciprocidad.")
            .tarjeta.tema2-infografia-card.p-3(x="20.2%" y="28.5%" numero="+")
              p.mb-0 Los jugadores son quienes participan en una decisión que afecta a los demás, y las estrategias, las opciones que cada uno puede escoger. Se reconoce cuando una empresa enumera qué puede hacer su competidor antes de fijar su propio precio.
            .tarjeta.tema2-infografia-card.p-3(x="40%" y="67.8%" numero="+")
              p.mb-0 El resultado que obtiene cada participante no depende solo de su elección, sino de la combinación de todas las decisiones en juego. Se reconoce cuando un descuento que parecía rentable deja de serlo porque el competidor responde con otro igual.
            .tarjeta.tema2-infografia-card.p-3(x="59.7%" y="28.5%" numero="+")
              p.mb-0 Situación en la que a cada parte le conviene actuar por su cuenta, aunque las dos ganarían más si colaboraran, porque ninguna confía en la otra. Se reconoce cuando dos empresas se hunden en una guerra de precios que las perjudica a ambas.
            .tarjeta.tema2-infografia-card.p-3(x="80.4%" y="67.8%" numero="+")
              p.mb-0 Cuando la relación se mantiene en el tiempo, colaborar mientras la otra parte también lo haga rinde más que aprovecharse una sola vez. Se reconoce cuando un proveedor conserva condiciones favorables a un cliente que paga puntualmente desde hace años.

        .d-md-none.mb-4
          figure
            img(src="@/assets/curso/temas/t2/img27_1.svg" alt="Cuatro conceptos de la teoría de juegos: jugadores y estrategias, interdependencia, dilema del prisionero, y juego repetido y reciprocidad.")
            
    p.mb-4 Estos conceptos explican por qué en muchos mercados los actores terminan en resultados peores para todos, solo porque ninguno confía en la cooperación del otro. También explican por qué las relaciones de largo plazo, en las que la reciprocidad puede comprobarse, tienden a producir acuerdos más estables.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t2/img28.svg" alt="")
          p.mb-0.fw-bold.text-center En un mercado nadie decide solo. Anticipar la respuesta del otro antes de actuar convierte una apuesta en una estrategia, y construir una confianza que pueda comprobarse rinde más que ganar una sola vez a costa de la relación.
    p.mb-4 Para los gerentes que negocian con proveedores, distribuidores o competidores, la teoría de juegos ofrece una forma de anticipar respuestas y de construir mecanismos de cooperación. Los siguientes casos del entorno colombiano evidencian ese razonamiento en acción:

    .row.justify-content-center.mb-0
      .col-md-5.mb-4
        .tarjeta.tarjeta--boton.tema2-tarjeta-boton.p-4.h-100
          .tema2-tarjeta-boton__iconos
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--base(src="@/assets/curso/temas/t2/img29.svg" alt="")
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--hover(src="@/assets/curso/temas/t2/img33.svg" alt="")
          h5 Licitación de transporte escolar en un municipio del Huila
          p.mb-0 Tres empresas saben que ofrecer el precio más bajo posible las deja sin margen. Cada una estima hasta dónde bajarán las otras y presenta una oferta competitiva pero sostenible, en lugar de la mínima.
      .col-lg-5.mb-4
        .tarjeta.tarjeta--boton.tema2-tarjeta-boton.p-4.h-100
          .tema2-tarjeta-boton__iconos
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--base(src="@/assets/curso/temas/t2/img30.svg" alt="")
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--hover(src="@/assets/curso/temas/t2/img34.svg" alt="")
          h5 Alianza de productores de panela en Santander
          p.mb-0 Varios trapiches acuerdan vender bajo una misma marca y un precio común. La cooperación se sostiene porque quien venda por debajo del acuerdo pierde el acceso a la marca en la siguiente cosecha.
      .col-lg-5.mb-4
        .tarjeta.tarjeta--boton.tema2-tarjeta-boton.p-4.h-100
          .tema2-tarjeta-boton__iconos
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--base(src="@/assets/curso/temas/t2/img31.svg" alt="")
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--hover(src="@/assets/curso/temas/t2/img35.svg" alt="")
          h5 Cadena de suministro de una empresa de alimentos en Bogotá
          p.mb-0 La compañía comparte con su proveedor de empaques la proyección de ventas del semestre. Ambos ganan con la información, y el proveedor sabe que ocultar un problema de capacidad le costaría el contrato.
      .col-lg-5.mb-4
        .tarjeta.tarjeta--boton.tema2-tarjeta-boton.p-4.h-100
          .tema2-tarjeta-boton__iconos
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--base(src="@/assets/curso/temas/t2/img32.svg" alt="")
            img.tema2-tarjeta-boton__img.tema2-tarjeta-boton__img--hover(src="@/assets/curso/temas/t2/img36.svg" alt="")
          h5 Guerra de precios entre dos gimnasios de Popayán
          p.mb-0 Cada uno rebaja la mensualidad para responder al otro hasta que ninguno cubre costos. La salida llega cuando ambos se diferencian por servicios en lugar de competir solo por precio.

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src="@/assets/curso/temas/t2/img37.png" alt="")
      .col-lg-9
        p En todos los casos la clave no está en adivinar lo que hará el otro, sino en reconocer que el otro también está anticipando. Quien entiende esa simetría deja de reaccionar y empieza a diseñar la situación para que cooperar sea la mejor opción para ambos.
        p.mb-4 Ese diseño puede abordarse con una secuencia corta de preguntas que cualquier gerente puede plantearse antes de una negociación, un lanzamiento o una respuesta a la competencia:
        .tarjeta.tema2-lista-letras.p-4
          ol.lista-ol--cuadro.mb-0
            li
              .lista-ol--cuadro__vineta
                span A
              p.mb-2 Identificar quiénes son los actores cuya decisión cambia el resultado propio y qué opciones reales tiene cada uno y qué gana o pierde con cada resultado.
            li
              .lista-ol--cuadro__vineta
                span B
              p.mb-2 Estimar cómo respondería cada actor a cada una de las alternativas que se están considerando, sin suponer que se quedará quieto.
            li
              .lista-ol--cuadro__vineta
                span C
              p.mb-2 Determinar si la interacción se repetirá en el tiempo, dado que la repetición abre la puerta a la cooperación y a la reputación de cada parte.
            li
              .lista-ol--cuadro__vineta
                span D
              p.mb-2 Buscar la alternativa que siga siendo conveniente aun cuando el otro elija lo que más le favorece, en lugar de la que solo funciona si el otro se equivoca.
    p La secuencia no asegura ganar en cada interacción, y ese no es su propósito. Su valor está en evitar las decisiones que solo funcionan si el competidor o el socio se equivocan, que son las que con más frecuencia terminan mal.
    p.mb-0 Anticipar lo que harán otros es una parte del problema; la otra es valorar con números las alternativas propias. Para esa tarea, el modelo racional aporta dos herramientas de uso extendido en la gestión, el análisis costo-beneficio y los árboles de decisión.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Análisis costo-beneficio y árboles de decisión

    .row.align-items-center.mb-4
      .col-lg-9
        p.mb-4 El análisis costo-beneficio (ACB) y los árboles de decisión son dos herramientas fundamentales del modelo racional que permiten estructurar y cuantificar la evaluación de alternativas. Su uso sistemático contribuye a reducir la arbitrariedad en las decisiones gerenciales y a documentar el razonamiento que sustenta cada elección. Esto resulta sobre todo valioso en organizaciones donde la transparencia y la rendición de cuentas ante los socios o los accionistas son principios fundamentales.
        .tema2-destacado-primario.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              img.tema2-icono-84(src="@/assets/curso/temas/t2/img38.svg" alt="")
            .col
              p.mb-0 El análisis costo-beneficio consiste en identificar y cuantificar todos los costos y beneficios asociados a cada alternativa de decisión, con el fin de comparar su rentabilidad o conveniencia relativa. En su versión más simple, el ACB permite calcular si el beneficio neto de una decisión (beneficios totales menos costos totales) es positivo, negativo o nulo.
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/img39.svg" alt="")

    p.mb-4 En versiones más sofisticadas, incorpora el valor del dinero en el tiempo a través del cálculo del valor presente neto, o VPN, la probabilidad de ocurrencia de distintos escenarios y el costo de oportunidad de las alternativas no elegidas.
    p.mb-4 Los árboles de decisión representan de forma gráfica el proceso de elección con sus alternativas, sus resultados posibles, sus probabilidades y sus valores. Para leerlos o construirlos basta conocer cuatro elementos, que se describen a continuación con su forma de uso:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tema2-elementos.p-4.mb-4
          ul.lista-ul.lista-ul--separador.mb-0
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Nodo de decisión
                p.mb-0 Punto en el que quien decide elige entre alternativas; se representa con un cuadrado del que salen las opciones disponibles. Forma de uso: se dibuja al inicio del árbol y cada rama que sale de él es una decisión posible.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Nodo de azar
                p.mb-0 Punto en el que el resultado no depende del decisor sino de las circunstancias; se representa con un círculo. Forma de uso: de cada círculo salen los resultados posibles, cada uno con la probabilidad estimada de que ocurra.
            li
              i.fas.fa-bookmark
              div
                h5.mb-1 Valor final de cada rama
                p.mb-0 Cifra que expresa el resultado de cada camino completo del árbol, en dinero o en otra unidad de utilidad. Forma de uso: se anota al extremo de cada rama, después de sumar los ingresos y restar los costos.
            li.mb-0
              i.fas.fa-bookmark
              div
                h5.mb-1 Valor esperado
                p.mb-0 Suma de los valores finales de una alternativa, cada uno multiplicado por su probabilidad. Forma de uso: se calcula para cada alternativa y, según el modelo racional, se elige la de mayor valor esperado.

    p.mb-0 Aun así, conviene complementar el valor esperado con consideraciones sobre el riesgo, es decir, sobre cuánto pueden variar los resultados posibles, y con los valores que no se dejan cuantificar, como el impacto social o ambiental de la decisión.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tema2-frase.p-4.mb-4
          img(src="@/assets/curso/temas/t2/img40.svg" alt="")
          p.mb-0.fw-bold.text-center Un valor esperado favorable no basta cuando la empresa no puede soportar el peor resultado posible. Las cifras ordenan la comparación, pero la decisión final sigue perteneciendo al juicio de quien responde por sus consecuencias.
    p.mb-4 En la práctica gerencial colombiana, estas herramientas resultan útiles para decisiones de inversión, expansión de operaciones, lanzamiento de servicios o gestión de proyectos productivos, como confirman los siguientes casos:

    .row.mb-0
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img41.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Nueva ruta intermunicipal en una transportadora del Tolima
              p.mb-0 Con un árbol de decisión se compara el valor esperado de abrir la ruta con el de mantener la oferta actual, bajo escenarios de demanda alta, media y baja y con distintos costos de combustible.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img42.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Compra frente a alquiler de un local en Santa Marta
              p.mb-0 Una empresa de turismo lista los costos y beneficios de cada opción a cinco años, incluido el valor del dinero en el tiempo, y descubre que alquilar libera capital para promoción.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img43.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Ampliación de un cultivo de aguacate en el Quindío
              p.mb-0 El productor construye un árbol con dos alternativas, sembrar diez hectáreas más o esperar un año, y estima probabilidades de precio internacional y de heladas antes de decidir. El resultado le indica cuánto vale esperar.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src="@/assets/curso/temas/t2/img44.svg" alt="")
          .tarjeta.tema1-fondo-primario-claro.h-100
            .p-4
              h5 Cambio de empaque en una fábrica de galletas de Cali
              p.mb-0 El análisis costo-beneficio suma el ahorro en material y la reducción de reclamos, resta la inversión en maquinaria y revela que el beneficio neto es positivo a partir del segundo año.

    .row.align-items-center.mb-4
      .col-lg-8
        p En cada caso las herramientas no sustituyen el juicio de la gerencia, sino que lo organizan. Las probabilidades y los valores siguen siendo estimaciones, y su utilidad consiste en que quedan explícitos y pueden discutirse, en lugar de permanecer implícitos en la intuición de una sola persona.
        p.mb-0 Construir un análisis costo-beneficio o un árbol de decisión sigue una secuencia que conviene respetar, ya que saltarse un paso suele invalidar el resultado. Los pasos son los siguientes:
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/t2/img45.svg" alt="")
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.tema2-elementos.p-4.mb-4
          ol.lista-ol--cuadro.mb-4
            li
              .lista-ol--cuadro__vineta
                span 1
              p.mb-2 Delimitar la decisión y enumerar las alternativas reales, incluida la de no hacer nada, que también tiene costos y beneficios.
            li
              .lista-ol--cuadro__vineta
                span 2
              p.mb-2 Identificar los resultados posibles de cada alternativa y estimar la probabilidad de cada uno con la información disponible, sin inventar precisión que no existe.
            li
              .lista-ol--cuadro__vineta
                span 3
              p.mb-2 Cuantificar los costos y los beneficios de cada resultado en la misma unidad y en el mismo horizonte de tiempo.
            li
              .lista-ol--cuadro__vineta
                span 4
              p.mb-2 Calcular el valor esperado de cada alternativa y contrastarlo con el riesgo y con los efectos que no se pudieron cuantificar.

    .row.align-items-stretch.justify-content-center.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.tema2-img-cover(src="@/assets/curso/temas/t2/img46.png" alt="")
      .col-lg-8
        p.mb-4 El último paso es el que distingue a un buen análisis de una simple operación aritmética. Los números orientan la decisión, pero la responsabilidad de ponderar lo que no cabe en ellos sigue siendo de quien decide.
        .tema2-destacado-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/t2/img47.svg" alt="")
            .col-lg-10
              p.mb-0 Los modelos clásicos suponen entornos relativamente estables y decisores bien informados. El mundo gerencial actual rara vez cumple esas condiciones, y por eso hacen falta enfoques que incorporen la incertidumbre del entorno, los sesgos del juicio humano y el volumen de datos hoy disponible.
        
              
</template>

<script>
export default {
  name: 'Tema2',
}
</script>
