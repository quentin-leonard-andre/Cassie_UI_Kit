<script lang="js">
  import Presenter from "../components/Presentation/Presenter.vue";
  import InputPresenter from "../components/Presentation/InputPresenter.vue";
  import InputGroupPresenter from "../components/Presentation/InputGroupPresenter.vue";
  import SelectPresenter from "../components/Presentation/SelectPresenter.vue";

  export default{
    components: {
      Presenter,
      InputPresenter,
      InputGroupPresenter,
      SelectPresenter
    }
  }
</script>

<template>
  <div id="presenters">
    <InputPresenter></InputPresenter>
    <InputGroupPresenter></InputGroupPresenter>
    <SelectPresenter></SelectPresenter>
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