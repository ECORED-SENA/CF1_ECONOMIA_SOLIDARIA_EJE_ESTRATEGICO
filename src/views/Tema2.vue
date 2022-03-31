<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span(style="color: white") 2
      h1 Sector solidario y su clasificación

    .d-flex.justify-content-between.align-items-center.mb-5
      img(src="@/assets/curso/tema2/decorador1.svg" style="max-width: 36px" data-aos="fade-right")
      p.mb-0.ps-3 El sector solidario en Colombia, como lo afirma Dávila Ladrón de Guevara, R. (s.f.): 
      img.d-none.d-lg-flex(src="@/assets/curso/tema2/decorador_large_1.svg" style="max-width: 536px" data-aos="fade-left")
    
    .bloque-texto-c.bloque-texto_t_2.p-4.col-12.col-md-9.mx-auto(style="background-color: #B6F8F2").mb-5
      i.fas.fa-quote-right(style="color: white")
      p.py-3.px-5(data-aos="fade-up") Se remonta desde mediados del <b>siglo XIX</b>, donde se crean las primeras asociaciones mutuales cuyo origen fue solucionar las necesidades sociales, a partir del año 1931 con La ley 132, que hace referencia a la promoción y fomento de las cooperativas de producción y consumo, se registra la primera normativa que regula el sector.  

    .d-flex
      img(src="@/assets/curso/tema2/decorador2.svg" style="max-width: 36px" data-aos="fade-right").me-3.me-md-5
      p(data-aos="fade-left") A partir de esta ley nacen otras que buscan promover y fortalecer el sector solidario, entre las que se encuentra la Ley 454 de 1998, que establece el marco conceptual que regula la economía solidaria en Colombia. 

    .d-flex.ps-0.ps-md-5.ms-0.ms-md-4.justify-content-between.mb-5
      p.ps-3(data-aos="fade-right") Esta Ley 454 de 1998, en su artículo 2, define la economía solidaria como:
      img.d-none.d-lg-flex(src="@/assets/curso/tema2/decorador_large_2.svg" data-aos="fade-left" style="max-width: 536px")
    
    .bloque-texto-c.bloque-texto_t_2.p-4.col-12.col-md-9.mx-auto(style="background-color: #CBF09F").mb-5
      i.fas.fa-quote-right(style="color: white")
      p.py-3.px-5(data-aos="fade-up") El sistema socioeconómico, cultural y ambiental conformado por el conjunto de fuerzas sociales organizadas en formas asociativas identificadas por prácticas autogestionarias solidarias, democráticas y humanistas, sin ánimo de lucro para el desarrollo integral del ser humano como sujeto, actor y fin de la economía.
    
    .container-bg-color.mb-5
      p.mb-0.py-2(data-aos="fade-right") Con esta normativa se genera un aporte sustancial a la estructura conceptual, ideológica y de funcionamiento de este sistema socioeconómico como una alternativa de asociatividad empresarial.
      img.d-none.d-lg-flex(src="@/assets/curso/tema2/decorador_large_3.svg" data-aos="fade-left" style="max-width: 272px")

    .d-flex.mb-5
      img(src="@/assets/curso/tema2/decorador3.svg" data-aos="fade-right" style="max-width: 36px").me-3.me-md-5
      .text-decorator_t_2(data-aos="fade-left")
        p.mb-0 Así mismo, los fines de la economía solidaria se asimilan en el mundo empresarial como los propósitos fijados en el direccionamiento estratégico de estas organizaciones que afianzan una vez más esta filosofía corporativa que enaltece, diferencia y aporta un ingrediente diferenciador frente a otro tipo de formas jurídicas empresariales, que sin duda potencian y avivan esta alternativa sostenible y sustentable de hacer negocios; estos fines establecidos en la Ley 454 de 1998 en su artículo 5, son los siguientes: 
    
    .d-flex
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 4
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Fines de la Ley 454 de 1998</em>
    
    img(src="@/assets/curso/tema2/img-1.png" data-aos="zoom-in").mb-5
  
    .d-flex.col-12.col-md-11.align-items-center.mb-4
      img(src="@/assets/curso/introduccion/decorador.svg" data-aos="fade-up" style="max-width: 10px").mx-3.mx-md-4
      .text-bg(data-aos="fade-left")
        p Con la identificación de los fines, seguramente se logra reconocer que en el sector solidario prevalecen los intereses comunes sobre el interés particular y de ahí que estos se convierten en una característica fundamental para las empresas sin ánimo de lucro. 
    .text-bg-right.col-12.col-md-10.ms-auto.mb-5(data-aos="fade-right")
      p(data-aos="fade-right") Por consiguiente, el marco conceptual establecido por la norma y los fines del sector solidario en Colombia agrupan las organizaciones de carácter asociativo y solidario, sin ánimo de lucro, orientadas a desarrollar acciones en beneficio del bien común, la satisfacción de las necesidades humanas y el desarrollo integral de sus asociados.

    .d-flex.flex-wrap.flex-md-nowrap.mb-5
      p.order-2.order-md-1.pe-4(data-aos="fade-right") Las organizaciones solidarias se agrupan en dos grandes grupos: el de las organizaciones de economía solidaria y el de las organizaciones solidarias de desarrollo. En el siguiente recurso podrá profundizar su conocimiento sobre cada una de ellas:
      img.order-1.order-md-2.mb-3(src="@/assets/curso/tema2/decorador4.svg" data-aos="flip-up" style="max-width: 132px")
    .d-flex.flex-wrap.justify-content-center.mb-5.mb-md-0
      div.indicador__container
        .indicador--click(v-if="mostrarIndicador")
        img(src="@/assets/curso/tema2/img-modal-1.png" style="max-width: 302px" @click="modal1 = true" @mouseover="mostrarIndicador = false").me-0.ms-md-3.me-lg-5.img-modal
      img(src="@/assets/curso/tema2/img-modal-2.png" style="max-width: 302px" @click="modal2 = true").ms-0.ms-md-3.ms-lg-5.img-modal
    .d-flex.justify-content-between
      img(src="@/assets/curso/tema2/decorador5.svg" style="max-width: 84px" data-aos="fade-right")
      img(src="@/assets/curso/tema2/decorador6.svg" style="max-width: 84px" data-aos="fade-left")
    
    ModalA(:abrir-modal.sync="modal2").modal_t_2-1
      .container-modal(style="border-color: #A6E65A")
        .title-modal(style="background-color: #A6E65A")
          p.fw-bold Organizaciones de <br> economía solidaria
        .content-modal.px-3.px-md-5
          p.mb-4 La Unidad Administrativa Especial de Organizaciones Solidarias del gobierno colombiano, las define como aquellas formas del emprendimiento solidario sin ánimo de lucro, que, empleando bienes y servicios privados y gubernamentales, construyen y prestan bienes y servicios para el beneficio social. 
            br
            br
            sapn.fw-bold Su característica principal es ejercer la solidaridad de adentro hacia afuera, dirigiendo su accionar a terceros, comunidades y la sociedad, prevaleciendo el espíritu altruista de sus miembros.
          p Formas jurídicas de las organizaciones solidarias de desarrollo:
          .d-flex.flex-wrap
            .col-12.col-md-4
              p - Fundaciones	<br>
                |- Corporaciones y asociaciones <br>
                |- Acción comunal
            .col-12.col-md-4
              p - Voluntariado <br>
                |- Organizaciones de voluntariado <br>
                |- Entidades con acción voluntaria
            p.px-3.px-md-5.py-3.py-md-4(style="background-color: #A6E65A") Es importante resaltar que tanto para las organizaciones de economía solidaria como para las organizaciones solidarias de desarrollo existe una normativa que reglamenta los requisitos para su constitución y funcionamiento de este tipo de entidades, así como las instituciones que ejercen su inspección, vigilancia y control
    ModalA(:abrir-modal.sync="modal1").modal_t_2-1
      .container-modal
        .title-modal
          p.fw-bold Organizaciones de <br> economía solidaria
        .content-modal.px-3.px-md-5
          p.mb-4 La Unidad Administrativa Especial de Organizaciones Solidarias del gobierno colombiano, las define como aquellas que contemplan en su objeto social la realización de una actividad socioeconómica para satisfacer las necesidades de sus asociados y el desarrollo de obras de servicio comunitario. 
            br
            br
            | Así mismo, la ley 454 de 1998, en su artículo 6, establece como características de las organizaciones de economía solidaria, las siguientes
          .content-dots-step
            .item-dots-step.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 1 ? 'dot-select-modal' : ''" @click="dotSelectModal = 1") 1
            .item-dots-step.indicador__container.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 2 ? 'dot-select-modal' : ''" @mouseover="mostrarIndicadorModal = false" @click="dotSelectModal = 2") 2
              .indicador--click(v-if="mostrarIndicadorModal")
            .item-dots-step.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 3 ? 'dot-select-modal' : ''" @click="dotSelectModal = 3") 3
            .item-dots-step.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 4 ? 'dot-select-modal' : ''" @click="dotSelectModal = 4") 4
            .item-dots-step.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 5 ? 'dot-select-modal' : ''" @click="dotSelectModal = 5") 5
            .item-dots-step.me-3.me-md-4.mb-3.mb-md-0(:class="dotSelectModal == 6 ? 'dot-select-modal' : ''" @click="dotSelectModal = 6") 6
          .data-dot-select.p-4.p-md-5.col-12.col-md-7.mx-auto
            p.mb-0(v-if="dotSelectModal == 1") Estar organizadas como empresa que contemple en su objeto social, el ejercicio de una actividad socioeconómica, tendiente a satisfacer necesidades de sus asociados y el desarrollo de obras de servicio comunitario.
            p.mb-0(v-if="dotSelectModal == 2") Tener establecido un vínculo asociativo, fundado en los principios y fines contemplados en la presente Ley
            p.mb-0(v-if="dotSelectModal == 3") Tener incluido en sus estatutos o reglas básicas de funcionamiento la ausencia de ánimo de lucro, movida por la solidaridad, el servicio social o comunitario.
            p.mb-0(v-if="dotSelectModal == 4") Garantizar la igualdad de derechos y obligaciones de sus miembros sin consideración a sus aportes.
            p.mb-0(v-if="dotSelectModal == 5") Establecer en sus estatutos un monto mínimo de aportes sociales no reducibles, debidamente pagados durante su existencia.
            p.mb-0(v-if="dotSelectModal == 6") Integrarse social y económicamente, sin perjuicio de sus vínculos con otras entidades sin ánimo de lucro que tengan por fin promover el desarrollo integral del ser humano.
          p Sus formas jurídicas se clasifican en:
          .d-flex.flex-wrap
            .col-12.col-md-4
              p - Cooperativas especializadas <br>
                |- Cooperativas integrales <br>
                |- Cooperativas multiactivas
            .col-12.col-md-4
              p - Precooperativas <br>
                |- Cooperativas de trabajo asociado <br>
                |- Fondos de empleados <br>
            .col-12.col-md-4
              p - Asociaciones mutuales <br>
                | -Entidades auxiliares de la economía solidaria
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    mostrarIndicador: true,
    mostrarIndicadorModal: true,
    dotSelectModal: 1,
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
.bloque-texto_t_2
  &::after
    background-color: white !important
