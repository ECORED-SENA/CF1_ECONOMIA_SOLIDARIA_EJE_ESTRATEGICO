<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: white")
      h1 Introducción
    
    .container-text-img
      img(src="@/assets/curso/introduccion/decorador.svg" data-aos="fade-right")
      p(data-aos="fade-left") Tradicionalmente se habla que la economía está organizada en tres sectores básicos, reconocidos como, el sector primario o agrícola, dedicado principalmente a la extracción de los recursos naturales; el secundario o sector industrial que transforma la materia prima en productos terminados y por último, el sector terciario dedicado a la prestación de servicios; estos sectores al mismo tiempo se clasifican en subsectores de acuerdo con las diversas actividades económicas que desarrolla una empresa, indistintamente de su tamaño y clasificación empresarial.

    .container-img-text-2img_1.mb-5
      img(src="@/assets/curso/introduccion/img_1.png" style="max-width: 430px" data-aos="zoom-in")
      p(data-aos="fade-left") Esta clasificación empresarial para las organizaciones de economía solidaria está regulada por el marco conceptual determinado por la Ley 454 de 1998 y se conoce como el sector solidario que agrupa las organizaciones de carácter asociativo y solidario sin ánimo de lucro, orientadas a satisfacer las necesidades humanas y soportadas bajo el principio de la solidaridad.
    
    .d-flex.ps-0.ps-md-4.mb-5(data-aos="fade-up")
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.mb-0 Sabiendo lo anterior, el siguiente video presenta qué es una organización de economía solidaria en Colombia y lo que se desarrollará en el presente componente:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IO9IGwTniw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-text-img
  position: relative
  display: flex
  &::after
    content: ''
    position: absolute
    width: 25%
    height: 63px
    top: 0
    left: 0
    background-color: #DDF6C0
    z-index: 0
  img
    max-width: 10px
    margin-right: 2rem
    margin-left: 2rem
    z-index: 1
  p
    z-index: 1
.container-img-text-2img_1
  display: flex
  align-items: flex-end
  position: relative
  &::after
    content: ''
    position: absolute
    width: 25%
    height: 63px
    bottom: 0
    right: 0
    background-color: #DDF6C0
    z-index: 0
  img
    margin-left: 5rem
    z-index: 1
  p
    margin-bottom: 2rem
    z-index: 1
@media (max-width: 768px)
  .container-text-img
    align-items: flex-start
    &::after
      width: 80%
      height: 63px
    img
      margin-left: 1rem
      margin-right: 1rem
  .container-img-text-2img_1
    flex-wrap: wrap
    &::after
      width: 80%
    img
      margin-left: 0
      margin-bottom: 2rem
</style>
