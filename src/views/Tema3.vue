<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Parámetros técnicos de la toma de muestra de agua
    p.mb-5 Para conocer los parámetros técnicos, es importante iniciar con las definiciones de los tipos de muestras de aguas, entre las cuales se puede encontrar: 
    SlyderD.mb-5(:datos="datosSlyder")(data-aos="zoom-in-up")
    Separador
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Métodos de la toma de muestras de agua 
    p.mb-5 Los métodos de las tomas de muestras de agua varían de acuerdo con el tipo de muestra, tal como se relacionan a continuación:
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero.p-2
            img(src='@/assets/curso/24.svg')
          p Cuando la muestra es simple, se recomienda utilizar el método fijo y particular, en el cual se analiza la muestra en una vasija según los mecanismos que se vayan a tener en cuenta en el laboratorio.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero.p-2
            img(src='@/assets/curso/24.svg')
          p Cuando la muestra es compuesta, se utiliza el método basado en la recolección de las muestras particulares del agua a considerar en varias botellas de boca ancha, de acuerdo con el intervalo de tiempo que se escoge, estas se pueden mezclar al final del periodo o pueden combinarse en una sola botella.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero.p-2
            img(src='@/assets/curso/24.svg')
          p Cuando la muestra de agua es integrada se recomienda utilizar las mezclas de muestras de agua que indiquen distintas partes del sector sesgado en conexión al flujo relativo. Los equipos que toman las muestras de profundidad deben haber sido diseñados especialmente para ello de tal forma que se evite la contaminación con la columna superior.
    Separador
    #t_3_2.titulo-segundo(data-aos="fade-right")
      h2 3.2 Estándares de calidad para la toma de muestras de agua
    p.mb-5 Los estándares de calidad de la toma de muestra de agua se analizan desde varios puntos de vista y estos se centran en estándares de calidad en salud pública que permite su análisis en laboratorios, así: 
    h3(data-aos="fade-right") Análisis de agua para…
    .cajones-imagen.d-flex
      .cajon-azul.p-4.mb-3
        img(src='@/assets/curso/25.svg').mb-3
        h4 Consumo humano
      .cajon-azul.p-4.mb-3
        img(src='@/assets/curso/26.svg').mb-3
        h4 Estanques de piscina
      .cajon-azul.p-4.mb-3
        img(src='@/assets/curso/27.svg').mb-3
        h4 Estructuras similares
      .cajon-azul.p-4.mb-3
        img(src='@/assets/curso/28.svg').mb-3
        h4 Superficie de piscina
    p.mb-5 Al estudiar los estándares de calidad de la toma de muestras de agua se puede ver:
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.tarjeta-verde.p-5.h-100
          .tarjeta-numerada__numero.p-2
            p.h1.text-center.mb-0 A 
          img(src='@/assets/curso/29.svg' style="width: 50px").mb-4
          p Si el laboratorio está legalmente constituido, para ello se debe inspeccionar los archivos que demuestran cómo está constituido legalmente, y además verificar estas evidencias; es decir si se cuenta por ejemplo con un RUT, entonces con este se comprueba la veracidad.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.tarjeta-verde.p-5.h-100
          .tarjeta-numerada__numero.p-2
            p.h1.text-center.mb-0 B 
          img(src='@/assets/curso/29.svg' style="width: 50px").mb-4
          p Si el laboratorio cuenta con un certificado que acredite el sistema como gestión de la calidad; para ello el laboratorio debió aparecer en una revista o un diario de difusión que tenga el aval competente de una institución; en este punto usted puede solicitarles a ellos el certificado de buenas prácticas donde se demuestre la evidencia de esta. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.tarjeta-verde.p-5.h-100
          .tarjeta-numerada__numero.p-2
            p.h1.text-center.mb-0 C 
          img(src='@/assets/curso/29.svg' style="width: 50px").mb-4
          p Si el laboratorio participa en la evaluación técnica que se realiza para la compra de insumos, estándares, reactivos, materiales y equipos necesarios para su funcionamiento. Verifique que el laboratorio tenga identificados, clasificados y actualizados los posibles riesgos o acciones preventivas que se pueden presentar inclusive, los riesgos asociados a los temas técnicos, sanitarios y ambientales. 
    p.mb-5 Las tomas de muestras de agua son de tres tipos: simples, compuestas e integradas. Las primeras se analizan en forma individual, en las segundas se tiene en cuenta la homogeneización y mezcla de ellas y en las terceras se funden las primeras con las segundas en un solo método. Los estándares de calidad en salud pública para laboratorios de análisis de agua para consumo humano son de varios tipos y se debe vigilar que los laboratorios cumplan con los requisitos, que cuenten con los soportes pertinentes de cada requisito y también se debe prestar atención a la manera como se lleva a cabo la verificación de los requisitos y los soportes.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Toma de agua simple',
        texto:
          'Se adquieren teniendo en cuenta tanto el lugar como el tiempo en que se sacan las tomas para analizarlas de forma individual.',
        imagen: require('@/assets/curso/21.jpg'),
      },
      {
        titulo: 'Toma de agua compuesta  ',
        texto:
          'Se adquieren teniendo en cuenta tanto la mezcla como la homogeneización de muestras simples que han sido capturadas en un punto fijo, pero en tiempos desiguales. Para los casos en que se requiere variar el volumen en cada toma, se recolectan muestras parciales (alícuotas) ej.: cada 2 o 3 horas, cuyo volumen se obtiene según la siguiente relación:',
        imagen: require('@/assets/curso/22.jpg'),
      },
      {
        titulo: 'Toma de muestra de agua integrada',
        texto:
          'Se adquiere teniendo en cuenta la mezcla y homogeneización de muestras simples que se capturaron en varios puntos al mismo tiempo.',
        imagen: require('@/assets/curso/23.jpg'),
      },
    ],
  }),
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
.tarjeta-numerada
  border: 3px solid $color-secundario
  .tarjeta-numerada__numero
    img
      transition: transform 0.2s ease-in-out
  &:hover
    .tarjeta-numerada__numero
      img
        transform: scale(1.5)
.cajones-imagen
  justify-content: center
  flex-wrap: wrap
  .cajon-azul
    background-color: #8ACBF8
    width: 306px
    flex-grow: .5
    transition: all 0.2s ease-in-out

    img
      width: 218px
      margin: 0 auto
    h4
      text-align: center
    &:hover
      background-color: #00AEEF
      transform: scale(1.1)
      z-index: 1
.tarjeta-verde
  background-color: $color-secundario
</style>
