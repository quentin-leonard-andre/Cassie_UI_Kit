<script lang="ts">
    import Input from "./Input.vue";
    import Text from "../Basic/Text.vue";

    export default{
        components: {
            Input,
            Text
        },
        props: {
            placeholder: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: ""
            },
            type: {
                type: String, 
                default: "text"
            },
            input_id: {
                type: String,
            },
        }
    }
</script>

<template>
    <div class="input_group">
        <Text 
            v-if="label"
            :for_identifier="input_id"
            type="label"
        >
            {{ label }}
        </Text>
        <Input
            :id="input_id"
            :placeholder="placeholder"
            :type="type"
        />
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    div.input_group{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: $small_space;
    }
</style>