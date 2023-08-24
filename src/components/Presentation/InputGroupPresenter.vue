<script lang="js">
    import Presenter from "./Presenter.vue";
    import InputGroup from "../Form/InputGroup.vue";

    export default{
        components: {
            Presenter,
            InputGroup
        }
    }
</script>

<template>
  <Presenter
    direction="column"
  >
    <template v-slot:title>
      Groupes de champs de saisie
    </template>

    <InputGroup 
        input_id="simple_label"
        label="Champs avec label"
        type="text"
        placeholder="Saisir du texte ici ..."
    >
    </InputGroup>
  </Presenter>
</template>

<style type="scss">

</style>