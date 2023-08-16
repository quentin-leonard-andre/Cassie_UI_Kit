<script lang="ts">
  export default{
    data(){
        this.direction = 'row';
    }
  }
</script>

<template>
    <div class="presenter" :class="[direction]">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    div.presenter{
        display: flex;
        gap: $small_space;

        &.column{
            flex-direction: column;
        }
    }
</style>