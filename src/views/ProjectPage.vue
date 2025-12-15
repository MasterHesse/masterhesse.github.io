<template>
      <Header/>

  <div class="page">

    <section class="projects">
      <h1 class="title">PROJECT-LIST</h1>

      <div class="project-list">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-desc">{{ project.description }}</p>

          <a
            class="project-link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Details →
          </a>
        </div>
      </div>
    </section>

  </div>

  <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          title: 'Crab-Cage 蟹笼',
          description:
            '一个用 Rust 实现的个人学习版 Redis-like 内存数据缓存，关注数据结构与并发模型。',
          link: 'https://github.com/MasterHesse/Crab-Cage',
        },
      ],
    };
  },
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
}

/* 项目列表 */
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
}

/* 项目卡片 */
.project-card {
  padding: 28px;
  border-radius: 18px;

  background: #b33a3a;
  border: 3px solid #b33a3a;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

/* 悬浮卡片 */
.project-card:hover {
  transform: translateY(-6px);
  border-color: #b33a3a;
  background-color: #b33a3a;
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.45);
}

/* 项目标题 */
.project-title {
  font-size: 1.4rem;
  margin-bottom: 14px;

  transition: color 0.3s ease;

  color: white;
}

.project-card:hover .project-title {
  color: white;
}

/* 描述 */
.project-desc {
  color:white;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 22px;
}

/* 链接按钮 */
.project-link {
  display: inline-block;
  background-color: white;
  color: #b33a3a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: bold;

  padding: 8px 16px;
  border-radius: 12px;

  border: 1.5px solid white;

  transition:
    color 0.25s ease,
    background-color 0.25s ease,
    transform 0.25s ease;
}

/* 链接悬浮 */
.project-link:hover {
  background-color: white;
  color: #ff7f17;
  transform: translateX(4px);
}
</style>
