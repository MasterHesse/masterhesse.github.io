<template>
  <div class="container fade-in-up text-center">
    <h1 class="page-title">Stay Connected</h1>
    <div class="contact-grid">
      <a href="https://github.com/MasterHesse" target="_blank" class="c-btn github">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://dev.to/masterhesse" target="_blank" class="c-btn devto">
        <i class="fab fa-dev"></i> Dev.to
      </a>
      <a href="https://space.bilibili.com/407512807" target="_blank" class="c-btn bilibili">
        <i class="fab fa-bilibili"></i> Bilibili
      </a>
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 800px; margin: 100px auto; text-align: center; }
.contact-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.c-btn {
  padding: 20px 40px;
  border-radius: var(--radius-lg);
  font-weight: 800;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}
.github { background: #333; }
.devto { background: #0a0a0a; }
.bilibili { background: #fb7299; }
.c-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
</style>