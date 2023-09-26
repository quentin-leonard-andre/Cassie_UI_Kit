<script lang="js">
    import Presenter from "./Presenter.vue";
    import Breadcrumb from "../Navigation/Breadcrumb.vue";

    export default{
        components: {
            Presenter,
            Breadcrumb
        }
    }
</script>

<template>
  <Presenter>
    <template v-slot:title>
      Fils d'ariane
    </template>

    <Breadcrumb
        :path="[
            {
                label: 'Racine',
                href: '/',
                is_current: false
            },
            {
                label: 'Navigation',
                href: '/navigations',
                is_current: true
            },
        ]"
    >
    </Breadcrumb>
  </Presenter>
</template>