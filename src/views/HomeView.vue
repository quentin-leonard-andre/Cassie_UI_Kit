<script lang="js">
  import Link from "../components/Basic/Link.vue";
  import Presenter from "../components/Presentation/Presenter.vue";

  import LinkPresenter from "../components/Presentation/LinkPresenter.vue";
  import TextPresenter from "../components/Presentation/TextPresenter.vue";
  import ButtonPresenter from "../components/Presentation/ButtonPresenter.vue";

  export default{
    components: {
      Link,
      Presenter,
      LinkPresenter,
      TextPresenter,
      ButtonPresenter
    }
  }
</script>

<template>
  <TextPresenter></TextPresenter>
  <LinkPresenter></LinkPresenter>
  <ButtonPresenter></ButtonPresenter>
</template>

<style lang="scss">
  @import "../assets/scss/variables";
</style>