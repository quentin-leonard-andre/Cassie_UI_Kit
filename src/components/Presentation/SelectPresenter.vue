<script lang="js">
    import Presenter from "./Presenter.vue";
    import Select from "../Form/Select.vue";

    export default{
        components: {
            Presenter,
            Select
        }
    }
</script>

<template>
  <Presenter
  >
    <template v-slot:title>
      Champs de sélection
    </template>

    <Select></Select>

    <Select
      placeholder="Faites un choix ..."
      :options="[
        'Choix 1',
        'Choix 2',
        'Choix 3',
      ]"
    ></Select>
  </Presenter>
</template>