<script lang="ts">
  export default{
    props: {
        placeholder: {
            type: String,
            default: ""
        },
        type: {
          type: String, 
          default: "text"
        },
        name: {
          type: String, 
          default: ""
        }
    }
  }
</script>

<template>
    <input
        :placeholder="placeholder"
        :type="type"
        :name="name"
    />
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  input{
    border: 1px solid $border_color;
    font-family: $main_font;
    font-size: $normal_font_size;
    padding: $small_space;
    border-radius: $very_small_space;
    width: 100%;

    &:focus{
      outline: 1px solid $primary_color;
    }
  }
</style>