<template>
  <div class="container fade-in-up">
    <h1 class="page-title">Blog</h1>
    <div class="blog-grid">
      <div v-for="post in posts" :key="post.id" class="b-card">
        <div class="b-content">
          <h2>{{ post.title }}</h2>
          <div class="post-meta">
            <span class="date">{{ post.date }}</span>
            <div class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
          <p>{{ post.summary }}</p>
        </div>
        <a :href="post.link" target="_blank" class="b-link">Read Article →</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      posts: [
        // {
        //   id: 1,
        //   title: '深入理解 Rust 的所有权与借用',
        //   date: '2025-01-15',
        //   summary: '探讨 Rust 的核心特性所有权系统，以及如何安全高效管理内存，避免常见陷阱。',
        //   tags: ['Rust', '系统编程'],
        //   link: '/blog/rust-ownership'
        // },
        // {
        //   id: 2,
        //   title: '构建高性能内存数据库：Crab-Cage 设计思路',
        //   date: '2024-12-10',
        //   summary: '详细介绍 Crab-Cage 项目的架构设计、并发模型以及性能优化实践，深入 Redis-like 缓存核心。',
        //   tags: ['数据库', 'Rust', '并发'],
        //   link: '/blog/crab-cage-design'
        // },
        // {
        //   id: 3,
        //   title: '数电 AI 学习平台的技术演进',
        //   date: '2024-11-05',
        //   summary: '从知识图谱构建到自动判题系统的实现，AI 在教育领域的应用探索与完整闭环设计。',
        //   tags: ['AI', '教育技术', 'Vue'],
        //   link: '/blog/diglearn-evolution'
        // },
        // {
        //   id: 4,
        //   title: '嵌入式数据库 Crab-Burrows 存储引擎解析',
        //   date: '2024-09-20',
        //   summary: '类 SQLite 的轻量级存储实现，包括 B+ 树索引、事务和持久化，专注嵌入式场景。',
        //   tags: ['嵌入式', 'Rust', '存储'],
        //   link: '/blog/crab-burrows-storage'
        // }
      ]
    };
  }
};
</script>

<style scoped>
/* 容器与标题样式 (与 ProjectPage 保持一致) */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: 800;
}

/* 博客网格布局 - 仿项目网格 */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

/* 博客卡片样式 */
.b-card {
  background: white;
  padding: 40px;
  border-radius: var(--radius-xl, 20px);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition, all 0.3s ease);
}

.b-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-red, #b33a3a);
  box-shadow: 0 20px 40px rgba(179, 58, 58, 0.1);
}

/* 标题样式 */
.b-card h2 {
  color: var(--primary-red, #b33a3a);
  margin-bottom: 15px;
  font-size: 1.5rem;
}

/* 文章摘要 */
.b-card p {
  color: var(--text-light, #666);
  font-size: 0.95rem;
  margin-bottom: 25px;
  line-height: 1.5;
}

/* 元信息区域 (日期 + 标签) */
.post-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.date {
  font-size: 0.85rem;
  color: #888;
  letter-spacing: 0.3px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f5f5f5;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #555;
  transition: background 0.2s;
}

.tag:hover {
  background: #e9e9e9;
}

/* 阅读链接样式 (仿项目链接) */
.b-link {
  font-weight: 700;
  color: var(--primary-red, #b33a3a);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s;
}

.b-link:hover {
  color: var(--dark-red, #8a2c2c);
}

/* 响应式微调 */
@media (max-width: 768px) {
  .blog-grid {
    gap: 20px;
  }
  .b-card {
    padding: 30px;
  }
  .page-title {
    font-size: 2rem;
  }
}
</style>