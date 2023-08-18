<script lang="js">
    import Presenter from "./Presenter.vue";

    export default{
        components: {
            Presenter
        }
    }
</script>

<template>
  <Presenter>
    <template v-slot:title>
      Couleurs
    </template>

    <div class="color_displayer primary_color">
        Primaire
    </div>

    <div class="color_displayer light_grey_color">
        Gris clair
    </div>

    <div class="color_displayer grey_color">
        Gris
    </div>

    <div class="color_displayer dark_grey_color">
        Gris foncé
    </div>
    
    <div class="color_displayer success_color">
        Succès
    </div>

    <div class="color_displayer warning_color">
        Attention
    </div>

    <div class="color_displayer danger_color">
        Danger
    </div>

    <div class="color_displayer light_color">
        Clair
    </div>
    
    <div class="color_displayer dark_color">
        Sombre
    </div>

    <div class="color_displayer border_color">
        Bordure
    </div>

    <div class="color_displayer highlight_color">
        Mise en avant
    </div>

    <div class="color_displayer text_highlight_color">
        Mise en avant de texte
    </div>
  </Presenter>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";
    
    .color_displayer{
        background-color: $light_color;
        font-size: $normal_font_size;
        font-family: $main_font;
        padding: $big_space;
        color: $dark_color;
        min-width: 200px;

        &.primary_color{
            background-color: $primary_color;
            color: $light_color;
        }
        &.light_grey_color{
            background-color: $light_grey_color;
            color: $dark_color;
        }
        &.grey_color{
            background-color: $grey_color;
            color: $light_color;
        }
        &.dark_grey_color{
            background-color: $dark_grey_color;
            color: $light_color;
        }
        &.success_color{
            background-color: $success_color;
            color: $light_color;
        }
        &.warning_color{
            background-color: $warning_color;
            color: $light_color;
        }
        &.danger_color{
            background-color: $danger_color;
            color: $light_color;
        }
        &.light_color{
            background-color: $light_color;
            color: $dark_color;
        }
        &.dark_color{
            background-color: $dark_color;
            color: $light_color;
        }
        &.border_color{
            background-color: $border_color;
            color: $dark_color;
        }
        &.highlight_color{
            background-color: $highlight_color;
            color: $dark_color;
        }
        &.text_highlight_color{
            background-color: $text_highlight_color;
            color: $light_color;
        }
    }
</style>