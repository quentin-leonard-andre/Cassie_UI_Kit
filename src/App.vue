<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Text from "./components/Basic/Text.vue";
  import Link from "./components/Basic/Link.vue";
  import SideMenu from "./components/Navigation/SideMenu.vue";

  export default{
    components: {
      Text,
      Link,
      SideMenu
    }
  }
</script>

<template>
  <!--
  <RouterLink to="/">Accueil</RouterLink>
  -->
  <header id="main_header">
    <RouterLink to="/">
      <img src="./assets/img/cassie_logo.png" alt="Logo" width="75"/>
    </RouterLink>
  </header>

  <main id="main">
    <SideMenu
      :content="
        [
          {
            type: 'category',
            title: 'Composants',
            content: [
              {
                type: 'link',
                title: 'Basiques',
                href: '/basics'
              },
              {
                type: 'link',
                title: 'Formulaires',
                href: '/forms'
              },
              {
                type: 'link',
                title: 'Navigation',
                href: '/navigations'
              }
            ]
          }
        ]
      "
    >
    </SideMenu>
    <div id="main_content">
      <RouterView/>
    </div>
  </main>
</template>

<style lang="scss">
  @import "./assets/scss/variables";

  #app{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  header#main_header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: $big_space;
    gap: $big_space;

    nav{
      display: flex;
      gap: $normal_space;
      flex-wrap: wrap;
      
      .router_link_active{
        a{
          color: $primary_color;
        }
      }
    }
  }

  main#main{
    display: flex;
    justify-content: center;
    align-items: stretch;
    overflow: hidden;

    #main_content, .sidemenu{
      width: 100%;
      height: 100%;
      overflow: auto;

      &#main_content{
        padding: 0px $big_space;
        padding-bottom: $big_space;
      }

      &.sidemenu{
        max-width: 200px;
        height: 100%;
        overflow: auto;
      }
    }
  }
</style>