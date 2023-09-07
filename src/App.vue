<script lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Text from "./components/Basic/Text.vue";
  import Link from "./components/Basic/Link.vue";

  export default{
    components: {
      Text,
      Link
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
   
    <nav>
      <RouterLink active-class="router_link_active" to="/">
        <Link>Accueil</Link>
      </RouterLink>

      <RouterLink active-class="router_link_active" to="/basics">
        <Link>Composants basiques</Link>
      </RouterLink>
      
      <RouterLink active-class="router_link_active" to="/forms">
        <Link>Formulaires</Link>
      </RouterLink>

      <RouterLink active-class="router_link_active" to="/navigations">
        <Link>Navigations</Link>
      </RouterLink>
    </nav>
  </header>

  <main id="main">
    <div>
      <RouterView/>
    </div>
  </main>
</template>

<style lang="scss">
  @import "./assets/scss/variables";

  header#main_header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: $big_space;
    padding: $big_space;
    gap: $big_space;
    border-bottom: 1px solid $border_color;

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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div{
      width: 100%;
      max-width: 1000px;
    }
  }
</style>