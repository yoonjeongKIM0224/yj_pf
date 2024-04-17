<template>
    <ul>
        <li :class="['item', item.itemClass]" v-for="(item, idx) in tabs" :key="idx">
            <button type="button" class="item_cont" :disabled="item.disabled">{{ item.text }}</button>
        </li>
    </ul>
    <slot :name="`temp${idx + 1}`" v-for="(item, idx) in tabs" :key="idx"></slot>
</template>
  
<script>
export default {
    name: 'TheHeader',
    data(){
        return {
        }
    },
    props: {
        tabs: Object
    },
    components: {
    }
}
</script>

<style>
</style>
