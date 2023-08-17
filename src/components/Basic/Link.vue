<script lang="ts">
  export default{
    props: [
      'is_button',
      'is_primary'
    ]
  }
</script>

<template>
    <a
      :class="{'button': is_button, 'primary': is_primary}"
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

    &.primary{
      color: $primary_color;
    }

    &.button{
      background-color: $highlight_color;
      border-radius: $very_small_space;
    }
  }
</style>