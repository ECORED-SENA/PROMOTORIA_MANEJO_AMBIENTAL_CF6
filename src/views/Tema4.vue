<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Productos químicos
    p.mb-5 Son aquellas sustancias que afectan a la salud humana y se tienen en cuenta porque afectan la calidad de la muestra de agua al tomarla. Es importante evitarlos porque implica un riesgo para el personal que los manipula, este riesgo debe ser controlado, desde el almacenamiento y transporte de la sustancia hasta el momento en el cual se materialice un accidente relacionado con ese producto. 
      br
      br
      |A continuación, se relacionan las características de este tipo de productos:
    .row.justify-content-between.my-5
      .col-lg-2.my-5
        .contenedor-flotante
          .contenedor-flotante_img.bg-primario.p-5.mb-3
            img(src='@/assets/curso/30.svg', alt='Texto que describa la imagen')
          h4.text-center Inflamabilidad
      .col-lg-2.my-5
        .contenedor-flotante
          .contenedor-flotante_img.bg-primario.p-5.mb-3
            img(src='@/assets/curso/31.svg', alt='Texto que describa la imagen')
          h4.text-center Corrosividad
      .col-lg-2.my-5
        .contenedor-flotante
          .contenedor-flotante_img.bg-primario.p-5.mb-3
            img(src='@/assets/curso/32.svg', alt='Texto que describa la imagen')
          h4.text-center Reactividad
      .col-lg-2.my-5
        .contenedor-flotante
          .contenedor-flotante_img.bg-primario.p-5.mb-3
            img(src='@/assets/curso/33.svg', alt='Texto que describa la imagen')
          h4.text-center Toxicidad
      .col-lg-2.my-5
        .contenedor-flotante
          .contenedor-flotante_img.bg-primario.p-5.mb-3
            img(src='@/assets/curso/34.svg', alt='Texto que describa la imagen')
          h4.text-center Explosivo
    p.mb-5 A continuación, se relacionan las clases de productos químicos: 
    .row.mb-3
      .col-lg-6.mb-3
        .tarjeta.tarjeta-hover.bg-amarillo-claro.p-4.mb-3.d-flex.h-100.align-items-center
          .row.align-items-center
            .col-lg-3
              .tarjeta_img
                img.img1(src='@/assets/curso/35.svg')
                img.img2(src='@/assets/curso/36.png')
            .col-lg-9
              .tarjeta_contenido 
                h4 Sólidos: 
                p.mb-0 Aquellos  que son inflamables, explosivos, que sueltan vapor, causan daños a la salud humana.
      .col-lg-6.mb-3
        .tarjeta.tarjeta-hover.bg-amarillo-claro.p-4.mb-3.d-flex.h-100.align-items-center
          .row.align-items-center
            .col-lg-3
              .tarjeta_img
                img.img1(src='@/assets/curso/37.svg')
                img.img2(src='@/assets/curso/38.png')
            .col-lg-9
              .tarjeta_contenido 
                h4 Líquidos: 
                p.mb-0 Son utilizados de manera que su absorción es muy rápida. 
    .row.my-5
      .col-lg-6.mb-3
        .tarjeta.tarjeta-hover.bg-amarillo-claro.p-4.mb-3.d-flex.h-100.align-items-center
          .row.align-items-center
            .col-lg-3
              .tarjeta_img
                img.img1(src='@/assets/curso/39.svg')
                img.img2(src='@/assets/curso/40.png')
            .col-lg-9
              .tarjeta_contenido 
                h4 Polvos:  
                p.mb-0 Son partículas pequeñas de productos que se inhalan con facilidad.
      .col-lg-6.mb-3
        .tarjeta.tarjeta-hover.bg-amarillo-claro.p-4.mb-3.d-flex.h-100.align-items-center
          .row.align-items-center
            .col-lg-3
              .tarjeta_img
                img.img1(src='@/assets/curso/41.svg')
                img.img2(src='@/assets/curso/42.png')
            .col-lg-9
              .tarjeta_contenido 
                h4 Vapores:   
                p.mb-0 Son de manejo profesional, por su composición de evaporación se hace a temperatura ambiente, causa daño a las partes y órganos del cuerpo como ojos y pies.
    Separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      h2 4.1 Hojas de seguridad de productos químicos
    .row.mb-5
      .col-lg-6.mb-3(data-aos="fade-right")
        p El manejo de diferentes sustancias químicas para el procesamiento de muestras de agua tanto en campo como en laboratorio, implica un riesgo para el personal que las manipula, este riesgo debe ser controlado, desde el almacenamiento, compra y transporte de la sustancia hasta el momento en el cual se materialice un accidente relacionado a ese producto; 
          b es por esto que debe existir un instrumento que le permita a las personas involucradas (empleados o comunidad) o al personal de asistencia médica (o de servicios de respuesta ante emergencias)
          |, saber los compuestos, el tipo de manipulación, cómo almacenarla y cómo reaccionar ante un accidente con la misma.
          br
          br
          |Ese instrumento de gestión se denomina 
          b hojas de seguridad de producto. 
          | En Colombia este es un elemento fundamental para toda la cadena de manipulación de las sustancias químicas y se convirtió en un eje estratégico para los sistemas de seguridad y salud en el trabajo en cualquier entidad (pública y privada).
      .col-lg-6.mb-3(data-aos="fade-left"): img(src='@/assets/curso/43.jpg')
      p.mb-5 La estructura de las hojas de seguridad y su uso obligatorio en la organización fue impuesta por diferentes bases normativas, en este caso es importante dirigirse y estudiar a fondo las siguientes:
      .row.mb-5
        .col-lg-12
          .tarjeta-avatar-b.mb-5.d-flex.align-items-center
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/44.svg' alt='AvatarTop')
            .tarjeta.tarjeta--verde-claro2
              .p-4
                p.mb-0 
                  b Decreto 1496 de 2018. 
                  | Por el cual se crea sistema globalmente armonizado de clasificación y etiquetado de productos químicos y se dictan otras disposiciones en materia de seguridad química.
        .col-lg-12
          .tarjeta-avatar-b.mb-5.d-flex.align-items-center
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/44.svg' alt='AvatarTop')
            .tarjeta.tarjeta--verde-claro2
              .p-4.mb-0
                p 
                  b Norma Técnica Colombiana [NTC] 4435 de 1998. 
                  | Sistema globalmente armonizado de clasificación y etiquetado de productos químicos y se dictan otras disposiciones en materia de seguridad química.
        .col-lg-12
          .tarjeta-avatar-b.mb-5.d-flex.align-items-center
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/44.svg' alt='AvatarTop')
            .tarjeta.tarjeta--verde-claro2
              .p-4.mb-0
                p 
                  b Norma Técnica Colombiana [NTC] 4532 de 1998. 
                  | Transporte de mercancías, tarjetas de emergencia para transporte de materiales, elaboración.
    p.mb-5 Estas hojas de seguridad son un instrumento que cuenta con 16 ítems o secciones, o también conocidas como Fichas De Seguridad [FDS], es importante aclarar que según el 
      b Ministerio de Trabajo en la Resolución 1486 de 2008 en el artículo 8º y 9º 
      | asigna a los fabricantes e importadores la responsabilidad de elaborar, revisar y actualizar las FDS.
      br
      br
      |Sin embargo, es responsabilidad de todos los que van a manipular estas sustancias, conocer la FDS y apropiar sus 16 ítems básicos que según la Organización de las Naciones Unidas para el Desarrollo Industrial [ONUDI], son:
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')(data-aos="zoom-in-up")
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
            .col-lg-9
              .row
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/45.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Identificación del producto.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/46.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Identificación de peligros.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/47.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Composición (información sobre los componentes).
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/48.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Primeros auxilios.
        .carousel-item
          .row.justify-content-center
            .col-lg-9
              .row
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/49.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Medidas de lucha contra incendios.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/50.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Medidas que deben tomarse en caso de vertido accidental.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/51.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Manipulación y almacenamiento.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/52.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Controles de exposición.
        .carousel-item
          .row.justify-content-center
            .col-lg-9
              .row
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/53.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Propiedades físicas y químicas.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/54.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Estabilidad y reactividad.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/55.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Información toxicológica.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/56.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Información eco toxicológica.
        .carousel-item
          .row.justify-content-center
            .col-lg-9
              .row
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/57.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Información relativa a la eliminación del producto.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/58.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Información relativa a transporte.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/59.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Información sobre la reglamentación.
                .col-lg-3
                  .cajon-azul.px-4.py-4.h-100
                    img(src='@/assets/curso/60.svg' alt='AvatarTop' style='width: 179px').m-auto.mb-3
                    h4.text-center Otras informaciones.
        
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next
    Separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      h2 4.2 Fichas técnicas
    p.mb-5 Son documentos que se necesitan para decir la composición del producto y la manera que se debe utilizar, es de carácter obligatorio que deben tener todos los productos químicos guardados en la empresa. Debe tener la ficha técnica una presentación que incluye, entre otros, los siguientes datos: 
    .row.justify-content-center
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/61.jpg' alt='AvatarTop' ).m-auto.mb-3
      .col-lg-5(data-aos="fade-left")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Cómo se llama y qué lo conforma.
          li 
            i.fas.fa-check
            | Detalles del producto, para qué se utiliza.
          li 
            i.fas.fa-check
            | Sus propiedades físicas y químicas: olor, color, estado, pH, entre otros.
          li 
            i.fas.fa-check
            | Manera de mostrar el producto.
          li 
            i.fas.fa-check
            | Característica como congelación / ebullición / afinidad.
          li 
            i.fas.fa-check
            | Manera de utilizar y aplicar la dosis.
          li 
            i.fas.fa-check
            | Fecha en que se revisa.
    Separador
    #t_4_3.titulo-segundo(data-aos="fade-right")
      h2 4.3 Técnicas de almacenamiento
    p.mb-5 Se utilizan recipientes de plástico o vidrio según el parámetro requerido en la adición de reactivos. Se debe hacer una fijación de la muestra, control de pH, filtro, conservación, refrigeración entre 5⁰C y 3⁰C. Debido a que el agua potable es utilizada para el consumo. Los muestreos se hacen bajo estrictas medidas de seguridad para evitar la contaminación con microorganismos, debido a eso se hacen necesarias herramientas especiales en términos de envases con inhibidores bacterianos, técnicas de muestreo y preservantes para garantizar la calidad de la muestra, alistamiento de envases, reactivos y preservantes para la toma de muestras de agua potable.
      br
      br
      |Bien sea para actividades de control o vigilancia, una vez definido el tipo de muestreo, antes de iniciar las actividades se debe alistar el material requerido dentro de este:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Recipientes
              p Se utiliza vidrio o plástico dependiendo de los análisis a realizar. De manera previa, deben ser pasados por acciones de limpieza y desinfección que sean requeridos de acuerdo con el plan de muestreo.
            .col-md-6
              figure
                img(src='@/assets/curso/62.jpg', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/63.svg', alt='Texto que describa la imagen')
            .col-md-6
              h3 Rótulo
              p Deberá estar bien asegurado al frasco y ser fácilmente distinguible de los demás.
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Recipiente preservantes
              p Ir en neveras con hielo o geles, de tal manera que se garantice una conservación adecuada. Una manera práctica para el transporte del hielo puede ser en recipientes plásticos que eviten filtraciones (INS, 2011, p. 46).
            .col-md-6
              figure
                img(src='@/assets/curso/64.jpg', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/65.jpg', alt='Texto que describa la imagen')
            .col-md-6
              h3 Escoger la sustancia preservante
              p Cuando se requiera su uso se debe determinar de acuerdo con los parámetros a medir el tipo de preservación la cual puede ser por acidificación a pH < 2, alcalinización a pH > 11, enfriamiento entre 2° a 5 °, congelamiento a -20°, entre otros.
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Neveras o elementos de transporte y preservación 
              p Las neveras portátiles deberán mantenerse a la sombra para permitir una mayor conservación de la temperatura. El enfriamiento simple (en hielo o en un refrigerador a 4°C) y el almacenamiento de la muestra en la oscuridad es, en la mayoría de los casos, suficiente para preservar la muestra durante el transporte al laboratorio y durante un período de tiempo relativamente corto antes del análisis (INS, 2011, p. 46).
            .col-md-6
              figure
                img(src='@/assets/curso/66.jpg', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/67.jpg', alt='Texto que describa la imagen')
            .col-md-6
              h3 Alistamiento de equipos
              p Siempre realizar el alistamiento con la debida calibración de los equipos cuando sea necesario, dentro de estos se encuentra el cronómetro, recipientes aforados, termómetros y equipos de campo para parámetros in situ.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Elementos de seguridad
              p Alistamiento del equipo de protección personal requerido.
            .col-md-6
              figure
                img(src='@/assets/curso/68.jpg', alt='Texto que describa la imagen')













</template>

<script>
export default {
  name: 'Tema4',
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
.contenedor-flotante
  .contenedor-flotante_img
    position: relative
    img
      animation: float 4s ease-in-out infinite
      position: absolute
      width: 100%
      bottom: 0
      left: 0
      transform: translateX
      @media (max-width: $bp-max-md)
        position: static
        margin: 0 auto
        width: 50%


@keyframes float

  0%
    transform: translateY(0)
  50%
    transform: translateY(-10px)
  100%
    transform: translateY(0)

.bg-primario
  background-color: $color-primario
.bg-amarillo-claro
  background-color: #FFEAB2
.tarjeta-hover

  &:hover
    .tarjeta_img
      .img2
        opacity: 1
  .tarjeta_img
    img
    max-width: 161px
    margin: 0 auto
    overflow: hidden
    position: relative
    .img2
      transition: opacity .2s ease-in-out
      position: absolute
      top: 0
      left: 0
      opacity: 0
.tarjeta-avatar-b__img
  max-width: 141px
  min-width: 141px


//-- BOTONES SLYDER --//
.carousel-control-prev-icon
  background-image: url(../assets/curso/prev2.svg)
.carousel-control-next-icon
  background-image: url(../assets/curso/next2.svg)
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


.cajon-azul
  background-color: #9CD3F9
</style>
