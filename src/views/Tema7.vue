<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Transporte de la muestra 
    .row.mb-5 
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/70.svg')
      .col-lg-6(data-aos="fade-left")
        p.h1.fw-normal.mb-0 El transporte es aquel que permite llevar la muestra desde el sitio donde se toma hasta el laboratorio para su análisis; puede ser terrestre, aéreo y acuático y para su utilización se debe tener en cuenta diferentes protocolos para un correcto resultado, como lo son: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qMUESsR2-ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Transporte de la muestra
</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass" scoped></style>
