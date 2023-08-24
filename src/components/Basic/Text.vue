<script lang="ts">
  export default{
    props: {
      type: {
        type: String,
        default: "p"
      },
      font_size: {
        type: String,
        default: "normal"
      },
      uppercase: {
        type: Boolean, 
        default: false
      },
      padding: {
        type: Number,
        default: null
      },
      for_identifier: {
        type: String,
        default: ""
      }
    }
  }
</script>

<template>
    <component
      :is="type"
      class="text"
      :class="{'small_font_size': font_size=='small', 'title_font_size': font_size=='title', 'uppercase': uppercase}"
      :for="(for_identifier ? for_identifier : null)"
    >
        <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  .text{
    font-size: $normal_font_size;
    color: $dark_color;
    font-family: $main_font;
    user-select: text;

    &.highlight{
      color: $text_highlight_color;
    }
    &.small_font_size{
      font-size: $small_font_size;
    }
    &.title_font_size{
      font-size: $title_font_size;
    }
    &.uppercase{
      text-transform: uppercase;
    }
  }
</style>