<script lang="ts">
  export default{
  }
</script>

<template>
    <p>
        <slot></slot>
    </p>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  p{
    font-size: $normal_font_size;
    color: $dark_color;
    font-family: $main_font;
    padding: $small_space;

    &.highlight{
      color: $text_highlight_color;
    }
  }
</style>