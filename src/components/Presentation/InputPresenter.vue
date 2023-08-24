<script lang="js">
    import Presenter from "./Presenter.vue";
    import Input from "../Form/Input.vue";

    export default{
        components: {
            Presenter,
            Input
        }
    }
</script>

<template>
  <Presenter
    direction="column"
  >
    <template v-slot:title>
      Champs de saisie
    </template>

    <Input
        placeholder="Champs de saisie simple ..."
    ></Input>

    <Input
        placeholder="Champs de saisie mot de passe ..."
        type="password"
    ></Input>

    <Input
        placeholder="Champs de saisie nombre ..."
        type="number"
    ></Input>

    <Input
        placeholder="Champs de saisie date ..."
        type="date"
    ></Input>
  </Presenter>
</template>

<style type="scss">

</style>