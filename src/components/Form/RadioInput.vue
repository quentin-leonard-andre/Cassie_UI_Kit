<script lang="ts">
    import Text from "../Basic/Text.vue";

    export default{
        props: {
            id: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            label: {
                type: String,
                default: null
            },
            full: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            }
        },
        components: {
            Text
        }
    }
</script>

<template>
    <div class="radio_input_container" :class="{'full': full}">
        <input 
            :id="id"
            :name="name"
            type="radio"
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

    .radio_input_container{
        display: flex;
        gap: $small_space;
        align-items: center;

        input[type=radio]{
            width: 15px;
            height: 15px;
        }

        &.full{
            input[type=radio]{
                display: none;
            }

            label{
                display: flex;
                padding: $small_space;
                border: 1px solid $border_color;
                border-radius: $very_small_space;
                cursor: pointer;
            }

            input[type="radio"]:checked + label {
                background-color: $primary_color;
                color: $light_color;
            }
        }        
    }
</style>