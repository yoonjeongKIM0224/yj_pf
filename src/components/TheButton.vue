<template>
    <a :href="to" target="_blank" :class="[`button`, size, color, round ? 'round' : '', line ? `line_${line}` : '']" v-if="to && type == 'a'">
        <span class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </span>
    </a>
    <router-link :to="to" :class="[`button`, size, color, round ? 'round' : '', line ? `line_${line}` : '']" v-else-if="to">
        <span class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </span>
    </router-link>
    <button type="button" :class="[`button`, size, color, round ? 'round' : '', line ? `line_${line}` : '']" v-else>
        <span class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'TheButton',
    data(){
        return {
        }
    },
    props: {
        type: String,
        to: String,
        color: String,
        round: Boolean,
        size: String,
        line: String
    },
    components: {
    }
}
</script>

<style>
</style>
