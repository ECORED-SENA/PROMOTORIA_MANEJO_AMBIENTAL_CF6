<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.bg-img.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Georreferenciación del sitio de muestreo 
    p.mb-5 La georreferenciación de un punto de muestreo es la localización de las coordenadas geográficas del lugar que se va a muestrear es importante porque define la ubicación exacta en el punto de muestreo; esta es tomada con el GPS. Los puntos de muestreo seleccionados deben identificarse en el registro respectivo con los siguientes datos en su orden, así:
    .row.justify-content-center
      .col-lg-5
        PasosA.color-acento-contenido.mb-5(tipo="n")
          div
            p Código del punto de muestreo que debe ser de cuatro (4) cifras con una numeración consecutiva convenida entre la persona prestadora y la autoridad sanitaria y que no necesariamente representa el orden de toma de muestras.
          div
            p Nombre y código de la localidad, del municipio y del departamento según el Departamento Administrativo Nacional de Estadística – DANE.
          div
            p Nombre de la persona prestadora.
          div
            p Número de Identificación Tributaria – NIT de la persona prestadora.
          div
            p Constancia Registro Único de Prestadores de Servicios - RUPS y fecha de registro ante la Superintendencia de Servicios Públicos Domiciliarios.
          div
            p Descripción exacta de su ubicación con base en el nombre de la instalación municipal más cercana (hospital, estadio, escuela, parque, plaza de mercado, etc.) o el nombre del componente del sistema de distribución donde se instale, o el nombre del barrio, localidad, vereda, finca.
          div
            p Georreferenciación del punto de muestreo.
          div
            p Localización en el plano de la red de distribución.

          
</template>

<script>
export default {
  name: 'Tema9',
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
.bg-img
  background-image: url(../assets/curso/bg-introduccion.svg)
  background-repeat: no-repeat
  background-position: bottom
  background-size: auto
</style>
