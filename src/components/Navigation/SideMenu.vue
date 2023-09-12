<script lang="js">
  import Text from "../Basic/Text.vue";
  import Link from "../Basic/Link.vue";
  import Icon from "../Basic/Icon.vue";

  export default{
    props: {
        content: {
            type: Array,
            default: []
        },
        fullscreenable: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            is_open_fullscreen: false
        };
    },
    components: {
        Text,
        Link,
        Icon
    },
    methods: {
    }
  }
</script>

<template>
    <!-- Bouton fullscreen -->
    <template v-if="fullscreenable">
        <div 
            v-if="!is_open_fullscreen"
            class="sidenav_fullscreen_button"
            @click="is_open_fullscreen = true"
        >
            <Icon 
                type="menu" 
                width="100%"
            >
            </Icon>
        </div>

        <div 
            v-else
            class="sidenav_fullscreen_button"
            @click="is_open_fullscreen = false"
        >
            <Icon 
                type="cancel" 
                width="100%"
            >
            </Icon>
        </div>
    </template>
    <!-- Fin bouton fullscreen -->

    <div class="sidemenu" :class="{'fullscreenable': fullscreenable, 'fullscreen': is_open_fullscreen}">
        <ul>
            <template
                v-for="subcontent in content"
                type="li"
            >
                <template
                    v-if="subcontent.type == 'category'"
                >
                    <Text 
                        type="li" 
                        class="submenu_title"
                    >
                        {{ subcontent.title }}
                    </Text>
                    

                    <template 
                        v-for="subcontent_content in subcontent.content"
                    >
                        <Text 
                            type="li"
                        >
                            <Link 
                                :href="subcontent_content.href" 
                                full_width
                                class="category_child"
                            >
                                <Icon v-if="subcontent_content.icon" :type="subcontent.icon"></Icon>
                                {{ subcontent_content.title }}
                            </Link>
                        </Text>
                    </template>
                </template>
                
                <template v-else-if="subcontent.type == 'link'">
                    <Text 
                        type="li" 
                    >
                        <Link href="/basics" full_width>
                            <Icon v-if="subcontent.icon" :type="subcontent.icon"></Icon>
                            {{ subcontent.title }}
                        </Link>
                    </Text>
                </template>
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .sidemenu{
        max-width: 100%;
        min-width: 300px;
        height: 100%;

        border: 1px solid $border_color;
        background-color: $light_grey_color;

        ul{
            li{
                padding: 0px;
                border-bottom: 1px solid $border_color;
                
                .icon{
                    transform: scale(0.8);
                    flex-shrink: 0;
                }
                
                &:not(.submenu_title):hover{
                    background-color: $primary_color;

                    & > a{
                        color: $light_color;
                    }

                    & .icon{
                        fill: $light_color;
                    }
                }

                a, &.submenu_title{
                    padding: $small_space;
                }

                a{
                    &.category_child{
                        padding-left: $big_space;
                    }
                }

                &.submenu_title{
                    background-color: $border_color;
                }
            }
        }

        &.fullscreenable{
            @media screen and (max-width: 768px){
                display: none;

                &.fullscreen{
                    z-index: 4;
                    position: fixed;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    max-width: 100%!important;
                    height: 100vh;
                    display: flex;

                    padding-top: 40px;

                    ul{
                        width: 100%;
                    }
                }
            }
        }
    }

    div.sidenav_fullscreen_button{
        display: flex;
        align-items: center;
        position: fixed;
        top: 10px;
        left: 10px;
        width: 25px;
        z-index: 5;

        cursor: pointer;

        @media screen and (min-width: 768px){
            display: none;
        }
    }
</style>