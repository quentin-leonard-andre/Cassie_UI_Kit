<script lang="js">
    import Text from "../Basic/Text.vue";
    import Button from "../Basic/Button.vue";

    export default{
        components: {
            Text,
            Button
        },
        data(){
            return {
                direction: 'row'
            }
        },
        methods: {
            toggleDirection: function(){
                this.direction = (this.direction == 'row' ? 'column' : 'row');
            }
        },
        computed: {
            toStringDirection: function(){
                return (this.direction == 'row' ? 'Afficher en colonnes' : 'Afficher en lignes');
            }
        }
    }
</script>

<template>
    <div class="presenter">
        <div class="header">
            <Text>
                <slot name="title"></slot>
            </Text>

            <Button @click="toggleDirection">
                {{toStringDirection}}
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