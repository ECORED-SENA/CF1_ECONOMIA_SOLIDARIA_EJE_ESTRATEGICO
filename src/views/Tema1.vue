<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span(style="color: white") 1
      h1 Organizaciones de economía solidaria en Colombia y sectores económicos

    .container-img-text-decorador.mb-5
      img(src="@/assets/curso/tema1/img-decorador_2.svg" style="width: 39px" data-aos="zoom-in").mx-3.mx-md-4
      p(data-aos="fade-left") En Colombia, aunque existe una clara reglamentación del sector solidario desde el año 1998, es una forma de hacer empresa poco explorada en los últimos años; sin embargo, con la Ley 2069 de 2020, ley que impulsa el emprendimiento, promueve en su artículo 23 de conformidad con lo establecido por los artículos 4° de la Ley 79 de 1988 y 6° de la Ley 454 de 1988, que las cooperativas y demás entidades de la economía solidaria son empresas; de tal manera, que las organizaciones de economía solidaria serán a partir de la denominada ley clasificadas como Mipymes, en cumplimiento de los parámetros establecidos para su constitución y funcionamiento.

    .d-flex
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 1
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Importancia de ser Mipymes</em>
      img(src="@/assets/curso/introduccion/decorador.svg" style="max-width: 10px; transform: rotate(-90deg) translateY(-100%); position: absolute; top: -30px; right: 0")
    
    .d-flex.flex-wrap.mb-5
      img(src="@/assets/curso/tema1/img_t_1-4.png").col-12.col-md-6.mb-5.mb-md-0
      .col-12.col-md-6.d-flex.ps-0.ps-md-5.mb-0.mb-md-5
        div(style="border: 5px solid #A6E65A; border-radius: 26px").w-100.d-flex.p-4.p-md-5.d-flex.align-items-center
          p.mb-0(data-aos="fade-up") Con esta clasificación como Mipymes para las organizaciones de economía solidaria, es una gran oportunidad para fomentar la creación de empresas sin ánimo de lucro que propendan por el desarrollo integral de sus asociados, de la comunidad y del medio ambiente a través de líneas de negocio sostenibles y amigables con el ecosistema, basadas en principios de solidaridad, cooperación, trabajo colectivo y apoyo mutuo.
      .col-12(style="background-color: #08EDDA; border-radius: 13px").d-flex.flex-wrap.mt-3
        .container-select
          p.fw-bold.select-dot Principios
        .container-select
          p.fw-bold Solidaridad
        .container-select
          p.fw-bold Cooperación
        .container-select
          p.fw-bold Trabajo colectivo
        .container-select
          p.fw-bold Apoyo mutuo

    p.mb-5.col-12.col-md-10 Ahora bien, dada su importancia en la clasificación, se hace necesario conocer la dinámica de los sectores económicos en los que entrará a desarrollarse.

    .container-text-decorador_t_1.mb-5
      img(src="@/assets/curso/tema1/decorador_1.svg" style="width: 10px" data-aos="fade-up").mx-3.mx-md-4
      p.mb-0(data-aos="fade-left") En el contexto internacional, el impulso económico de los países considerados como potencias mundiales a través de sus industrias a gran escala teje un sinnúmero de bienes y servicios que impactan positivamente en los países en vía de desarrollo, que en ocasiones se convierten en proveedores con las materias primas propias de sus riquezas naturales, conduciéndolos a que cada vez se logre un crecimiento económico sostenible representado en la generación de empleo; tal como lo representa la siguiente figura.

    .d-flex
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 2
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Dinámica de sectores económicos</em>
    
    img(src="@/assets/curso/tema1/img_t_1-1.png" data-aos="zoom-in").mb-5

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.col-12.col-md-10.mx-auto.mb-5(style="background-color: #32D9CB")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_t_1-2.png')})`}"
        data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-left") En una mirada global, los Objetivos de Desarrollo Sostenible, O.D.S., definidos por la Organización de Naciones Unidas, O.N.U., (Organización de las Naciones Unidas, s.f.), determinan en su objetivo N.8, “Promover el crecimiento económico inclusivo y sostenible, el empleo y trabajo decente para todos”. De tal manera, que las empresas con la extracción, producción, transformación, comercialización de bienes y prestación de servicios contribuyen significativamente al desarrollo económico de los pueblos y por consiguiente al empleo y trabajo decente para los ciudadanos. 

    .container-img-text.mb-5
      img(src="@/assets/curso/tema1/decorador2.svg" style="max-width: 36px" data-aos="fade-right").me-4
      p(data-aos="fade-left") Es así, como los sectores económicos potencian la riqueza de un país, donde a partir de su clasificación en las diversas actividades económicas, se identifican claramente los bienes y servicios que aportan sustancialmente al producto interno bruto. La siguiente figura expone la clasificación de los sectores económicos: 
    
    .d-flex
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 3
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Clasificación de sectores económicos</em>
    
    p.mx-auto.fw-bold.text-center(style="font-size: 32px") Sectores económicos
    img(src="@/assets/curso/tema1/img_t_1-3.png" data-aos="fade-up").mb-5.d-none.d-md-flex
    img(src="@/assets/curso/tema1/img_t_1-3-movil-1.png" style="max-width: 434px" data-aos="fade-right").d-flex.d-md-none.mb-5
    img(src="@/assets/curso/tema1/img_t_1-3-movil-2.png" style="max-width: 434px" data-aos="fade-left").d-flex.d-md-none.mb-5
    img(src="@/assets/curso/tema1/img_t_1-3-movil-3.png" style="max-width: 434px" data-aos="fade-right").d-flex.d-md-none.mb-5
  
    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-4
      img(src='@/assets/curso/introduccion/decorador.svg' data-aos="fade-up" style="max-width: 10px").d-none.d-md-flex.mx-4.mb-5
      .bloque-texto-f.color-secundario.pt-4.px-5.bloque-texto-comillas
        .bloque-texto-f__comillas
          i.fas.fa-quote-left(style="color: #CF20CD")
          i.fas.fa-quote-right(style="color: #CF20CD")
        h4.text-regular.bloque-texto-f__texto(data-aos="fade-up") En consecuencia, el comportamiento de los sectores económicos, a través de la oferta de bienes y servicios en el mercado, busca satisfacer las necesidades humanas fisiológicas, de seguridad, sociales, de aprecio y de autorrealización, definidas por Abraham Maslow y reconocidas como la pirámide de necesidades (Mc Graw Hill, 2019). Es así, como el ser humano al subir de nivel en la pirámide determinan estas necesidades como ilimitadas y queriendo satisfacerlas conducen a las empresas a generar propuestas de valor innovadoras direccionándolas a proponer portafolios de productos y servicios integrales con mayores beneficios y atributos para el cliente.
        .bloque-texto-f__avatar
          .bloque-texto-f__avatar__img
            img(src='@/assets/curso/tema1/img-autor.svg' data-aos="zoom-in")
      img(src='@/assets/curso/tema1/decorador3.svg' data-aos="flip-right" style="max-width: 39px").d-none.d-md-flex.mx-4.mb-5
    .d-flex.justify-content-end.position-relative.mb-5.mx-0.mx-md-4(data-aos="fade-left")
      img(src='@/assets/curso/introduccion/decorador.svg' style="max-width: 39px; width: 10px; transform: rotate(-90deg) translate(-100%, 100%); position: absolute; left: 0; top: -47px")
      div(style="width: 40%; background-color: #A4FDF6; height: 10px;")
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

