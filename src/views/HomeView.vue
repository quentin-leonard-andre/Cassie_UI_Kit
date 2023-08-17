<script lang="js">
  import Link from "../components/Basic/Link.vue";
  import Presenter from "../components/Presentation/Presenter.vue";

  export default{
    components: {
      Link,
      Presenter
    }
  }
</script>

<template>
  <!-- Liens -->
  <Presenter
    
  >
    <template v-slot:title>
      Liens
    </template>

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