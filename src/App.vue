<template>
  <div id="app">
    <Header />
    <main>
      <router-view /> 
    </main>
    <Footer />
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loading
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true; // 启动加载动画
      setTimeout(() => {
        next(); // 页面加载完成后跳转
        this.isLoading = false; // 关闭加载动画
      }, 400); // 模拟加载时间
    });
  }
};
</script>

<style>
/* 全局布局 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 保证页面高度最小为视口高度 */
}

/* Header 样式 */
header {
  background-color: #b33a3a; /* 深红色背景 */
  color: white;
  padding: 10px 20px;
}

/* 页面内容区样式 */
main {
  flex-grow: 1; /* 让内容区撑满剩余空间 */
  padding: 20px;
  margin: 0;
  border: none; /* 去除任何可能的边框 */
}

/* Footer 样式 */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: auto; /* 确保 Footer 始终固定在底部 */
}

/* 全局样式：去除多余的边框或阴影 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* 确保所有元素使用统一的盒模型 */
}

body {
  font-family: Arial, sans-serif;
  font-weight: 400;
}

.art-font {
  font-family: 'Arial Black', Gadget, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}


</style>
