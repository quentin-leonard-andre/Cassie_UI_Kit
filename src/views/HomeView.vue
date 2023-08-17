<script lang="js">
  import Link from "../components/Basic/Link.vue";
  import Presenter from "../components/Presentation/Presenter.vue";

  import LinkPresenter from "../components/Presentation/LinkPresenter.vue";
  import TextPresenter from "../components/Presentation/TextPresenter.vue";

  export default{
    components: {
      Link,
      Presenter,
      LinkPresenter,
      TextPresenter
    }
  }
</script>

<template>
  <TextPresenter></TextPresenter>
  <LinkPresenter></LinkPresenter>
</template>

<style lang="scss">
  @import "../assets/scss/variables";
</style>