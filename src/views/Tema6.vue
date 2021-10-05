<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Identificación de la muestra y embalaje 
    p.mb-5 Es fundamental la identificación de la muestra, porque esto permite reconocer los tipos de muestreo, técnicas de muestreo, forma de identificar la muestra, embalaje y uso de esta. Para identificar la muestra se debe tener en cuenta lo siguiente:
    .row.my-5(data-aos="zoom-in-up")
      .col-md-6.col-xl.my-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.bg-verde.px-3.py-3.h-100
          .tarjeta-numerada__numero
            .h1.mb-0.text-center 1
            img.px-3(src='@/assets/curso/69.svg' alt='AvatarTop').m-auto
          br
          p.mt-5 Colocar el lugar donde se tomó la muestra, la dirección, el punto donde se tomó, nombre completo de la persona que tomó la muestra, la fecha de toma y el análisis indicado.
      .col-md-6.col-xl.my-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.bg-verde.px-3.py-3.h-100
          .tarjeta-numerada__numero
            .h1.mb-0.text-center 2
            img.px-3(src='@/assets/curso/69.svg' alt='AvatarTop').m-auto
          br
          p.mt-5 Marcar o rotular, la marca de una vasija que contenga una muestra debe realizarse muy clara, con un marcador perdurable de modo tal que el laboratorio identifique ésta correctamente, sin que queden dudas sobre la información suministrada (evitar que la letra se corra o borre debido a la mala calidad del marcador).
      .col-md-6.col-xl.my-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.bg-verde.px-3.py-3.h-100
          .tarjeta-numerada__numero
            .h1.mb-0.text-center 3
            img.px-3(src='@/assets/curso/69.svg' alt='AvatarTop').m-auto
          br
          p.mt-5 Etiquetar detalladamente los procesos que se emplearon para la recolección de la muestra, en el mismo instante en que se toma la muestra. La etiqueta con la información pertinente se pega a la vasija que contiene la muestra, advirtiendo aquí que la información podría perderse en caso de transporte de las muestras refrigeradas.
      .col-md-6.col-xl.my-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.bg-verde.px-3.py-3.h-100
          .tarjeta-numerada__numero
            .h1.mb-0.text-center 4
            img.px-3(src='@/assets/curso/69.svg' alt='AvatarTop').m-auto
          br
          p.mt-5 Identificar la vasija  con un número, usando un lápiz Mirado # 2. Después de escribir los datos en un formato indicado se coloca este en la parte externa de la nevera de icopor.
    p.mb-5 Además de tener en cuenta la identificación de la muestra, se debe establecer el proceso para el embalaje, el cual se puede realizar en una caja o cualquier envoltura con que se protege la toma de la muestra que se lleva al laboratorio, las muestras deben tener un excelente embalaje para que lleguen al laboratorio congeladas conservado su estado original.
      br
      br
      |Es muy importante cuando se toma una muestra, que la persona que la lleva a cabo esté bien documentada sobre todos los procedimientos que se deben seguir al tomar la muestra. Debe saber que, la marca o rótulo, etiqueta y lugar, son aspectos importantes porque permite su identificación al realizar su análisis en el laboratorio; existen unos formatos especiales donde se debe registrar la información solicitada.
</template>

<script>
export default {
  name: 'Tema6',
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
.bg-verde
  background-color: #A9E1D8 !important
  border: none
.tarjeta-numerada
  .tarjeta-numerada__numero
    img
      transition: visibility 0.1s ease-in-out
      display: none
    .h1
      font-size: 60px
      color: $color-sistema-texto !important
  &:hover
    .tarjeta-numerada__numero
      .h1

        visibility: hidden
        display: none
      img
        display: block
.tarjeta-numerada__numero
    border-radius: 60px
    width: 114px
    height: 114px
    display: inline-block
    position: absolute
    left: 30% !important
    top: -15%  !important
.tarjeta-numerada
  margin-left: -7px
</style>
