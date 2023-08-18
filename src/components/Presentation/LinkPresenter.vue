<script lang="js">
    import Presenter from "./Presenter.vue";
    import Link from "../Basic/Link.vue";

    export default{
        components: {
            Presenter,
            Link
        }
    }
</script>

<template>
  <Presenter
    :is_direction_toggable="true"
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