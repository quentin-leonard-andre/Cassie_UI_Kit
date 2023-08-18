<script lang="js">
    import Presenter from "./Presenter.vue";
    import Text from "../Basic/Text.vue";
    import Icon from "../Basic/Icon.vue";

    export default{
        components: {
            Presenter,
            Icon,
            Text
        },
        data(){
            return {
                types: [
                    'check', 'cancel', 'edit', 'delete', 'row', 'column', 'info', 'warning'
                ]
            }
        }
    }
</script>

<template>
    <Presenter>
    <template v-slot:title>
      Icones
    </template>

    <div class="icon_container" v-for="type in types">
        <Icon
            :type="type"
        >
        </Icon>
        <Text
            font_size="small"
        >{{ type }}</Text>
    </div>
  </Presenter>
</template>

<style lang="scss">
    .icon_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>