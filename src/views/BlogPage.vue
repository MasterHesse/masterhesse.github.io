<template>
  <Header />
  <div class="page">
    <section class="blogs">
      <h1 class="title">BLOG-LISTS</h1>

      <div class="blog-list">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="blog-card"
        >
          <h2 class="blog-title">{{ blog.title }}</h2>
          <p class="blog-desc">{{ blog.description }}</p>

          <a
            class="blog-link"
            :href="blog.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            阅读更多 →
          </a>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';

export default {
  name: 'BlogPage',
  data() {
    return {
      blogs: [
        // { 
        //   title: '博客 1', 
        //   description: '简要描述，深入技术探讨与分享', 
        //   link: 'https://blog.example.com/post1' 
        // },
      ]
    };
  }
};
</script>

<style scoped>
/* 页面整体 */
.page {
  min-height: 100vh;
  padding: 60px 80px;
  color: white;
}

/* 标题 */
.title {
  color: black;
  font-size: 2.2rem;
  margin-bottom: 40px;
  letter-spacing: 1px;
  text-align: left;
}

/* 博客列表 */
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 50px;
  margin-top: 40px;
}

/* 博客卡片 */
.blog-card {
  padding: 28px;
  border-radius: 18px;
  background: #b33a3a;
  border: 3px solid #b33a3a;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

/* 卡片悬浮效果 */
.blog-card:hover {
  transform: translateY(-6px);
  background-color: #b33a3a;
  border-color: #b33a3a;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
}

/* 博客标题 */
.blog-title {
  color: white;
  font-size: 1.4rem;
  margin-bottom: 14px;
  transition: color 0.3s ease;
}

/* 悬浮时标题变红 */
.blog-card:hover .blog-title {
  color: white;
}

/* 博客描述 */
.blog-desc {
  color: white;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 22px;
}

/* 链接按钮 */
.blog-link {
  background-color: white;
  color: #b33a3a;
  display: inline-block;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 12px;
  border: 1.5px solid white;
  transition: color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
}

/* 链接悬浮效果 */
.blog-link:hover {
  background-color: white;
  color: #ff7f17;
  transform: translateX(4px);
}
</style>
