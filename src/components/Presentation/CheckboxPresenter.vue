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
    :is_direction_toggable="true"
    initial_direction="column"
  >
    <template v-slot:title>
      Checkbox
    </template>

    <Checkbox
        id="simple_checkbox"
        label="Case à cocher 1"
    />
    <Checkbox
        id="simple_checkbox_2"
        label="Case à cocher 2"
    />
    <Checkbox
        id="simple_checkbox_3"
        label="Case à cocher 3"
    />

    <Checkbox
      id="full_checkbox"
      label="Case à cocher pleine 1"
      full
      checked
    />
    <Checkbox
      id="full_checkbox_2"
      label="Case à cocher pleine 2"
      full
    />
    <Checkbox
      id="full_checkbox_3"
      label="Case à cocher pleine 3"
      full
    />
  </Presenter>
</template>

<style type="scss">
  
</style>