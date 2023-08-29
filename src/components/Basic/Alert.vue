<script lang="js">
    import Icon from "./Icon.vue";

    export default{
        props: {
            type: {
                type: String,
                default: ""
            },
            icon: {
                type: String,
                default: null
            }
        },
        components: {
            Icon
        }
    }
</script>

<template>
    <div 
        class="alert"
        :class="[type]"
    >
        <Icon v-if="icon" :type="icon"></Icon>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .alert{
        padding: $normal_space;
        font-family: $main_font;
        font-size: $normal_font_size;
        background-color: $light_grey_color;
        border-radius: $very_small_space;
        color: $dark_color;
        width: 100%;
        border: 1px solid $grey_color;
        display: flex;
        align-items: center;
        gap: $normal_space;

        .icon{
            flex-shrink: 0;
        }

        &.primary{
            background-color: $light_primary_color;
            border: 1px solid $primary_color;

            .icon{
                fill: $primary_color;
            }
        }

        &.warning{
            background-color: $light_warning_color;
            border: 1px solid $warning_color;

            .icon{
                fill: $warning_color;
            }
        }

        &.success{
            background-color: $light_success_color;
            border: 1px solid $success_color;

            .icon{
                fill: $success_color;
            }
        }

        &.danger{
            background-color: $light_danger_color;
            border: 1px solid $danger_color;

            .icon{
                fill: $danger_color;
            }
        }
    }
</style>