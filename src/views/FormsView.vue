<script lang="js">
  import Presenter from "../components/Presentation/Presenter.vue";

  export default{
    components: {
      Presenter
    }
  }
</script>

<template>
  <div id="presenters">
    <ColorPresenter></ColorPresenter>
    <TextPresenter></TextPresenter>
    <LinkPresenter></LinkPresenter>
    <ButtonPresenter></ButtonPresenter>
    <IconPresenter></IconPresenter>
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/variables";

  #presenters{
    display: flex;
    flex-direction: column;
    gap: $normal_space;
  }
</style>