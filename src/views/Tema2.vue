<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de fuentes
    p.mb-5 Los tipos de fuentes que se utilizan para calcular el caudal pueden ser de agua lluvia, aguas superficiales y partes de una cuenca, tal como se podrá ver a continuación: 
    .row.mb-5.justify-content-center
      .col-xl-4.mb-5
        .tarjeta-imagen.bg-verde.h-100.mb-5
          .tarjeta-imagen__imagen: img(src='@/assets/curso/12.jpg')
          .tarjeta-imagen__contenido.p-4.text-center.m-4
            h4 Agua de lluvia
            p Se emplea cuando no es posible obtener aguas superficiales y subterráneas de buena calidad y cuando el régimen de lluvias sea considerable.
      .col-xl-4.mb-5
        .tarjeta-imagen.bg-verde.h-100.mb-5
          .tarjeta-imagen__imagen: img(src='@/assets/curso/13.jpg')
          .tarjeta-imagen__contenido.p-4.text-center.m-4
            h4 Aguas superficiales
            p Se emplean a partir de la captación de agua de lluvia, arroyos, ríos, lagos, etc., que discurren naturalmente en la superficie terrestre. Estas fuentes no son tan deseables, especialmente si existen zonas habitadas o de pastoreo animal.
      .col-xl-4.mb-5
        .tarjeta-imagen.bg-verde.h-100.mb-5
          .tarjeta-imagen__imagen: img(src='@/assets/curso/14.jpg')
          .tarjeta-imagen__contenido.p-4.text-center.m-4
            h4 Agua de cuenca
            p Se infiltra en el suelo hasta la zona de saturación, formando así las aguas subterráneas, su explotación dependerá de las características hidrológicas y de la formación geológica del acuífero. La captación de aguas subterráneas se puede realizar a través de manantiales, galerías filtrantes y pozos.
    p.mb-5 En estos tipos de fuentes se tiene incorporado el caudal, el cual se define como la cantidad de agua que pasa por una superficie en un determinado tiempo. El cálculo de caudal se determina de la siguiente forma:
    .row.justify-content-center.g-0.mb-5
      .col-lg-7
        img(src='@/assets/curso/15.jpg' )
      .col-lg-5
        .bg-amarillo.p-5.h-80.w-100.d-flex.justify-content-center.align-items-center
          h3 Q=V/t, V es volumen
              br
              |t= es el tiempo que se utiliza en su toma
              br
              |Las unidades de medida son l/s m<sup>3</sup>/s.
    p.mb-5 Además del caudal, se debe tener en cuenta los métodos del cálculo de aforo, los cuales permiten calcular el caudal en una fuente de agua para su posterior análisis, entre ellos se pueden relacionar:
    TabsD.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Método volumétrico" :icono="require('@/assets/curso/16.svg')" :icono2="require('@/assets/curso/17.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Método volumétrico
            p Es el método más exacto, porque permite que el depósito sea bastante grande y que pueda medir su capacidad de forma precisa, pues consiste en hacer llegar un caudal a un depósito impermeable cuyo volumen sea conocido, contando el tiempo total en que se llena el depósito, así se obtiene: 𝑄 = 𝑉 /t
              br
              br
              |Este método es de utilización práctica, siempre que se trate de mediciones de pequeños caudales, en trabajos experimentales o para tener una idea rápida del caudal aportado por determinado riachuelo.
        
          .col-md-5
            figure
              img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Medidor Parshall" :icono="require('@/assets/curso/16.svg')" :icono2="require('@/assets/curso/17.svg')")
        .row.g-0.align-items-end
          .col-md-6.mb-4.mb-md-0
            h4 Medidor Parshall
            p.pe-3.mb-5 Se utiliza en el aforo de canales y pequeños ríos, se recomienda para canales de riego de poca pendiente, en drenes, donde no es conveniente instalar estructuras como vertederos que alteren el régimen del escurrimiento. 
            .bg-amarillo2.p-5.h-50.w-100.d-flex.justify-content-center.align-items-center
              h3.ps-5.mb-0 𝑄 = 𝐶 × (𝐻) 𝑛 Donde: 
                br
                |Q = es el caudal expresado en m<sup>3</sup> /s 
                br
                |H = Altura de la lámina de agua 
                br
                |C y n = Son coeficientes que dependen de las dimensiones del canal.
          .col-md-5
            figure
              img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Método de vertederos y orificios" :icono="require('@/assets/curso/16.svg')" :icono2="require('@/assets/curso/17.svg')")
        .row
          .col-md-12.mb-4.mb-md-0
            h4 Método de vertederos y orificios
            p Se interpone un tabique ante una corriente con el propósito de generar una caída de agua para que pase a través de una sección predeterminada. Conociendo las características del vertedero o del orificio que se engloban en el factor (determinado experimentalmente), la sección de la lámina de agua que pasa por ellos y la velocidad teórica de caída libre. 

          .col-md-12
            .tarjeta.bg-verde-claro.p-4
              #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
                .carousel-indicators
                  button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                  button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
                  button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
                  button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
                  button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
                  button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 1')
                .carousel-inner
                  .carousel-item.active
                    .row.justify-content-center
                      .col-lg-8
                        h4 Vertedero rectangular sin contracciones  
                        p.mb-0 Es uno de los más sencillos para construir y por este motivo es uno de los más utilizados. 𝑄 = 1.84 𝐿 × 𝐻 3/2
                          br
                          br
                          b Donde: 
                          br
                          b Q = 
                          | Caudal que fluye por el vertedero, en m<sup>3</sup>/s
                          br
                          b L = 
                          | Ancho de la cresta, en m  
                          br
                          b H = 
                          | Carga del vertedero, en m 
                  .carousel-item
                    .row.justify-content-center
                      .col-lg-8
                        h4 Vertedero rectangular con dos contracciones
                        p.mb-0 𝑄 = 1.84 (𝐿 − 0.2𝐻) × 𝐻 3/2 

                          br
                          br
                          b Donde:
                          br
                          b Q = 
                          | Caudal que fluye por el vertedero, en m<sup>3</sup>/s
                          br
                          b L = 
                          | Ancho de la cresta, en m 
                          br
                          b H = 
                          | Carga del vertedero, en m
                  .carousel-item
                    .row.justify-content-center
                      .col-lg-8
                        h4 Vertedero triangular
                        p.mb-0 Permiten obtener medidas más precisas de las alturas de carga (H) correspondientes a caudales reducidos. Son construidos de placas metálicas. En la práctica únicamente se utilizan los que tienen forma isósceles, siendo los más usuales los de 90º. 𝑄 = 1.4 × 𝐻 5/2 

                          br
                          br
                          b Donde:
                          br
                          b Q = 
                          | Caudal que fluye por el vertedero, en m<sup>3</sup>/s 
                          br
                          b H = 
                          | Carga del vertedero, en m 
                  .carousel-item
                    .row.justify-content-center
                      .col-lg-8
                        h4 Vertedero trapezoidal 
                        p.mb-0 También conocido como vertedero Cipolletti. El talud será 1:4 (1 horizontal para 4 vertical). Este vertedero es de construcción más dificultosa que los dos anteriores, razón por la cual es menos utilizado.
                  .carousel-item
                    .row.justify-content-center
                      .col-lg-8
                        h4 Vertedero circular 
                        p.mb-0 Su utilización es menos común que los anteriores, presentando como ventajas: la facilidad en su construcción, así como no requerir el nivelamiento de su cresta debido a su forma geométrica. 
                          |𝑄  
                          b = 1.518 ×  
                          |𝐷  
                          b 0.693 × 
                          | 𝐻  
                          b 1.807 


                          br
                          br
                          b Donde:
                          br
                          b Q =  
                          | Caudal que fluye por el vertedero, en m<sup>3</sup>/s 
                          br
                          b D =  
                          | Diámetro del círculo, en m 
                          br
                          b H =  
                          | Carga del vertedero, en m 
                button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
                  span.carousel-control-prev-icon(aria-hidden='true')
                  span.visually-hidden Previous
                button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
                  span.carousel-control-next-icon(aria-hidden='true')
                  span.visually-hidden Next
      .py-4.py-md-5(titulo="Método de sección-velocidad" :icono="require('@/assets/curso/16.svg')" :icono2="require('@/assets/curso/17.svg')")
        .row.justyfy-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Método de sección-velocidad
            p Se determinan separadamente la sección transversal del cauce y la velocidad del agua; la sección se determina por medio de sondeos o algún otro procedimiento topográfico y la velocidad por cualquiera de los métodos con molinete, flotador o pendiente hidráulica. De tal manera que el caudal del río estará dado por: Q = A x V  
              br
              br
              b Donde:
              br
              b Q = 
              | Caudal del agua, en m<sup>3</sup>/s 
              br
              b A = 
              | Área de la sección transversal, en m<sup>2</sup>
              br
              b V = 
              | Velocidad media del agua, en m/s 
              br
              br
              | La dificultad principal es determinar la velocidad media porque varía en los diferentes puntos de la sección hidráulica.
          .col-md-4
            img(src='@/assets/curso/20.jpg')

</template>

<script>
import TabsD from '../components/TabsD.vue'
export default {
  name: 'Tema2',
  components: {
    TabsD,
  },
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
  background-color: #7AE582
.tarjeta-imagen
  overflow: hidden
  position: relative
  &:hover
    .tarjeta-imagen__imagen
      transform: translateY(0)
  .tarjeta-imagen__imagen
    min-height: 100%
    width: 100%
    transition: transform .3s ease-in-out
    position: absolute
    bottom: 0
    transform-origin: top left
    transform: translateY(-300%)
.bg-amarillo
  background-color: #FFBB00
  border-radius: 0px 300px 0px 0px
.bg-amarillo2
  background-color: #FFBB00
  border-radius: 300px 0px 0px 0px
.carousel-control-prev
  @media (max-width: $bp-max-md )
    padding: 0
    width: 32px
    height: 32px
    bottom: -40px
    top: auto
.carousel-control-next
  @media (max-width: $bp-max-md )
    padding: 0
    width: 32px
    height: 32px
    bottom: -40px
    top: auto
.carousel-control-prev-icon
  width: 32px
  height: 32px
  background-image: url(../assets/curso/prev.svg)
.carousel-control-next-icon
  width: 32px
  height: 32px


  background-image: url(../assets/curso/next.svg)

  &:active, &:focus, &:hover , &:visited , &:selected , &:link
    background-color: $white !important
.carousel-control-prev , .carousel-control-next
  transition: transform 0.3s ease-in-out

  &:hover, &:focus, &:visited, &:active,
    background-color: transparent
  &:click
    transform: scale(0.8)
  &:hover
    transform: scale(1.2)
.bg-verde-claro
  background-color: #E4FAE6
</style>
