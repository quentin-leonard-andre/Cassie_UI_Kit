<script lang="js">
    import Text from "../Basic/Text.vue";

    export default{
        components: {
            Text
        },
        data(){
            this.direction = 'row';
        }
    }
</script>

<template>
    <div class="presenter">
        <div class="header">
            <Text>
                <slot name="title"></slot>
            </Text>
        </div>
    
        <div class="content" :class="[direction]">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    div.presenter{

        margin: $normal_space;
        border: 1px $border_color solid;
        border-radius: $very_small_space;
        display: flex;
        flex-direction: column;

        .header{
            background-color: $border_color;
            padding: $normal_space;
            padding-top: $small_space;
            padding-bottom: $small_space;
        }

        .content{
            display: flex;
            flex-wrap: wrap;
            gap: $small_space;
            padding: $normal_space;

            &.column{
            flex-direction: column;
        }
        }
    }
</style>