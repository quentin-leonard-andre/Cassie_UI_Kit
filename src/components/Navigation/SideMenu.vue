<script lang="js">
  import Text from "../Basic/Text.vue";
  import Link from "../Basic/Link.vue";
  import Icon from "../Basic/Icon.vue";

  export default{
    props: {
        content: {
            type: Array,
            default: []
        }
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
    <div class="sidemenu">
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
    }
</style>