.container-bg-color
  position: relative
  display: flex
  p
    position: relative
    z-index: 1
  &::before
    content: ''
    position: absolute
    background-color: #CBF09F
    width: 40%
    height: 100%
    top: 0
    left: 0
    z-index: 0
.text-decorator_t_2
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    content: ''
    position: absolute
    background-color: #CBF09F
    bottom: 0
    right: 0
    z-index: 0
    width: 30%
    height: 60%
.text-bg
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
    padding-top: 1rem
    margin-bottom: 1rem
    padding-left: 1rem
  &::after
    content: ''
    position: absolute
    background-color: #D9E0E1
    top: 0
    left: 0
    width: 35%
    height: 100%
.text-bg-right
  position: relative
  display: flex
  align-items: center
  p
    position: relative
    z-index: 1
    margin-bottom: 0
    padding-top: 1rem
    margin-bottom: 1rem
  &::after
    content: ''
    position: absolute
    background-color: #D9E0E1
    top: 0
    right: 0
    width: 35%
    height: 100%
.img-modal
  transition: all ease .5s
  cursor: pointer
  &:hover
    transform: scale(1.1)
.modal_t_2-1
  .modal-a__content
    padding: 3rem 1rem !important
.container-modal
  border: 5px solid #5BD9CE
  border-radius: 25px
  .title-modal
    margin-right: auto
    margin-left: auto
    background-color: #5BD9CE
    max-width: 422px
    height: 82px
    display: flex
    justify-content: center
    align-items: center
    border-bottom-left-radius: 14px
    border-bottom-right-radius: 14px
    margin-bottom: 2rem
    p
      font-size: 23px
      margin-bottom: 0
      line-height: 1.5rem
  @media (max-width: 768px)
    .title-modal
      border-top-right-radius: 14px
      border-top-left-radius: 14px
  .content-modal
    .content-dots-step
      display: flex
      flex-wrap: wrap
      justify-content: center
      .item-dots-step
        cursor: pointer
        height: 59px
        width: 59px
        border-radius: 50%
        background-color: #00A3BE
        color: white
        font-size: 30px
        display: flex
        align-items: center
        justify-content: center
        &:hover
          position: relative
          background-color: #491079
      .dot-select-modal
        position: relative
        background-color: #491079
        &::before
          content: ''
          position: absolute
          bottom: -20px
          height: 0
          width: 0
          border-bottom: 20px solid #5BD9CE
          border-top: 20px solid transparent
          border-left: 56px solid transparent
          border-right: 56px solid transparent
      @media (max-width: 768px)
        .dot-select-modal
          &::before
            display: none
    .data-dot-select
      min-height: 192px
      background-color: #5BD9CE
      border-radius: 18px
      margin-top: 19px
      margin-bottom: 2rem
</style>
