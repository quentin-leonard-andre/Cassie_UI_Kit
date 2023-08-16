<script lang="ts">
  import Link from "../components/Link.vue";
  export default{
    components: {
      Link
    }
  }
</script>

<template>
  <div class="row">
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
  </div>
</template>

<style lang="scss">
  @import "../assets/scss/variables";

  .row{
    display: flex;
    gap: $small_space;
  }
</style>