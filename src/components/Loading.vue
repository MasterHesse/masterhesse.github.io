<template>
  <div class="loading-overlay">
    <div class="loading-content">
      <img src="../assets/creeping.gif" alt="loading" class="loading-gif" />
      <h2 class="loading-text">Loading...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px); /* 强力模糊背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.loading-content {
  text-align: center;
  font-family: 'Fira Code', 'Courier New', monospace; /* 艺术字体 */
}

.loading-gif {
  width: 50%;
  height: 50%;
}

.loading-text {
  font-family: 'Courier New', monospace;
  color: var(--primary-red);
  letter-spacing: 4px;
  text-transform: uppercase;
}
</style>
