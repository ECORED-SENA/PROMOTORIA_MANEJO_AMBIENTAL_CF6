<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        p.h2.fw-normal  En el presente componente se desarrollan las técnicas para realizar un plan de toma de muestras, siguiendo los procedimientos adecuados para garantizar un buen resultado de la muestra para ser analizada en el laboratorio. Para lograr esto se seguirán los procesos teniendo en cuenta el protocolo del plan de muestreo con sus pasos; por ello, se verán los conceptos básicos como técnicas de recolección, tipos de fuente, parámetros de recolección, entre otros.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/1.jpg')
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
.bg-img
  background-image: url(../assets/curso/bg-introduccion.svg)
  background-repeat: no-repeat
  background-position: bottom
  background-size: auto
</style>
