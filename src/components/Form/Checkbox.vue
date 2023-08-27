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
            }
        }
    }
</script>

<template>
    <div class="checkbox_container">
        <input 
            :id="id"
            type="checkbox"
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
            height: 15px;
            width: 15px;
        }
    }
</style>