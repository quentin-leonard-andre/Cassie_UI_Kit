<script lang="js">
    import Presenter from "./Presenter.vue";
    import Checkbox from "../Form/Checkbox.vue";

    export default{
        components: {
            Presenter,
            Checkbox
        }
    }
</script>

<template>
  <Presenter
    direction="column"
  >
    <template v-slot:title>
      Checkbox
    </template>

    <Checkbox
        id="simple_checkbox"
        label="Case à cocher"
    />
  </Presenter>
</template>

<style type="scss">

</style>