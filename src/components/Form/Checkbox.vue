<script lang="ts">
    import Text from "../Basic/Text.vue";

    export default{
        components: {
            Text
        },
        props: {
            id: {
                type: String,
                default: null
            },
            label: {
                type: String, 
                default: ''
            },
            full: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<template>
    <div class="checkbox_container" :class="{'full': full}">
        <input 
            :id="id"
            type="checkbox"
            :checked="checked"
        >
        <Text 
            v-if="label!=''"
            type="label"
            :for="id"
        >
            {{label}}
        </Text>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .checkbox_container{
        display: flex;
        gap: $small_space;
        align-items: center;

        input[type=checkbox]{
            width: 15px;
            height: 15px;
        }

        &.full{
            input[type=checkbox]{
                display: none;
            }

            label{
                display: flex;
                padding: $small_space;
                border: 1px solid $border_color;
                border-radius: $very_small_space;
                cursor: pointer;
            }

            input[type="checkbox"]:checked + label {
                background-color: $primary_color;
                color: $light_color;
            }
        }        
    }
</style>