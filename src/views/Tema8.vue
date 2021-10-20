<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Registro de campo
    p.mb-5 El registro de campo o acta de toma de muestras debe mantenerse intacto durante todo el procedimiento y el nombre que se le asigna a la muestra en el momento de la toma debe ser claro y marcado de forma durable para su identificación. Para ello, se deben tener en cuenta registrar la muestra con características <i>in situ</i> como pH, temperatura para agua cruda y para agua potable, pH, temperatura y cloro residual. Es importante registrar el tipo de mediciones efectuadas y las variaciones ambientales del sitio tales como condiciones del clima y observaciones inusuales y para ello se debe tener en cuenta: 
    .contendores-hover.d-xl-block.d-lg-block
      .contenedor-colores-hover.bg-colores__naranja.d-flex.p-5.mb-1
        p.mb-0 Los recipientes que contengan muestras deben marcarse en forma clara y durable para permitir su identificación en el laboratorio sin ninguna ambigüedad. 
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/71.svg')
      .contenedor-colores-hover.bg-colores__rojo.d-flex.p-5.mb-1
        p.mb-0 Al momento del muestreo es necesario observar numerosos detalles que permitirán una interpretación correcta de la información obtenida. 
          b Estos detalles se pueden lograr mediante el diligenciamiento de las etiquetas o formatos diseñados para tal fin
          |, inmediatamente después de la recolección de la muestra, de modo que sea fácilmente identificada.
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/72.svg')
      .contenedor-colores-hover.bg-colores__fucsia.d-flex.p-5.mb-1
        p.mb-0 Es importante 
          b registrar el tipo de mediciones efectuadas y las variaciones ambientales 
          | del sitio tales como condiciones del clima y observaciones inusuales. 
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/73.svg')
      .contenedor-colores-hover.bg-colores__azul.d-flex.p-5.mb-1
        p.mb-0 Cuando se muestrea por razones específicas, por ejemplo: 
          b quejas de un consumidor, debe darse información detallada, incluyendo las razones del muestreo. 
          | Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio.
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/74.svg')
      .contenedor-colores-hover.bg-colores__morado.d-flex.p-5.mb-1
        p.mb-0 Se puede pegar al recipiente, la tarjeta o etiqueta con la información requerida; pero con frecuencia se mojan al transportar las muestras refrigeradas al laboratorio y la información puede quedar ilegible. 
          b En estos casos el sistema de numeración es preferible. 
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/75.svg')
      .contenedor-colores-hover.bg-colores__verde.d-flex.p-5.mb-1
        p.mb-0 
          b Identificar el recipiente con un número
          |, deseablemente escrito con lápiz N.° 2 y que consigne la información necesaria en el acta de toma de muestras, la cual debe ser diligenciada completamente. 
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/76.svg')
      .contenedor-colores-hover.bg-colores__limon.d-flex.p-5.mb-5
        p.mb-0 Para asegurarse de no perder la información puede resultar mejor identificar la muestra, tanto por medio de 
          b una etiqueta o tarjeta como por una hoja de identificación de muestra.
        .contenedor-colores-hover_img.d-none.d-xl-block.d-lg-block.d-md-block: img(src='@/assets/curso/77.svg')
    p.mb-5 Para realizar el registro de campo es fundamental, tener claro el manual de procedimiento para llevar a cabo un buen muestreo.
    Separador
    #t_8_1.titulo-segundo(data-aos="fade-right")
      h2 8.1 Manual de procediendo 
    .tarjeta--container.row.mb-5(data-aos="zoom-in-up")
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/78.svg', alt='Texto que describa la imagen').m-auto
          
        h2.text-center Material para el muestreo
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Nevera portátil de icopor o plástica.
          li 
            i.fas.fa-check
            | Refrigerantes (hielo o gel refrigerante).
          li 
            i.fas.fa-check
            | Rótulo de muestras.
          li 
            i.fas.fa-check
            | Recipientes plásticos de muestreo para análisis fisicoquímicos con capacidad de 1000 a 2000 ml, con tapa hermética.
          li 
            i.fas.fa-check
            | Para análisis microbiológico se utilizarán frascos con capacidad de 250 a 300 ml, de vidrio, esterilizados, con tapa hermética y en lo posible de boca ancha. También pueden utilizarse bolsas especiales de polietileno estériles.
          li 
            i.fas.fa-check
            | Tabla de campo.
          li 
            i.fas.fa-check
            | Lapicero (bolígrafo) y marcador de tinta indeleble.
          li 
            i.fas.fa-check
            | Cinta pegante y de enmascarar.
          li 
            i.fas.fa-check
            | Toalla de papel absorbente.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/79.svg', alt='Texto que describa la imagen').m-auto
        h2.text-center Preparación del muestreo
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Preparación de los envases para la toma de muestra.
          li 
            i.fas.fa-check
            | Preparación de las hojas de cadena de custodia.

          li 
            i.fas.fa-check
            | Coordinación para el transporte de las muestras. 

          li 
            i.fas.fa-check
            | Rotular los frascos.

          li 
            i.fas.fa-check
            | Toma de muestra para análisis fisicoquímico.
    Separador
    #t_8_2.titulo-segundo(data-aos="fade-right")
      h2 8.2 Formatos
    p.mb-5 Los formatos en la toma de muestra son fundamentales, porque permiten guardar una secuencia lógica e inequívoca, como lo son: 
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4 Formato para captura de datos en campo
          p Se registra de inmediato toda la información que se obtiene en campo, las observaciones y los datos de la toma de muestra en un formato destinado para dicha actividad. En este formato se debe tener en cuenta: propósito del muestreo; localización del sitio de muestreo, datos de la medición del caudal, descripción del punto, método de muestreo, fecha y hora de recolección, identificación del (los) recolector(es), observaciones y mediciones de parámetros en campo. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2 
          h4 Formato para control y vigilancia de la muestra (cadena de custodia)
          p Se diligencia para cada una de las muestras o grupo de muestras (cadena de custodia); y se incluye: número(s) de la(s) muestra(s), nombre de quien recolecta la muestra, fecha, hora, sitio de muestreo, tipo de muestra, parámetros a analizar, información de campo y observaciones.
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({}),
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

<style lang="sass" scoped>
.contenedor-colores-hover
  transition: all .3s ease-in-out
  width: 90%
  position: relative
  min-height: 177px
  p
    transition: opacity 0.6s ease-out
    width: 90%
  &:hover
    width: 90%

  &_img
    border-radius: 50%
    box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.2)
    height: 177px
    position: absolute
    width: 177px
    top: 0
    right: 0
    transform: translateX(50%) translateY(0%)

.bg-colores
  &__naranja
    background-color: lighten(#ff9f1a, 20%)
  &__rojo
    background-color: lighten(#FF5000, 20%)
  &__fucsia
    background-color: lighten(#D71D5F, 20%)
  &__azul
    background-color: lighten(#3CA8F4, 20%)
  &__morado
    background-color: lighten(#8C86D5, 20%)
  &__verde
    background-color: lighten(#29B39D, 20%)
  &__limon
    background-color: lighten(#7AE582, 20%)
.lista-ul--color li > i:first-of-type
  color: $white
.tarjeta--container
  .tarjeta
    img
      transition: transform .3s ease-in-out
    &:hover
      figure
        img
          transform: scale(1.1)
</style>
