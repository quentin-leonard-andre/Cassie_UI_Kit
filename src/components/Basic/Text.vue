<script lang="ts">
  export default{
    props: {
      font_size: {
        type: String,
        default: "normal"
      }
    }
  }
</script>

<template>
    <p
      :class="{'small_font_size': font_size=='small'}"
    >
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
    &.small_font_size{
      font-size: $small_font_size;
    }
  }
</style>