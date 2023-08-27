<script lang="ts">
    export default{
        components: {
        },
        props: {
            id: {
                type: String,
                default: ''
            },
            options: {
                type: Array,
                default: []
            },
            placeholder: {
                type: String,
                default: "Choisissez ..."
            }
        }
    }
</script>

<template>
   <select
    :id="id"
   >
        <option selected disabled>{{ placeholder }}</option>
        <option v-for="option in options">
            {{ option }}
        </option>
   </select>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    select{
        border: 1px solid $border_color;
        font-family: $main_font;
        font-size: $normal_font_size;
        color: $dark_color;
        padding: $small_space;
        border-radius: $very_small_space;
        width: 100%;

        &:focus{
        outline: 1px solid $primary_color;
        }

        option:hover{
           background-color: red!important;
        }
    }
</style>