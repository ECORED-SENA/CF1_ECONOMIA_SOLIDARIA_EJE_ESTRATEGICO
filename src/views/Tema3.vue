<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span(style="color: white") 3
      h1 Cadenas productivas

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5
      img(src="@/assets/curso/tema3/img_t_3-1.png" style="max-width: 406px; max-height: 327px" data-aos="fade-right").mb-4.mx-auto
      div.ps-0.ps-md-5
        img(src="@/assets/curso/tema3/decorador.svg" style="max-height: 10px; max-width: 84px;" data-aos="fade-left").ms-auto.mb-4
        p(data-aos="fade-right") De acuerdo con Bair (2009), el término cadena productiva fue presentado en el artículo <em>Patterns of development of the modern world-system</em> de Hopkins y Wallerstein en 1977. Estos autores definieron una cadena productiva como el conjunto de insumos — transformaciones previas, las materias primas, los mecanismos de transporte y la mano de obra— necesarios para la obtención de un bien final (Hopkins y Wallerstein 1977, p. 128; citado en Bair, 2009). 
        br
        p.mb-4(data-aos="fade-left") De este modo, el concepto de cadena productiva permite entender, a partir de un esquema, el recorrido de los bienes primarios (materias primas), la producción (procesos productivos) y los bienes finales (productos terminados) de las actividades económicas desarrolladas por las empresas, que agrupadas son los sectores productivos que apalancan la economía de una región o un país, tal como lo presenta la siguiente figura:
        .d-flex.justify-content-between
          img(src="@/assets/curso/tema3/decorador.svg" data-aos="fade-right" style="max-height: 10px; max-width: 84px;")
          div(style="height: 18px; width: 50%; background-color: #CBF6F2" data-aos="fade-left")

    .d-flex
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 5
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Cadenas productivas</em>
    
    img(src="@/assets/curso/tema3/img_t_3-2.png" data-aos="zoom-in").col-12.mx-auto.mb-5

    .d-flex.align-items-start.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3.pt-1
      p.mb-0 En Colombia, el Departamento Nacional de Planeación - DNP, analiza treinta cadenas productivas más representativas en la economía del país, describiendo estadísticas de los perfiles sectoriales, así: 

    .col-12.col-md-10.mx-auto.mb-5
      .d-flex
        img(src="@/assets/curso/introduccion/punto.svg" style="max-width: 10px").me-3
        p.fw-bold.mb-0 Tabla 1
      .d-flex.justify-content-between.align-items-start.position-relative.mb-5
        p.mb-0.ps-4 <em>Cadenas productivas</em>
    
    .tabla-b.color-acento-contenido.mb-3
      .tabla-b__header.position-relative(style="background-color: #F6F6F6;")
        img(src="@/assets/curso/tema3/decorador.svg" style="position: absolute; max-height: 10px; max-width: 84px; left: 40px; top: calc(50% - 5px)").d-none.d-md-flex
        h5.mb-0(style="color: black") Cadenas productivas
      table
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">1</span> Cadena de molinería
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">16</span> Cadena agroquímicos
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">2</span> Cadena Azúcar, confitería y chocolatería
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">17</span> Cadena petroquímica - plásticos
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">3</span> Cadena oleaginosas, aceite y grasas
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">18</span> Cadena petroquímica - pinturas
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">4</span> Cadena tabaco
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">19</span> Cadena petroquímica - caucho
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">5</span> Cadena café y té
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">20</span> Cadena cosméticos y aseo
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">6</span> cadena hortofruticola
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">21</span> Cadena farmacéutica y medicamentos
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">7</span> Cadena cárnicos
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">22</span> Cadena cerámica
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">8</span> Cadena pesca y atún
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">23</span> Cadena vidrio
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">9</span> Cadena cuero, calzado e industria marroquinera
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">24</span> Cadena cemento y sus aplicaciones
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">10</span> Cadena lácteos
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">25</span> Cadena siderúrgica
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">11</span> Cadena alimentos concentrados o balanceados
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">26</span> Cadena metalmecánica
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">12</span> Cadena cerveza, malta y licores
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">27</span> Cadena maquinaria y equipo eléctrico
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">13</span> Cadena textil - confecciones
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">28</span> Cadena aparatos electrodomésticos
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">14</span> Cadena madera y muebles de madera
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">29</span> Cadena electrónica y equipos de telecomunicaciones
        tr
          th
            p.mb-0 <span class="fw-bold text-center pe-5">15</span> Cadena pulpa, papel e industria gráfica
          th(style="border-right: none")
            p.mb-0 <span class="fw-bold text-center pe-5">30</span> Cadena automotor
    img(src="@/assets/curso/tema3/decorador.svg" style="max-height: 10px; max-width: 84px; transform: rotate(180deg)").ms-auto.mb-5

    .d-flex.mb-5.pb-3
      img(src="@/assets/curso/introduccion/decorador.svg" style="max-width: 10px" data-aos="fade-up").mx-3.ms-md-4.me-md-5
      div
        .text-dos-fondos.me-0.me-md-5
          p.mb-2(data-aos="fade-down") Para profundizar en los perfiles sectoriales, el esquema de las cadenas productivas, sus actualizaciones como el comportamiento en sus exportaciones, importaciones, producto interno bruto y generación de empleo en los diversos eslabones que la conforman, se puede consultar el siguiente enlace: 
        .d-flex.justify-content-between
          img(src="@/assets/curso/tema3/decorador1.svg" data-aos="fade-right" style="max-width: 47px; max-height: 16px; transform: rotate3d(0, 1, 0, 180deg)")
          img(src="@/assets/curso/tema3/decorador1.svg" data-aos="fade-left" style="max-width: 47px; max-height: 16px;")
    
    .container_link.position-relative.col-12.col-md-11.mx-auto.d-flex.flex-wrap.flex-md-nowrap.mb-5
      img(src="@/assets/curso/tema3/img_t_3-3.png" data-aos="zoom-in" style="max-width: 585px; margin-top: -2.5rem")
      .my-auto.position-relative
        p(style="color: white").pe-0.pe-md-5.pb-4 Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página.
        .w-100.d-flex.justify-content-center.pe-0.pe-md-5.mt-5
          .mx-auto
            p.fw-bold(style="color: white") Análisis cadenas productivas”
            a(href="https://www.dnp.gov.co/programas/desarrollo-empresarial/Paginas/analisis-cadenas-productivas.aspx" target="_blank").link_button Dar clic para ir al lugar 
          img(src="@/assets/curso/tema3/decorador3.svg" data-aos="fade-left" style="max-width: 36px")
      img(src="@/assets/curso/tema3/img_t_3-4.png" style="max-width: 72px; position: absolute; right: 0; top: 50%; transform: translateY(-50%);")

    .d-flex.mb-5
      img(src="@/assets/curso/tema3/decorador4.svg" data-aos="flip-left" style="max-width: 41px").mx-3.mx-md-4
      .text-bg-right
        p(data-aos="fade-left") Así mismo, en el material complementario se encuentra el documento “Cadenas productivas industriales” estructura, comercio internacional y prospectiva, 2002 – 2017, (Departamento Nacional de Planeación, 2020), en donde a partir de una metodología para la estructuración de los eslabones, que componen la cadena productiva y los métodos de cálculo utilizados, se obtienen las estadísticas e indicadores que se presentan en las ocho cadenas productivas, a saber: 
    
    .d-flex
      img(src="@/assets/curso/tema3/decorador5.svg" style="max-width: 10px").me-3
      p.fw-bold.mb-0 Figura 6
    .d-flex.justify-content-between.align-items-start.position-relative.mb-5
      p.mb-0.ps-4 <em>Ocho cadenas productivas</em>
    
    img(src="@/assets/curso/tema3/img_t_3-5.png" data-aos="fade-up").mb-5

    .d-flex.pt-5.mb-5
      .text-bg-left
        p.ps-2.ps-md-4(data-aos="fade-right") Es decir, que una empresa constituida como organización de economía solidaria en cualquiera de sus formas jurídicas, está facultada para desarrollar una, dos o más actividades económicas en beneficio de sus asociados y de la comunidad en general, donde prevalece el interés común, cumpliéndose su carácter de empresa sin ánimo de lucro; de tal forma que, según su actividad económica se podrá identificar el sector económico y por ende, la cadena productiva que desarrollará al interior de su propia gestión empresarial. 
      img(src="@/assets/curso/tema3/decorador4.svg" data-aos="flip-left" style="max-width: 41px").mx-3.mx-md-4

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
.text-dos-fondos
  position: relative
  p
    position: relative
    z-index: 1
  &::after
    position: absolute
    content: ''
    top: 0
    left: 0
    height: 60%
    width: 40%
    background-color: #BFE8EF
    z-index: 0
  &::before
    position: absolute
    content: ''
    bottom: 0
    right: 0
    height: 60%
    width: 40%
    background-color: #BFE8EF
    z-index: 0
.container_link
  background-color: #491079
  border-radius: 20px
  display: flex
  flex-wrap: wrap
.link_button
  background-color: #FF6F27
  border-radius: 5px
  color: white
  padding-top: .3rem
  padding-bottom: .3rem
  padding-right: 1rem
  padding-left: 1rem
  &:hover
    color: white
    text-decoration: underline
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
    height: 100%
    left: 0
    top: 0
    background-color: #BFE8EF
</style>
