<template>
  <div class="feature-view">
    <h4>本周流行</h4>
    <ul class="wrap">
        <li v-for="item in data" :key="item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.text}}</p>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props: {
      data: {
          type: Array
      }
  }
};
</script>

<style scoped>
.feature-view .wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.feature-view .wrap li {
    width: 25%;
    text-align: center;
}
</style>