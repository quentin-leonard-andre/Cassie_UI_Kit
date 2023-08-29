<script lang="js">
    import Presenter from "./Presenter.vue";
    import Alert from "../Basic/Alert.vue";

    export default{
        components: {
            Presenter,
            Alert
        }
    }
</script>

<template>
  <Presenter>
    <template v-slot:title>
      Alertes
    </template>

    <Alert>
        Alerte standard
    </Alert>

    <Alert type="primary">
        Alerte primaire
    </Alert>

    <Alert type="success">
        Alerte succès
    </Alert>

    <Alert type="warning">
        Alerte attention
    </Alert>

    <Alert type="danger">
        Alerte danger
    </Alert>

    <Alert type="primary" icon="info">
        Alerte primaire avec icône
    </Alert>    

    <Alert type="success" icon="check">
        Alerte succès avec icône
    </Alert>    

    <Alert type="warning" icon="warning">
        Alerte warning avec icône
    </Alert>    

    <Alert type="danger" icon="delete">
        Alerte danger avec icône
    </Alert>    
  </Presenter>
</template>