<script lang="js">
  import Presenter from "../components/Presentation/Presenter.vue";
  import InputPresenter from "../components/Presentation/InputPresenter.vue";
  import FormGroupPresenter from "../components/Presentation/FormGroupPresenter.vue";
  import SelectPresenter from "../components/Presentation/SelectPresenter.vue";
  import CheckboxPresenter from "../components/Presentation/CheckboxPresenter.vue";
  import RadioInputPresenter from "../components/Presentation/RadioInputPresenter.vue";

  export default{
    components: {
      Presenter,
      InputPresenter,
      FormGroupPresenter,
      SelectPresenter,
      CheckboxPresenter,
      RadioInputPresenter
    }
  }
</script>

<template>
  <div id="presenters">
    <InputPresenter></InputPresenter>
    <SelectPresenter></SelectPresenter>
    <FormGroupPresenter></FormGroupPresenter>
    <CheckboxPresenter></CheckboxPresenter>
    <RadioInputPresenter></RadioInputPresenter>
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