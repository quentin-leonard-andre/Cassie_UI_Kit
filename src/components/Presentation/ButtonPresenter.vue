<script lang="js">
    import Presenter from "./Presenter.vue";
    import Button from "../Basic/Button.vue";

    export default{
        components: {
            Presenter,
            Button
        }
    }
</script>

<template>
  <Presenter>
    <Button type="primary">
      Bouton primaire
    </Button>

    <Button type="secondary">
      Bouton secondaire
    </Button>

    <Button type="success">
      Bouton succès
    </Button>

    <Button type="warning">
      Bouton attention
    </Button>

    <Button type="danger">
      Bouton danger
    </Button>
  </Presenter>
</template>