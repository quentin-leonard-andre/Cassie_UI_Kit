<script lang="js">
  import Link from "../components/Basic/Link.vue";
  import Presenter from "../components/Presentation/Presenter.vue";

  import ColorPresenter from "../components/Presentation/ColorPresenter.vue";
  import LinkPresenter from "../components/Presentation/LinkPresenter.vue";
  import TextPresenter from "../components/Presentation/TextPresenter.vue";
  import ButtonPresenter from "../components/Presentation/ButtonPresenter.vue";
  import IconPresenter from "../components/Presentation/IconPresenter.vue";
  import AlertPresenter from "../components/Presentation/AlertPresenter.vue";

  export default{
    components: {
      Link,
      Presenter,
      LinkPresenter,
      TextPresenter,
      ButtonPresenter,
      ColorPresenter,
      IconPresenter,
      AlertPresenter
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
    <AlertPresenter></AlertPresenter>
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