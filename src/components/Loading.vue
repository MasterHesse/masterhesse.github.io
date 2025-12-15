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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5); /* 灰色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 确保它在其他内容上方 */
}

.loading-content {
  text-align: center;
  font-family: 'Fira Code', 'Courier New', monospace; /* 艺术字体 */
}

.loading-gif {
  width: 30%;
  height: 30%;
  /* animation: rotate 1s infinite linear; */
}

.loading-text {
  font-size: 36px;
  color: white;
  margin-top: 10px;
  font-weight: bold;
}

/* @keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */
</style>
