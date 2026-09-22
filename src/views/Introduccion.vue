<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        p.mb-4 La toma de decisiones constituye una de las funciones más críticas y determinantes en el ejercicio de la gestión gerencial. Cada organización, sin importar su tamaño, sector o naturaleza jurídica, se enfrenta de manera continua a la necesidad de elegir entre alternativas de acción. Esas elecciones condicionan su rumbo estratégico, su eficiencia operativa y, en última instancia, su permanencia y competitividad en el mercado.
        .introduccion-destacado.p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0.d-none.d-lg-block
              figure.introduccion-destacado__icono
                img(src="@/assets/curso/temas/intro/img1.svg" alt="")
            .col
              p.mb-0 En el entorno empresarial contemporáneo, marcado por la globalización, la aceleración tecnológica y la volatilidad de los mercados, la calidad de las decisiones ya no depende solo de la intuición o la experiencia del directivo. Se requiere, además, un sólido sustento conceptual, el dominio de herramientas analíticas y el desarrollo de competencias cognitivas y metacognitivas que permitan comprender la complejidad inherente a los procesos decisionales.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.introduccion-imagen.h-100
          img.h-100(src="@/assets/curso/temas/intro/img2.png" alt="")

    p Este componente formativo presenta los fundamentos teóricos y prácticos de la toma de decisiones desde una perspectiva gerencial. Se abordan las definiciones esenciales, las tipologías de decisión y el proceso decisional en sus distintas etapas. También se presentan los modelos clásicos y contemporáneos que la teoría administrativa y la ciencia conductual han desarrollado para comprender y mejorar la forma en que los directivos eligen entre alternativas.

    p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al video introductorio del componente formativo.
    .video
      iframe(width="1331" height="749" src="https://www.youtube.com/embed/ze8ShNoC86o" title="Fundamentals, processes, and conditions for managerial decision-making" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    figcaption Video 1. Fundamentos, procesos y condiciones para la decisición gerencial
</template>

<script>
export default {
  name: 'Introduccion',
}
</script>
