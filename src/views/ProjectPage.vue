<template>
  <div class="container fade-in-up">
    <h1 class="page-title">Project List</h1>
    <div class="project-grid">
      <div v-for="(p, i) in projects" :key="i" class="p-card">
        <div class="p-content">
          <h2>{{ p.title }}</h2>
          <p>{{ p.description }}</p>
        </div>
        <a :href="p.link" target="_blank" class="p-link">Check Details →</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Crab-Cage', description: '基于 Rust 实现的高性能 Redis-like 内存数据缓存，深度探索并发模型。', link: 'https://github.com/MasterHesse/Crab-Cage' },
        { title: 'DigLearn', description: '数电 AI 学习平台，提供从知识图谱到自动判题的完整闭环。', link: 'https://github.com/MasterHesse/digital-circuit-ai-learning-platform' },
        
        // { title: 'ACTrade', description: '激活码交易平台，为开发者提供加密软件托管及售卖全流程服务。', link: 'https://github.com/MasterHesse/activation_code_trade_platform' }
      ]
    };
  }
};
</script>

<style scoped>
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.page-title { font-size: 2.5rem; margin-bottom: 40px; font-weight: 800; }
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}
.p-card {
  background: white;
  padding: 40px;
  border-radius: var(--radius-xl);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
}
.p-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-red);
  box-shadow: 0 20px 40px rgba(179, 58, 58, 0.1);
}
.p-card h2 { color: var(--primary-red); margin-bottom: 15px; }
.p-card p { color: var(--text-light); font-size: 0.95rem; margin-bottom: 25px; }
.p-link {
  font-weight: 700;
  color: var(--primary-red);
  display: flex;
  align-items: center;
}
.p-link:hover { color: var(--dark-red); }
</style>