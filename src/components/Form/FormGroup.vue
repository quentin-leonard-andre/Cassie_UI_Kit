<script lang="js">
    import Input from "./Input.vue";
    import Select from "./Select.vue";
    import Text from "../Basic/Text.vue";

    export default{
        components: {
            Input,
            Select,
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
                default: 'input'
            },
            input_type: {
                type: String, 
                default: "text"
            },
            input_id: {
                type: String,
            },
            options: {
                type: Array, 
                default: []
            }
        }
    }
</script>

<template>
    <div class="form_group">
        <Text 
            v-if="label"
            :for_identifier="input_id"
            type="label"
        >
            {{ label }}
        </Text>
        <template v-if="type=='input'">
            <Input
                :id="input_id"
                :placeholder="placeholder"
                :input_type="input_type"
            />
        </template>
        <template v-else-if="type=='select'">
            <Select
                :id="input_id"
                :options="options"
                :placeholder="placeholder"
            />
        </template>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    div.form_group{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: $small_space;
    }
</style>