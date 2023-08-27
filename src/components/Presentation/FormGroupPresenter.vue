<script lang="js">
    import Presenter from "./Presenter.vue";
    import FormGroup from "../Form/FormGroup.vue";

    export default{
        components: {
            Presenter,
            FormGroup
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

    <FormGroup 
        input_id="simple_label"
        label="Champs avec label"
        type="input"
        input_type="text"
        placeholder="Saisir du texte ici ..."
    >
    </FormGroup>

    <FormGroup 
        input_id="select_label"
        label="Champs de sélection avec label"
        type="select"
        placeholder="Choisissez ..."
        :options="
          [
            'Valeur 1',
            'Valeur 2',
            'Valeur 3'
          ]
        "
    >
    </FormGroup>
  </Presenter>
</template>

<style type="scss">

</style>