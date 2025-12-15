<template>
  <header class="header">
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="nav-link">MASTERHESSE</router-link>
        </li>
        <li>
          <router-link to="/projects" class="nav-link">PROJECTS</router-link>
        </li>
        <li>
          <router-link to="/blog" class="nav-link">BLOGS</router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-link">CONTACTS</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* 整体 Header 区域 */
.header {
  padding: 24px 48px;
}

/* 导航列表 */
.nav-list {
  list-style: none;
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 0;
  padding: 0;
}

/* 链接基础样式 */
.nav-link {
  font-weight: bolder;
  color: white;
  text-decoration: none;
  font-size: 1.05rem;
  letter-spacing: 0.5px;

  padding: 10px 18px;
  border-radius: 14px;

  border: 1.5px solid transparent;

  transition:
    color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

/* 悬浮效果 */
.nav-link:hover {
  color: #ff7f17;
  background-color: white;

  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.35);

  transform: translateY(-2px);
}

/* 当前路由高亮（可选，但很推荐） */
.router-link-active {
  background-color: white;
  color: #b33a3a;
}
</style>
