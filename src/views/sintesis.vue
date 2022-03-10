<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span(style="color: white") D
      h1 Síntesis

    .texto-sintesis.mb-5
      p A continuación, se presentan de forma gráfica las temáticas trabajadas en este componente:
      img(src="@/assets/curso/introduccion/decorador.svg" style="transform: rotate(180deg)")

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
.texto-sintesis
  display: flex
  justify-content: space-between
  img
    max-width: 10px
    margin-left: 2rem
    margin-right: 2rem
@media (max-width: 768px)
  .texto-sintesis
    img
      margin-right: 1rem
      margin-left: 1rem
</style>
