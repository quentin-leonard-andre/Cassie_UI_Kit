<script lang="js">
    import Text from "../Basic/Text.vue";
    import Button from "../Basic/Button.vue";
    import Icon from "../Basic/Icon.vue";

    export default{
        components: {
            Text,
            Button,
            Icon
        },
        data(
            props
        ){
            return {
                direction: 'row'
            }
        },
        methods: {
            toggleDirection: function(){
                this.direction = (this.direction == 'row' ? 'column' : 'row');
            }
        },
        props: {
            'is_direction_toggable': false
        }
    }
</script>

<template>
    <div class="presenter">
        <div class="header">
            <Text>
                <slot name="title"></slot>
            </Text>

            <Button v-if="is_direction_toggable" @click="toggleDirection">
                <Icon :type="direction"></Icon>
            </Button>
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
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
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