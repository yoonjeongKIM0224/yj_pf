<template>
    <!-- 리스트 정렬 -->
    <div class="setting_area" v-if="listUse.length > 1 && setting">
        <div class="select_type1">
            <select name="document_select1" id="document_select1" class="select" @change="selectSort($event.target.value)">
                <option value="latest" class="option">최신순</option>
                <option value="recommend" class="option">추천순</option>
            </select>
        </div>
    </div>
    <!--// 리스트 정렬 -->

    <div v-if="listUse.length !== 0">
        <!-- 디자인 TYPE 1 -->
        <ul :class="`list_type1`" v-if="type === '1'">
            <li class="item" v-for="(info, idx) in listUse" :key="idx">
                <router-link :to="`/detail/${info.id}`" class="item_cont">
                    <div class="info_container">
                        <div class="container">
                            <span class="tag_list1" v-if="info.tab">
                                <span class="item">{{ info.tab }}</span>
                            </span>
                            <TheIcon
                            v-if="info.recommend"
                            aria-label="추천"
                            class="recommend"
                            size="sm"
                            icon="star1" />
                        </div>
                        <span class="title">{{ info.title }}</span>
                        <p class="text" v-if="info.text">{{ info.text }}</p>
                        <span class="tag_list2">
                            <span class="item" v-for="(item, idx) in info.tags" :key="idx"># {{ item }}</span>
                        </span>
                    </div>
                    <div class="visual" :style="{ backgroundColor: `${info.color}` }">
                        <img :src="info.image" :alt="info.alt" class="img">
                    </div>
                </router-link>
            </li>
        </ul>
        <!--// 디자인 TYPE 1 -->
    </div>
    <!-- {{ listUse }} -->
    
    <!-- NO DATA -->
    <div v-if="listUse.length == 0">
        없음
    </div>
    <!--// NO DATA -->
</template>

<script>
import TheIcon from '@/components/TheIcon.vue';

export default {
    name: 'TheList',
    data(){
        return {
            listUse: [...this.list],
        }
    },
    props: {
        list: Object,
        type: String,
        url: String,
        tabText: String,
        setting: Boolean
    },
    components: {
        TheIcon
    },
    methods: {
        selectSort(selectValue){
            if(selectValue === 'latest') {
                this.listUse = [...this.list];
            } else {
                this.listUse.sort(function(a, b){
                    if(selectValue === 'recommend') {
                        return a.recommend === b.recommend ? 0 : a.recommend ? -1 : 1;
                    }
                })
            }
        }
    }
}
</script>

<style>
</style>
