<template>
  <div class="item-params" v-if="ItemParams">
    <div class="info">
      <p class="info-key">{{ ItemParams.info.key }}</p>
      <ul>
        <li v-for="item in ItemParams.info.set" :key="item" class="item">
          <span class="key">{{ item.key }}</span>
          <span class="value">{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div class="rule">
      <p class="info-key">{{ ItemParams.rule.key }}</p>
      <ul>
        <li class="item" v-for="item in ItemParams.rule.tables[0]" :key="item">
          <span class="item-key" v-for="des in item" :key="des">{{ des }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: {
    ItemParams: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.item-params {
  border-bottom: 4px solid #ccc;
}

.info-key {
  text-align: center;
  padding: 10px 0;
}

.item {
  border-bottom: 1px solid #ccc;
  height: 60px;
  width: 100%;

  display: flex;
}

.key {
  flex: 1;
  line-height: 60px;
}

.value {
  flex: 7;
  color: rgb(247, 49, 49);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-key {
  flex: 1;
  line-height: 60px;
  text-align: center;
}

ul {
  width: 100%;
}
</style>