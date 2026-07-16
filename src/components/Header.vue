<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">MASTERHESSE</div>
      <ul class="nav-list">
        <li><router-link to="/" class="nav-link">HOME</router-link></li>
        <li><router-link to="/projects" class="nav-link">PROJECTS</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 1.5rem 10%;
  background: var(--dark-red); /* 大面积红色参与 */
  box-shadow: 0 4px 20px rgba(179, 58, 58, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-weight: 800;
  font-size: 1.4rem;
  letter-spacing: 2px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.15);
}

.router-link-active {
  background: white !important;
  color: var(--primary-red) !important;
  box-shadow: var(--shadow-sm);
  font-weight: 700;
}
</style>