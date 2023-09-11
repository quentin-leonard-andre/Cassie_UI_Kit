<script lang="js">
    import Presenter from "./Presenter.vue";
    import SideMenu from "../Navigation/SideMenu.vue";

    export default{
        components: {
            Presenter,
            SideMenu
        }
    }
</script>

<template>
  <Presenter
  >
    <template v-slot:title>
      Menu lattéral
    </template>

    <div class="sidemenu_presenter_container">
      <SideMenu
        :content="
          [
            {
              type: 'category',
              title: 'Titre de ma catégorie',
              content: [
                {
                  type: 'link',
                  title: 'Mon premier lien',
                  href: '/basics'
                },
                {
                  type: 'link',
                  title: 'Mon deuxième lien',
                  href: '/forms'
                }
              ]
            },
            {
              type: 'category',
              title: 'Titre de ma catégorie',
              content: [
                {
                  type: 'link',
                  title: 'Mon premier lien',
                  href: '/basics',
                  icon: 'check'
                },
                {
                  type: 'link',
                  title: 'Mon deuxième lien',
                  href: '/forms'
                }
              ]
            },
            {
              type: 'link',
              title: 'Mon premier lien',
              href: '/basics',
              icon: 'info'
            }
          ]
        "
      >
      </SideMenu>
    </div>
  </Presenter>
</template>

<style lang="scss">
  .sidemenu_presenter_container{
    height: 800px;
  }
</style>