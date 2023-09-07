<script lang="ts">
  export default{
    props: {
      is_button: {
        type: Boolean,
        default: false
      },
      is_primary: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: '#'
      },
      full_width: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template>
    <a
      :class="{'button': is_button, 'primary': is_primary, 'full_width': full_width}"
      :href="href"
    >
      <slot></slot>
    </a>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  a{
    padding: $small_space;
    cursor: pointer;
    font-size: $normal_font_size;
    font-family: $main_font;
    color: $dark_color;
    width: fit-content;

    &.primary{
      color: $primary_color;
    }

    &.button{
      background-color: $highlight_color;
      border-radius: $very_small_space;
    }

    &.full_width{
      width: 100%;
    }
  }
</style>