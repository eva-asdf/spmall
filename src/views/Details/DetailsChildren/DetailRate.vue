<template>
  <div class="detail-rate" v-if="rate">
    <div class="clearfix wrap">
      <div class="title float_left">用户评价{{ rate.cRate }}</div>
      <div class="more float_right">更多</div>
    </div>
    <ul class="list">
      <li :key="item" v-for="item in rate.list">
        <div>
          <img :src="item.user.avatar" class="user-ava" />
          <span class="name">{{ item.user.uname }}</span>
          <div class="content">
            <div>{{ item.content }}</div>
						<div class="imgs">
							<img :src="imgs" alt="" v-for="(imgs,index) in item.images" :key="index">
						</div>
						
          </div>
          <div class="style">
            {{ getTime(item) + " " + item.style }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailRate",
  props: {
    rate: {
      type: Object,
    },
  },
  methods: {
    getTime(item) {
      let d = new Date();
      d.setTime(item.created * 1000);
      return d.getFullYear() + "-" + (d.getMonth() + 1)+"-" + d.getDay();
    },
  },
};
</script>

<style scoped>
.detail-rate {
  font-size: 14px;
}

.wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;
  border-bottom: 2px solid #ccc;
  font-size: 14px;
}

.list {
  padding: 0 15px;
}

.user-ava {
  width: 40px;
  border-radius: 50%;
}

.style {
  font-size: 12px;
  color: #777;
  margin-top: 15px;
}

.imgs > img{
  width: 100px;
}
</style>