<script lang="ts">
  import Link from "../components/Link.vue";
  import Presenter from "../components/Presentation/Presenter.vue";

  export default{
    components: {
      Link,
      Presenter
    }
  }
</script>

<template>
  <Presenter>
    <Link>
      Lien ordinaire
    </Link>

    <Link
      :is_primary="true"
    >
      Lien primaire
    </Link>

    <Link
      :is_button="true"
    >
      Lien bouton
    </Link>
  </Presenter>
</template>

<style lang="scss">
  @import "../assets/scss/variables";
</style>