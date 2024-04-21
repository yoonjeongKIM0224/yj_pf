<template>
    <ul class="tab_list">
        <li :class="['item', item.itemClass, tabSelected === idx ? 'active' : '']" v-for="(item, idx) in tabs" :key="idx" @click="$emit('tabSelected', tabSelected), tabSelected = idx">
            <button type="button" class="item_cont" :disabled="item.disabled">{{ item.text }}</button>
        </li>
    </ul>
    <div class="tab_content">
        <div v-for="(item, idx) in tabs" :key="idx" class="container">
            <slot :name="`tabPanel${idx + 1}`" v-if="tabSelected === idx"></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'TheTab',
    data(){
        return {
            tabSelected: 0,
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
