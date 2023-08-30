<script lang="js">
    import Presenter from "./Presenter.vue";
    import RadioInput from "../Form/RadioInput.vue";

    export default{
        components: {
            Presenter,
            RadioInput
        }
    }
</script>

<template>
  <Presenter
    :is_direction_toggable="true"
    initial_direction="column"
  >
    <template v-slot:title>
      Boutons radios
    </template>

    <RadioInput
        id="radio_example_1"
        name="radio_example"
        label="Bouton radio 1"
    />
    <RadioInput
        id="radio_example_2"
        name="radio_example"
        label="Bouton radio 2"
    />
    <RadioInput
        id="radio_example_3"
        name="radio_example"
        label="Bouton radio 3"
    />

    <RadioInput
        id="radio_full_1"
        name="radio_full"
        label="Bouton radio plein 1"
        full
    />
    <RadioInput
        id="radio_full_2"
        name="radio_full"
        label="Bouton radio plein 2"
        full
        checked
    />
    <RadioInput
        id="radio_full_3"
        name="radio_full"
        label="Bouton radio plein 3"
        full
    />
  </Presenter>
</template>

<style type="scss">
  
</style>