<style lang="sass">
.container-img-text-decorador
  position: relative
  display: flex
  &::before
    position: absolute
    content: url("../assets/curso/tema1/decorador.svg")
    bottom: 0
    right: 0
  &::after
    content: ''
    position: absolute
    width: 25%
    height: 63px
    top: 0
    left: 0
    background-color: #DDF6C0
    z-index: 0
  p
    z-index: 1
  img
    z-index: 1
.container-text-decorador_t_1
  display: flex
  position: relative
  &::before
    content: ''
    position: absolute
    width: 30%
    height: 10px
    background-color: #F2FCE7
    bottom: 0
    right: 0
  p
    z-index: 1
.container-img-text
  display: flex
  align-items: center
  position: relative
  &::before
    content: ''
    position: absolute
    width: 30%
    height: 80%
    background-color: #DDF6C0
    bottom: 0
    right: 0
  p
    z-index: 1
.bloque-texto-comillas
  &::before
    background-color: #A4FDF6 !important
.container-select
  width: calc( 100%/5)
  text-align: center
  padding-top: .7rem
  padding-bottom: .7rem
  padding-right: .5rem
  padding-left: .5rem
  p
    padding: .3rem 2rem
    border-radius: 10px
    margin-bottom: 0
    background-color: white
  .select-dot
    background-color: transparent
@media (max-width: 768px)
  .container-select
    width: 100%
</style>
