<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.titulo-principal
  .titulo-principal__numero
    background-color: #32D9CB
.banner-principal__componente
  h1
    color: black !important
.banner-principal__descripcion
  p
    color: black !important
.banner-principal__row
  min-height: 507px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_temas.png) !important
</style>
