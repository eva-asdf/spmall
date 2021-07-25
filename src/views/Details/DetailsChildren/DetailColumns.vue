<template>
  <div class="columns">
      <div v-for="item in columns" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
    name: 'DetailColums',
    props: {
        columns: {
            type: Array
        }
    }
}
</script>

<style scoped>
.columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 3px solid #ccc;
}

.columns div {
    flex: 1;
    font-size: 12px;
    text-align: center;
    color: #555;
}

.columns div:nth-child(1) {
    text-align: left;
}

.columns div:nth-child(3) {
    text-align: right;
}
</style>