<template>
  <div class="main">
      <div class="avater clearfix">
          <img src="~assets/img/profile/avatar.svg" alt="" class="float_left">
          <div class="wrap float_left">
              <p>注册/登录</p>
              <p>暂无绑定手机号</p>
          </div>
      </div>
      <div class="card">
          <div class="context">
              <p><strong>0.00</strong>元</p>
              <p>我的余额</p>
          </div>
          <div class="context">
              <p><strong>0</strong>个</p>
              <p>我的优惠</p>
          </div>
          <div class="context">
              <p><strong>0</strong>分</p>
              <p>我的积分</p>
          </div>
      </div>
      <ul class="mesage">
          <li>我的消息</li>
          <li>积分商城</li>
          <li>会员卡</li>
          <li class="kong" @click="toShop">我的购物车</li>
          <li>下载购物app</li>
          <li class="kong">设置</li>
          <li>更多</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'profileMain',
    methods: {
        toShop() {
            this.$router.push('/cart')
        }
    }
}
</script>

<style scoped>
.avater {
    background-color: var(--color-tint);
    width: 100%;
    padding: 10px 20px;
}

.avater img {
    width: 80px;
    height: 80px;
}

.avater .wrap {
    margin-top: 20px;
    color: white;
}

.avater .wrap p:nth-of-type(2){
    margin-left: 20px;
}

.card {
    display: flex;
    padding: 20px 10px;
    background-color: white;
}

.card .context {
    flex: 1;
    text-align: center;
}

.card .context strong {
    color: red;
}

ul.mesage {
    width: 100%;
    padding-left: 40px;
    
}

ul.mesage li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 2px 0;
    text-indent: 10px;

    font-size: 14px;
    background-color: #fff;
}

.kong {
    margin-top: 8px;
    
}
</style>