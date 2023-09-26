<script lang="js">
    import Text from "../Basic/Text.vue";
    import Link from "../Basic/Link.vue";

    export default{
        components: {
            Text,
            Link
        },
        props: {
            path: {
                type: Array,
                default: []
            },
            separator: {
                type: String,
                default: '/'
            }
        }
    }
</script>

<template>
    <div v-if="path.length" class="breadcrumb">
        <ul>
            <template v-for="(current_path_step, index) in path">
                <li>
                    <component 
                        :href="current_path_step.href"
                        :is="(current_path_step.is_current) ? 'Text' : 'Link'"
                        :class="{'is_current': current_path_step.is_current}"
                    >
                        {{current_path_step.label}}
                    </component>
                </li>
                <li v-if="path.length > index+1">
                    <Text>
                        {{ separator }}
                    </Text>
                </li>
            </template>
            
            
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .breadcrumb{
        background-color: $light_color;
        padding: $small_space;
        width: 100%;

        ul{
            display: flex;
            gap: $small_space;
        }

        .is_current{
            color: $primary_color;
        }
    }
</style>