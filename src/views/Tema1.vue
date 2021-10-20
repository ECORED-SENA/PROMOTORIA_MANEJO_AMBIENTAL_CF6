<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Área de recolección
    p.mb-5 Son aquellos sitios donde se toma la muestra y se realiza la identificación del lugar de recolección de muestra de agua. El código de registro de muestra debe contener lo siguiente:
    .row.mb-lg-1.mb-3(data-aos="fade-right")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Código del punto de muestreo 
                | que debe ser de cuatro (4) cifras con una numeración consecutiva convenida entre la persona prestadora y la autoridad sanitaria. 
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Nombre y código de la localidad; 
                | nombre de la persona prestadora. 
    .row.mb-lg-1.mb-3(data-aos="fade-left")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Número de Identificación Tributaria
                | , Registro Único de Prestadores de Servicios.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Descripción exacta 
                | de su ubicación con base en el nombre de la instalación municipal más cercana (hospital, estadio, escuela, parque, plaza de mercado, etc.) o el nombre del componente del sistema de distribución donde se instale, o el nombre del barrio, localidad, vereda, finca.
    .row.mb-lg-1.mb-3(data-aos="fade-right")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Georreferenciación 
                | del punto de muestreo.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100.d-flex.justify-content-center
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde-claro
            .p-4
              p.m-auto 
                b Localización en el plano 
                | de la red de distribución.
    Separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1 Técnicas de adecuación del área
    p.mb-5 Para atender las áreas de recolección es importante tener en cuenta las diferentes técnicas de adecuación del área: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5.hover-tarjetas
        .row.justify-content-center.mb-4
          .col-12.d-flex
            figure.m-auto
              img(src='@/assets/curso/8.jpg', alt='Texto que describa la imagen' style='width: 305px')
        .color-texto   
          h4 Accesibilidad
          p Hace referencia al punto de muestreo que se sitúa en un lugar de fácil acceso, el cual cuenta con las vías vehiculares y peatonales adecuadas, de tal manera que se facilite obtener las muestras, transportar equipos, recipientes y materiales de muestreo. 

      .col-md.tarjeta.color-acento-botones.p-5.hover-tarjetas
        .row.justify-content-center.mb-4
          .col-12.d-flex
            figure.m-auto
              img(src='@/assets/curso/9.jpg', alt='Texto que describa la imagen' style=' width: 305px')
        .color-texto  
          h4 Representatividad
          p Es un punto de recolección de las muestras el cual se ubica a partir de las características generales del cuerpo de agua. Esto significa, que es necesario que el cuerpo de agua se encuentre totalmente mezclado en el punto donde se tomará la muestra; evaluando la turbulencia, velocidad y apariencia física del mismo para asegurar la homogeneidad de la muestra. 

      .col-md.tarjeta.color-acento-contenido.p-5.hover-tarjetas
        .row.justify-content-center.mb-4
          .col-12.d-flex
            figure.m-auto
              img(src='@/assets/curso/10.jpg', alt='Texto que describa la imagen' style=' width: 305px')
          
        h4 Seguridad
        p El punto de muestreo, sus alrededores y las condiciones meteorológicas deben garantizar la seguridad, no solo para la toma de muestra, sino para las personas que lo realizan, para que así, se evite cualquier tipo de accidente.
    Separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2 Técnicas de aseo e higiene de la toma de muestra 
    p.mb-5 Es una inspección sanitaria que se utiliza como prevención, que permite detectar los daños que afectan la salud humana. Mediante ella se puede dar cuenta del estado físico del agua, se calcula el grado de contaminación y el grado de afectación de su calidad. Las personas encargadas de tomar la muestra deben actuar de forma correcta con todas las medidas de seguridad, utilizando los equipos de protección personal y sus procedimientos de forma segura. Para llevar a cabo el muestreo se deben utilizar de manera obligatoria equipos de protección, los cuales son: overol, bata de algodón, calzado que cubra la punta del pie y suela antideslizante, casco clase G, tapa boca, guantes de látex acrilonitrilo o de PVC, lentes de seguridad con protectores superiores y laterales y lámpara de mano.
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.tarjeta--verde-claro.p-5.mb-4.d-flex
          p.w-70.h2.fw-normal.mb-0 Para la toma de la muestra es importante considerar, el lugar en el cual se encuentra la persona que la tomará, los materiales y una adecuada técnica e higienización de los instrumentos que se utilicen.
          .cajon_imagen.d-none.d-lg-block.d-md-block: img(src='@/assets/curso/11.svg', alt='Texto que describa la imagen')
      
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
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
.hover-tarjetas
  color: $color-sistema-texto !important
  figure
    width: 305px !important
    transition: transform 0.3s ease-in-out
  &:hover
    figure
      transform: scale(1.1)
.color-texto
  h4, p
    color: $color-sistema-texto !important
.cajon
  position: relative
  .cajon_imagen
    position: absolute
    bottom: 0
    right: 0
    transform-origin: right top
    transform: translateX(45%)
</style>
