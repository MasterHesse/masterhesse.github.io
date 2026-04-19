<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in" @after-enter="onTransitionComplete">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
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
  components: { Header, Footer, Loading },
  data() { return { isLoading: false, loadingTimer: null }; },
  methods: {
    onTransitionComplete() {
      if (this.loadingTimer) clearTimeout(this.loadingTimer);
      this.loadingTimer = setTimeout(() => {
        this.isLoading = false;
      }, 400);
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.isLoading = true;
      next();
    });
    // 安全后备：如果transition事件没触发，2秒后强制关闭loading
    this.$router.afterEach(() => {
      setTimeout(() => {
        if (this.isLoading) {
          this.isLoading = false;
        }
      }, 800);
    });
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
  padding: 40px 0;
}
.page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter-from, .page-fade-leave-to {
  opacity: 0;
}
</style>