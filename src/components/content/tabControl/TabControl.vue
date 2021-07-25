<template>
  <div class="tab-control">
    <div v-for="(item, index) in data" :key="index"
    :class="{active: index == cindex}"
    @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        data: {
            type: Array
        }
    },
    data() {
        return {
            cindex: 0
        }
    },
    methods: {
        itemclick(index) {
            this.cindex = index;
            this.$emit('tabClick',index)
        }
    }
};
</script>

<style scoped>
.tab-control {
    display: flex;
    text-align: center;
    background-color: #fff;
}
.tab-control > div {
    flex: 1;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
}
.tab-control > div span {
    box-sizing: border-box;
    height: 100%;
    padding-bottom:5px ;
}

.tab-control .active {
    color: rgb(252, 60, 92);
}
.tab-control .active span{
    border-bottom: 3px solid rgb(252, 60, 92);
    border-radius: 1px;
}
</style>