<template>
    <div :class="[`tab_list_wrap`]">
        <ul :class="[`tab_list${type}`, handler ? 'handler' : '', handlerActive ? 'active' : '']">
            <li :class="['item', item.itemClass, tabSelected === idx ? 'active' : '']" v-for="(item, idx) in tabs" :key="idx" @click="$emit('tabSelected', tabSelected), tabSelected = idx">
                <button type="button" class="item_cont" :disabled="item.disabled">{{ item.text }}</button>
            </li>
        </ul>
        <TheButton
            v-if="handler"
            @click="handlerActive = !handlerActive"
            class="handler_button"
            aria-label="확대" />
    </div>
    <div class="tab_content">
        <div v-for="(item, idx) in tabs" :key="idx" class="container">
            <slot :name="`tabPanel${idx + 1}`" v-if="tabSelected === idx"></slot>
        </div>
    </div>
</template>
  
<script>
import TheButton from '@/components/TheButton.vue';

export default {
    name: 'TheTab',
    data(){
        return {
            tabSelected: 0,
            handlerActive: false
        }
    },
    props: {
        tabs: Object,
        type: String,
        handler: Boolean
    },
    components: {
        TheButton
    }
}
</script>

<style>
</style>
