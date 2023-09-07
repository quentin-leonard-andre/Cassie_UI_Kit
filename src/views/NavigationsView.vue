<script lang="js">
  import Presenter from "../components/Presentation/Presenter.vue";
  import SideMenuPresenter from "../components/Presentation/SideMenuPresenter.vue";

  export default{
    components: {
      Presenter,
      SideMenuPresenter
    }
  }
</script>

<template>
  <div id="presenters">
    <SideMenuPresenter></SideMenuPresenter>
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/variables";

  #presenters{
    display: flex;
    flex-direction: column;
    gap: $normal_space;
    width: 100%;
  }
</style>