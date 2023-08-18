<script lang="js">
    import Presenter from "./Presenter.vue";
    import Text from "../Basic/Text.vue";

    export default{
        components: {
            Presenter,
            Text
        }
    }
</script>

<template>
  <Presenter>
    <template v-slot:title>
      Textes
    </template>

    <Text
      font_size="small"
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare ante tortor, ac pulvinar erat ultrices vitae. Nam ornare, libero sit amet vestibulum ullamcorper, nibh neque rutrum felis, sollicitudin dignissim ipsum massa et arcu. Nullam velit dui, eleifend sed nisi ut, ornare congue magna. In vestibulum magna ut dolor commodo, et auctor erat commodo. Suspendisse ornare ullamcorper mi at faucibus. Maecenas finibus id nulla at facilisis. Aenean tempor odio in tempor condimentum. Vestibulum aliquam tristique turpis, non ultrices odio consectetur ut. Nullam sit amet nibh aliquam, cursus odio ullamcorper, fringilla eros.
    </Text>

    <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare ante tortor, ac pulvinar erat ultrices vitae. Nam ornare, libero sit amet vestibulum ullamcorper, nibh neque rutrum felis, sollicitudin dignissim ipsum massa et arcu. Nullam velit dui, eleifend sed nisi ut, ornare congue magna. In vestibulum magna ut dolor commodo, et auctor erat commodo. Suspendisse ornare ullamcorper mi at faucibus. Maecenas finibus id nulla at facilisis. Aenean tempor odio in tempor condimentum. Vestibulum aliquam tristique turpis, non ultrices odio consectetur ut. Nullam sit amet nibh aliquam, cursus odio ullamcorper, fringilla eros.
    </Text>
  </Presenter>
</template>