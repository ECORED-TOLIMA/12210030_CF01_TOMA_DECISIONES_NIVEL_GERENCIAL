<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const retroalimentacionIncorrecta =
  'Revise nuevamente el contenido del componente formativo.'

const crearPregunta = (id, texto, opciones, correcta, mensajeCorrecto) => ({
  id,
  texto,
  imagen: `@/assets/actividad/imagen${((id - 1) % 10) + 1}.png`,
  barajarRespuestas: true,
  opciones: opciones.map((opcion, indice) => ({
    id: String.fromCharCode(97 + indice),
    texto: opcion,
    esCorrecta: indice === correcta,
  })),
  mensaje_correcto: mensajeCorrecto,
  mensaje_incorrecto: retroalimentacionIncorrecta,
})

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de la naturaleza, los tipos y el proceso de la decisión gerencial, de los modelos clásicos que explican cómo eligen los directivos y de los enfoques contemporáneos que incorporan la incertidumbre, los sesgos, los datos y la inteligencia artificial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        crearPregunta(
          1,
          '¿Qué distingue a una decisión gerencial de una elección cotidiana dentro de la organización?',
          [
            'Que la toma una sola persona y en poco tiempo.',
            'Que compromete el rumbo de la organización, moviliza recursos significativos y genera consecuencias difíciles de revertir.',
            'Que siempre se registra en un documento firmado.',
            'Que se resuelve con un procedimiento ya establecido.',
          ],
          1,
          '¡Correcto! Escoger un proveedor de papelería y abrir una sucursal son elecciones, pero solo la segunda reúne los atributos que la hacen gerencial.',
        ),
        crearPregunta(
          2,
          'La aprobación de las vacaciones del personal según el reglamento interno de una clínica es un ejemplo de decisión.',
          [
            'No programada, porque afecta al personal.',
            'Programada o estructurada, porque se resuelve con una política ya establecida.',
            'Estratégica, porque la toma la alta gerencia.',
            'Semiestructurada, porque exige juicio del directivo.',
          ],
          1,
          '¡Correcto! Cuanto más repetitivo y previsible es el problema, más estructurada es la decisión y más fácil resulta delegarla.',
        ),
        crearPregunta(
          3,
          '¿Qué indica el alcance temporal de una decisión?',
          [
            'El número de personas que participan en la reunión.',
            'Durante cuánto tiempo y con qué profundidad compromete a la organización.',
            'La cantidad de alternativas disponibles.',
            'El costo de la información necesaria para decidir.',
          ],
          1,
          '¡Correcto! Cuanto mayor es el horizonte de la decisión, más alto debe ser el nivel que la adopta.',
        ),
        crearPregunta(
          4,
          'Una empresa de calzado responde a la caída de ventas con descuentos inmediatos, sin analizar si la causa es el precio, el canal o el producto. ¿Qué etapas del proceso decisional omitió?',
          [
            'Implementación y seguimiento.',
            'Diagnóstico de causas y generación de alternativas.',
            'Selección y comunicación de la decisión.',
            'Definición de criterios y evaluación de resultados.',
          ],
          1,
          '¡Correcto! Saltar del síntoma a la solución es el atajo más frecuente cuando se decide bajo presión de tiempo.',
        ),
        crearPregunta(
          5,
          '¿Por qué conviene definir los criterios de decisión antes de generar las alternativas?',
          [
            'Porque así se reduce el número de reuniones.',
            'Porque evita ajustar los criterios a la opción que ya se prefería.',
            'Porque los criterios cambian según la alternativa elegida.',
            'Porque las alternativas dependen del presupuesto disponible.',
          ],
          1,
          '¡Correcto! Los criterios fijados de antemano hacen comparables opciones de naturaleza distinta.',
        ),
        crearPregunta(
          6,
          'Un supervisor puede explicar la decisión a su equipo con las mismas razones que recibió de la gerencia. ¿Qué capacidad de la comunicación asertiva se pone a prueba?',
          [
            'Claridad al presentar las opciones.',
            'Gestión constructiva del desacuerdo.',
            'Atención a las perspectivas del equipo.',
            'Transparencia al comunicar la decisión.',
          ],
          0,
          '¡Correcto! Exponer las alternativas en un lenguaje que todos comprendan permite que la decisión se transmita sin distorsiones.',
        ),
        crearPregunta(
          7,
          'Según el modelo situacional de Hersey y Blanchard, ¿qué estilo corresponde a un equipo competente y comprometido que puede decidir por sí mismo?',
          ['Directivo.', 'Orientador.', 'Participativo.', 'Delegativo.'],
          3,
          '¡Correcto! El estilo se ajusta al nivel de competencia y de compromiso del equipo frente a la tarea que se decide.',
        ),
        crearPregunta(
          8,
          'En una organización donde nadie contradice al fundador, las alternativas que él no propone no se discuten. ¿Qué nivel del factor cultural describe esa situación?',
          [
            'Cultura regional.',
            'Cultura profesional.',
            'Cultura organizacional.',
            'Cultura de mercado.',
          ],
          2,
          '¡Correcto! Las normas no escritas sobre quién puede opinar configuran el marco desde el cual se valoran las alternativas.',
        ),
        crearPregunta(
          9,
          '¿Qué práctica permite que la emoción del entusiasmo o del temor no elimine opciones antes de examinarlas?',
          [
            'Conformar equipos con la misma formación.',
            'Separar la generación de las alternativas del momento de evaluarlas.',
            'Decidir en el menor tiempo posible.',
            'Delegar la decisión en un consultor externo.',
          ],
          1,
          '¡Correcto! Separar los dos momentos protege el análisis de los factores emocionales que condicionan a quien decide.',
        ),
        crearPregunta(
          10,
          '¿Cuál es el aporte que conserva el modelo racional clásico, aunque sus supuestos rara vez se cumplan?',
          [
            'Garantiza la decisión óptima en cualquier situación.',
            'Describe con exactitud cómo deciden los gerentes.',
            'Orienta hacia la sistematización del proceso, la búsqueda de información y la definición de criterios claros.',
            'Elimina la incertidumbre sobre el futuro.',
          ],
          2,
          '¡Correcto! Su valor es normativo, ya que sirve como referencia y no como descripción de la realidad.',
        ),
        crearPregunta(
          11,
          'Según Herbert Simon, ¿qué hace el gerente cuando decide bajo racionalidad limitada?',
          [
            'Busca la decisión óptima en sentido matemático.',
            'Elige una decisión suficientemente buena según la información, el tiempo y las capacidades disponibles.',
            'Aplaza la decisión hasta contar con toda la información.',
            'Delega la decisión en un sistema automático.',
          ],
          1,
          '¡Correcto! Los seres humanos no maximizan, sino que satisfacen, y ese es el sentido del término <em>satisficing</em>.',
        ),
        crearPregunta(
          12,
          'Ante la salida repentina de un cocinero, la dueña de un restaurante contrata al primer candidato recomendado que cumple los requisitos. ¿Qué restricción de la racionalidad limitada pesa más en esa decisión?',
          [
            'La escasez de tiempo.',
            'La capacidad cognitiva finita.',
            'El exceso de alternativas.',
            'La preferencia por lo conocido.',
          ],
          0,
          '¡Correcto! Cada día sin cocinero cuesta más que la búsqueda del candidato ideal.',
        ),
        crearPregunta(
          13,
          'Dos gimnasios rebajan la mensualidad para responderse mutuamente hasta que ninguno cubre costos. ¿Qué concepto de la teoría de juegos describe esa situación?',
          [
            'Juego repetido y reciprocidad.',
            'Dilema del prisionero.',
            'Estrategia dominante.',
            'Nodo de azar.',
          ],
          1,
          '¡Correcto! A cada uno le conviene no cooperar, aunque ambos ganarían más cooperando, porque ninguno confía en el otro.',
        ),
        crearPregunta(
          14,
          'En un árbol de decisión, ¿qué representa el nodo de azar?',
          [
            'El punto en el que quien decide elige entre alternativas.',
            'El punto en el que el resultado depende de las circunstancias y no del decisor.',
            'La cifra final de cada rama del árbol.',
            'El costo de oportunidad de la alternativa no elegida.',
          ],
          1,
          '¡Correcto! Se representa con un círculo del que salen los resultados posibles, cada uno con su probabilidad.',
        ),
        crearPregunta(
          15,
          '¿Cómo se calcula el valor esperado de una alternativa?',
          [
            'Restando los costos totales de los beneficios totales.',
            'Sumando los valores finales de cada rama, multiplicado cada uno por su probabilidad.',
            'Promediando los resultados de todas las alternativas.',
            'Eligiendo el resultado más favorable de la rama.',
          ],
          1,
          '¡Correcto! Según el modelo racional se elige la alternativa de mayor valor esperado, contrastada con el riesgo.',
        ),
        crearPregunta(
          16,
          'Según Frank Knight, ¿qué diferencia el riesgo de la incertidumbre?',
          [
            'El riesgo se refiere a pérdidas y la incertidumbre a ganancias.',
            'En el riesgo pueden asignarse probabilidades objetivas a los resultados; en la incertidumbre no.',
            'El riesgo es de corto plazo y la incertidumbre de largo plazo.',
            'No existe diferencia; son sinónimos en la gestión.',
          ],
          1,
          '¡Correcto! La mayoría de las decisiones importantes se toman bajo incertidumbre, donde el valor esperado tiene limitaciones severas.',
        ),
        crearPregunta(
          17,
          'Una empresa de domicilios prueba el servicio en dos barrios durante un mes antes de cubrir toda la ciudad. ¿Qué estrategia aplica?',
          [
            'Planeación por escenarios.',
            'Opciones reales.',
            'Gestión adaptativa.',
            'Análisis costo-beneficio.',
          ],
          2,
          '¡Correcto! Aprender por ciclos cortos, con decisiones reversibles y de pequeña escala, es propio de la gestión adaptativa.',
        ),
        crearPregunta(
          18,
          'El precio inicial que propone un proveedor termina definiendo el rango de toda la negociación. ¿Qué sesgo cognitivo se evidencia?',
          [
            'Exceso de confianza.',
            'Sesgo de anclaje.',
            'Aversión a la pérdida.',
            'Efecto de encuadre.',
          ],
          1,
          '¡Correcto! Se tiende a apoyarse en la primera cifra recibida y a ajustar poco a partir de ella.',
        ),
        crearPregunta(
          19,
          '¿Cuál es el principal reto de las pymes colombianas para decidir con base en datos?',
          [
            'Conseguir datos, porque no los registran.',
            'Organizar e interpretar los datos que ya tienen.',
            'Comprar programas estadísticos costosos.',
            'Contratar un técnico que decida por la gerencia.',
          ],
          1,
          '¡Correcto! La factura electrónica y las plataformas de pago pusieron los registros al alcance; lo que falta es orden e interpretación.',
        ),
        crearPregunta(
          20,
          '¿Cuál es la postura más prudente frente a la inteligencia artificial en las decisiones gerenciales?',
          [
            'Delegar en el sistema las decisiones de mayor impacto.',
            'Considerarla un complemento del juicio humano, con responsabilidad de la gerencia sobre la decisión.',
            'Evitar su uso hasta que sus resultados sean explicables por completo.',
            'Aceptar sus recomendaciones sin discutirlas para ganar tiempo.',
          ],
          1,
          '¡Correcto! El sistema analiza y recomienda; las personas contextualizan, evalúan la ética y asumen la responsabilidad.',
        ),
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad. Sus respuestas demuestran que reconoce la naturaleza y el proceso de la decisión gerencial, distingue los modelos clásicos que explican cómo eligen los directivos y comprende los enfoques contemporáneos que apoyan la decisión con escenarios, evidencia e inteligencia artificial.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad.',
    },
  }),
}
</script>
