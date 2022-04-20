<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span(style="color: white") 4
      h1 Principios y fines de la economía solidaria 
    
    .d-flex.pt-5.mb-5
      img(src="@/assets/curso/introduccion/decorador.svg" data-aos="fade-up" style="max-width: 10px").mx-3.mx-md-4.d-flex
      .text-bg-rl
        p.ps-2.ps-md-4(data-aos="fade-left") Existen ejemplos muy exitosos de organizaciones de economía solidaria y en gran parte obedece a que sus asociados cumplen a cabalidad con los valores, principios y fines de la economía solidaria, establecidos por la Ley 454 de 1998 y que confluyen en la identidad de estas organizaciones que marcan la diferencia frente a las empresas con ánimo de lucro. Sabiendo esto, a continuación, se presentan los valores de la economía solidaria.

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-1.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #AFAFAF")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #AFAFAF")
              h3 Solidaridad
              p Ayuda entre dos o más personas que padecen una necesidad o calamidad y que unen sus fuerzas para subsanar esta dificultad.

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-2.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #CCC8C8")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #CCC8C8")
              h3 Honestidad
              p Conducta intachable del ser humano en sus actuaciones sociales, laborales y culturales.
      
      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-3.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #D6D4D4")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #D6D4D4")
              h3 Transparencia
              p Actuación del ser humano con sinceridad basada en la verdad que muestra confianza y seguridad en la sociedad.

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-4.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #DFDCDC")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #DFDCDC")
              h3 Responsabilidad
              p Cualidad de la persona que se caracteriza por cumplir con sus deberes generando tranquilidad y confianza entre la gente que lo rodea. 

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-5.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #ECE8E8")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #ECE8E8")
              h3 Ayuda mutua
              p Cooperación entre dos o más personas para alcanzar el objetivo trazado.
      
      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-6.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #ECE8E8")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #ECE8E8")
              h3 Democracia
              p Forma de organización social para la toma de decisiones en un grupo, empresa o asociación.

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-7.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #DFDCDC")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #DFDCDC")
              h3 Responsabilidad social
              p Pacto con las comunidades para su desarrollo social, productivo y conservación del ecosistema.
      
      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-8.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #D6D4D4")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #D6D4D4")
              h3 Equidad
              p Reconocer a cada individuo su compensación justa y equilibrada a partir de sus condiciones y características especiales.

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-9.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #CCC8C8")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #CCC8C8")
              h3 Igualdad
              p Conceder el mismo trato sin excluir orientaciones sexuales, políticas, étnicas, religiosas, de género, limitaciones físicas o intelectuales.

      .col-sm-6.col-lg-3.mb-4.tg-flip-t-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-10.png')})`}" style="background-repeat: no-repeat; background-size: auto; background-color: #CCC8C8")
            .tarjeta-flip__contenido.p-3.p-md-4(style="background-color: #CCC8C8")
              h3 Preocupación por los demás
              p Capacidad de una persona para sentir empatía por los problemas, necesidades o dificultades de quienes lo rodean.

    .d-flex.mb-5
      img(src="@/assets/curso/introduccion/decorador.svg" data-aos="fade-up" style="max-width: 10px").mx-3.mx-md-4
      .text-bg-left
        p.ps-2.ps-md-4(data-aos="fade-left") La práctica permanente y conjunta de la identidad corporativa en la gestión de estas formas asociativas, conlleva a que los asociados apropien y apliquen estos ideales en sus actuaciones que incluso pueden trasladarlas al ámbito familiar, en donde sus familias por tradición, costumbres, ideologías o incluso oportunidades laborales construyen sistemas económicos capaces de aportar significativamente a la generación de empleo y trabajo decente, a través de formas jurídicas establecidas por la ley para el sector solidario ejecutando actividades económicas para la satisfacción de las necesidades de sus asociados y el desarrollo comunitario.

    .d-flex.mb-5.ms-0.ms-md-5
      img(src="@/assets/curso/tema4/decorador.svg" data-aos="fade-right" style="max-width: 80px").mx-3.mx-md-4
      .text-bg-right
        p.ps-2.ps-md-4(data-aos="fade-left") Ahora bien, complementan la identidad asociativa no solo los valores sino también los principios de la economía solidaria, establecidos en el artículo 4 de la misma ley, constituyéndose en las bases que enmarcan el actuar de las empresas de economía solidaria en tres ejes fundamentales como: el ser (<b>sus asociados</b>), políticas empresariales (<b>direccionamiento estratégico</b>) y el valor compartido (<b>servicio a la comunidad</b>).
    
    .d-flex.flex-wrap.flex-md-nowrap.justify-content-between.align-items-center.mb-5
      p.mb-4.mb-md-0 Los once principios regulados por la ley se exponen en la siguiente figura:
      img(src="@/assets/curso/tema2/decorador4.svg" data-aos="flip-up" style="max-width: 132px").mx-3.mx-md-4.ms-auto
    .d-flex.mb-5
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 7
    img(src="@/assets/curso/tema4/img_t_4-11.png" data-aos="zoom-in").mb-5

    img(src="@/assets/curso/tema2/decorador5.svg" data-aos="fade-left" style="max-width: 84px; transform: rotate(180deg)").mb-4.ms-auto
    .d-flex.mb-5
      img(src="@/assets/curso/tema1/img-decorador_2.svg" data-aos="fade-right" style="max-width: 36px").mx-3.mx-md-4
      .text-bg-right-full
        p.ps-2.ps-md-4(data-aos="fade-left") De tal modo, que la filosofía de esta forma jurídica empresarial se enmarca en sus valores y principios en donde prevalece el beneficio de todos sus asociados y de la comunidad y sus creencias en el bien común. Son la brújula y la guía para trazar sus objetivos estratégicos, resaltando además que está nueva forma de hacer negocios presenta un nuevo auge en la economía del país e impulsa el desarrollo económico y sostenible de los emprendimientos sociales.
    img(src="@/assets/curso/tema2/decorador5.svg" data-aos="fade-right" style="max-width: 84px")
</template>

<script>
export default {
  name: 'Tema3',
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
.text-bg-rl
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    z-index: 0
    position: absolute
    content: ''
    width: 40%
    height: 50%
    left: 0
    top: 0
    background-color: #D9E0E1
  &::before
    z-index: 0
    position: absolute
    content: ''
    width: 40%
    height: 50%
    right: 0
    bottom: 0
    background-color: #D9E0E1
.text-bg-right-full
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    z-index: 0
    position: absolute
    content: ''
    width: 40%
    height: 100%
    right: 0
    top: 0
    background-color: #BFE8EF
.text-bg-right
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    z-index: 0
    position: absolute
    content: ''
    width: 40%
    height: 100%
    right: 0
    top: 0
    background-color: #BFE8EF
.text-bg-left
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
  &::after
    z-index: 0
    position: absolute
    content: ''
    width: 40%
    height: 70%
    left: 0
    top: 0
    background-color: #CBF6F2
@media (min-width: 1400px)
  .tg-flip-t-4
    width: calc(100%/5)
</style>
