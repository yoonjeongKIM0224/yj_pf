<template>
    <a :href="to" target="_blank" :class="[`button`, size, color,round ? 'round' : '']" v-if="to && type == 'a'">
        <span class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </span>
    </a>
    <router-link :to="to" :class="[`button`, size, color,round ? 'round' : '']" v-else-if="to">
        <div class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </div>
    </router-link>
    <button type="button" :class="[`button`, size, color,round ? 'round' : '']" v-else>
        <div class="container">
            <slot name="before"></slot>
            <span class="btn_text">
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </div>
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
        size: String
    },
    components: {
    }
}
</script>

<style>
</style>
