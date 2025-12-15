<template>
  <Header/>
  <section class="resume">
    <!-- 左侧头像区 -->
    <div class="avatar-wrapper">
      <img src="@/assets/Avatar.PNG" alt="Avatar" class="portrait" />
    </div>

    <!-- 右侧内容区 -->
    <div class="content">
      <h1 class="name">Master Hesse</h1>

      <p class="degree">
        Bachelor of Science in Computer Science, Hangzhou Dianzi University
      </p>
      <p class="degree">
        Bachelor of Science in Computer Science, ITMO University (Second Degree)
      </p>

      <p class="languages">
        Languages: English <b>(IELTS 7.0)</b>, Cantonese (Native), Chinese (Native)
      </p>

      <div class="divider"></div>

      <p>
        Previously participated in vision-related projects 
        at the <b>Shenzhen Institute of Advanced Technology, 
        Chinese Academy of Sciences</b>, primarily serving 
        as the <b>Core Developer</b> on "Human Mesh Recovery from RGB Images.” 
        <br>
        The paper is currently under review.
      </p>

      <p>
        Currently focused on learning and practicing software engineering,
        including the Spring framework and agent-related technologies such as
        <b>Spring AI</b> and <b>RAG</b> (Retrieval-Augmented Generation).
      </p>

      <p>
        Proficient in <b>Java</b>, <b>JavaScript</b>, and familiar with frameworks
        like <b>Spring Boot</b> and <b>Vue.js</b>.
      </p>

      <p>
        Experienced in developing web applications and services, with a strong
        foundation in algorithms and data structures.
      </p>

      <p>
        Simultaneously researching and learning the <b>Rust</b> programming
        language and its ecosystem.
      </p>
    </div>
  </section>
  <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default {
  name: 'ResumePage'
};
</script>

<style scoped>
/* ===== 整体布局 ===== */
.resume {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px;
}

/* ===== 左侧头像 ===== */
.avatar-wrapper {
  flex-shrink: 0;
}

.portrait {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;

  border: 4px solid #8b0000; /* 深红色呼应整体风格 */
}

/* ===== 右侧文字内容 ===== */
.content {
  flex: 1;
  line-height: 1.8;
}

/* 姓名 */
.name {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 16px;
}

/* 学位信息 */
.degree {
  font-size: 1rem;
  color: #444;
}

/* 语言 */
.languages {
  margin-top: 12px;
  font-size: 0.95rem;
}

/* 分割线（非常重要的“呼吸感”来源） */
.divider {
  margin: 24px 0;
  width: 80px;
  height: 4px;
  background-color: #b33a3a;
}

/* 正文段落 */
.content p {
  margin-bottom: 14px;
  font-size: 1rem;
}
</style>
