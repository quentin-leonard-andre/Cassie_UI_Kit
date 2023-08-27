<script lang="js">
  import Button from "../Basic/Button.vue";
  import {ref} from 'vue';

  export default{
    setup(){
      const file_input = ref(null);

      return {
        file_input
      }
    },
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
    },
    components: {
      Button,
      ref
    },
    methods: {
      openFileSelector(){
        if(this.file_input)
          this.file_input.click();
      }
    }
  }
</script>

<template>
  <template v-if="type=='file'">
    <div class="file_input">
      <Button @click="openFileSelector">
        Choisir un fichier ...
      </Button>
      <input
        :placeholder="placeholder"
        :type="type"
        :name="name"

        ref="file_input"
      />
    </div>
  </template>

  <template v-else>
    <input
      :placeholder="placeholder"
      :type="type"
      :name="name"
    />
  </template>
</template>

<style lang="scss" scoped>
  @import "../../assets/scss/variables";

  input{
    border: 1px solid $border_color;
    font-family: $main_font;
    font-size: $normal_font_size;
    color: $dark_color;
    padding: $small_space;
    border-radius: $very_small_space;
    width: 100%;

    &::placeholder {
      color: $grey_color;
      opacity: 1;
    }

    &:focus{
      outline: 1px solid $primary_color;
    }
  }

  .file_input{
    display: flex;
    width: 100%;
    border: 1px solid $border_color;
    border-radius: $very_small_space;

    input[type=file]{
      width: auto;
      flex: 1;
      border: 0px solid;
      cursor: pointer;

      &:focus{
        outline: 0px solid $primary_color;
      }

      &::file-selector-button{
        display: none;
      }
    }
  }
</style>