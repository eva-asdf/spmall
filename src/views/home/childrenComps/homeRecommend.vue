<template>
  <div class="recommend">
      <div v-for="item in recommend" :key='item' class="re-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MainRecommend',
    props: {
        recommend: {
            type: Array
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .recommend {
        display: flex;
    
        text-align: center;
        font-size: 14px;

        width: 100%;
        padding: 15px 0 20px;
        border-bottom: 10px solid #ccc;

    }
    .re-item {
        flex: 1;
    }
    .re-item img {
        width: 80px;
        height: 80px;
    }
</style>