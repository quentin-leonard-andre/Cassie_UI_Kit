<script lang="ts">
  export default{
    props: [
      'type'
    ]
  }
</script>

<template>
    <button
      :class="[type]"
    >
      <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  button{
    padding: $small_space;
    cursor: pointer;
    font-size: $normal_font_size;
    font-family: $main_font;
    border-radius: $very_small_space;
    color: $dark_color;
    background-color: $light_color;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus{
      outline: 1px solid $primary_color;;
    }

    &.primary{
      background-color: $primary_color;
      color: $light_color;
    }
    &.success{
      background-color: $success_color;
      color: $light_color;
    }
    &.warning{
      background-color: $warning_color;
      color: $light_color;
    }
    &.danger{
      background-color: $danger_color;
      color: $light_color;
    }
    &.secondary{
      background-color: $grey_color;
      color: $light_color;
    }
  }
</style>