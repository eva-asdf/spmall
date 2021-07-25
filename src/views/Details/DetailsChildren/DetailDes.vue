<template>
  <div class="detail-des" v-if="detailInfo">
    <div class="desc">
      {{ detailInfo.desc }}
      <div class="tap"></div>
      <div class="tap"></div>
    </div>
    <div>
      <div
        class="detail-image"
        v-for="item in detailInfo.detailImage"
        :key="item"
      >
        <p>{{ item.key }}</p>
        <img
          :src="img"
          class="list"
          v-for="img in item.list"
          :key="img"
          @load="desImgload"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDes",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  methods: {
    desImgload() {
      this.$emit("desImgLoaded");
    },
  },
};
</script>

<style scoped>
.detail-des {
  border-bottom: 5px solid #ccc;
}

.desc {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 20px;

  text-align: center;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

.desc::before,
.desc::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 30%;
  background-color: #a9a9a9;
}

.tap:nth-of-type(1),
.desc::before {
  top: 0px;
  left: 20px;
}

.tap:nth-of-type(2),
.desc::after {
  right: 20px;
  bottom: 0px;
}

.tap {
  width: 5px;
  height: 5px;
  background-color: #454545;
  position: absolute;
  z-index: 99;
}

.detail-image img {
  width: 372px;
}
</style>