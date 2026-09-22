<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La toma de decisiones gerenciales se comprende a lo largo de tres ejes encadenados. Todo comienza por la naturaleza de la decisión, es decir, su concepto y alcance, sus tipos, las etapas y los actores del proceso, la comunicación asertiva y el liderazgo que la sostienen y los factores cognitivos, emocionales y culturales que condicionan a quien decide. Con esa base, los modelos clásicos explican cómo eligen los gerentes, desde el ideal racional y la racionalidad limitada de Simon hasta la teoría de juegos y las herramientas de cálculo, como el análisis costo-beneficio y los árboles de decisión. Por último, los enfoques contemporáneos actualizan ese recorrido con las estrategias para decidir bajo incertidumbre y riesgo, el reconocimiento de las heurísticas y los sesgos, el uso de los datos como evidencia y la inteligencia artificial como apoyo que no reemplaza el juicio humano.

    p.mb-4 El mapa conceptual que se presenta a continuación organiza esos ejes y el recorrido que los articula:

    .row.justify-content-center
      .col-lg-10.mb-4
        figure
          img(
            src="@/assets/curso/sintesis.svg"
            alt="Mapa conceptual con tres temas: naturaleza, proceso y condiciones de la decisión gerencial; modelos clásicos de decisión; y enfoques contemporáneos en la toma de decisiones. El primero define qué se decide y bajo qué condiciones, el segundo explica cómo eligen los gerentes y el tercero actualiza esa elección con escenarios, datos e inteligencia artificial."
          )
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
