<template>
  <div class="resume-wrapper fade-in-up">
    <div class="container">
      <div class="profile-section">
        <div class="avatar-box">
          <img src="@/assets/Avatar.PNG" alt="Avatar" class="avatar" />
        </div>
        <div class="info-box">
          <h1 class="name">Master Hesse</h1>
          <div class="tag-row">
            <span>Junior Developer</span>
            <span>Software Engineer</span>
            <span>Experienced game player</span>
          </div>

          <div class="social-links">
            <a href="https://github.com/MasterHesse" target="_blank" class="s-btn github">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://dev.to/masterhesse" target="_blank" class="s-btn devto">
              <i class="fab fa-dev"></i>
            </a>
            <a href="https://space.bilibili.com/407512807" target="_blank" class="s-btn bilibili">
              <i class="fab fa-bilibili"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="details-section">
        <div class="card">
          <h3>Education</h3>
          <p>• B.S. in CS, Hangzhou Dianzi University</p>
          <p>• B.S. in CS, ITMO University (Second Degree)</p>
          <p>• M.Sc. Candidate, PolyU (Expected 2026-2027)</p>
        </div>

        <div class="card highlight">
          <h3>Tech Stack</h3>
          <p><b>Java:</b> Spring Boot, Spring AI, RAG, DDD</p>
          <p><b>Frontend:</b> Vue.js, JS/TS</p>
          <p><b>Components:</b> PostgresSQL, Docker</p>
          <p><b>Exploring:</b> Rust Ecosystem</p>
        </div>
        
        <div class="card">
          <h3>Research Experience</h3>
          <p>Previously Core Developer at <b>Shenzhen Institute of Advanced Technology, CAS</b>. Lead developer for "Human Mesh Recovery from RGB Images".</p>
        </div>

        <div class="card highlight">
          <h3>Competitions Experience</h3>
          <p><b>National Third Prize</b> in the National College Students' Service Outsourcing Competition (2024)</p>
        </div>

        <div class="card">
          <h3>Game Experience</h3>
          <p>• Death Stranding, Baldur's Gate 3, Black Myth</p>
          <p>• Escape from Takufu, Arc Raiders, GrayZone, Hunt: Showdown</p>
          <p>• MewGenics, Hollow Knight, No Man's Sky</p>
          <p>• Apex, RainbowSix, Valorant</p>
        </div>

        <div class="card highlight">
          <h3>Hobbies and Interests</h3>
          <p>• Coffee (pour-over)</p>
          <p>• Photography(Poorman Version)</p>
          <p>• Tokusatsu(KamenRider, SuperSentai, UltraMan)</p>
          <p>• Furry</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
.profile-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
}
.avatar {
  width: 180px;
  height: 180px;
  border-radius: var(--radius-xl);
  border: 8px solid var(--primary-red);
  object-fit: cover;
}
.name { font-size: 3.5rem; font-weight: 800; color: var(--primary-red); }
.tag-row { display: flex; gap: 10px; margin-top: 10px; }
.tag-row span {
  background: #eee; padding: 5px 15px; border-radius: 50px; font-size: 0.8rem;
}

.social-links { display: flex; gap: 12px; margin-top: 15px; }
.s-btn {
  width: 36px; height: 36px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 1.1rem;
  transition: var(--transition);
}
.github { background: #333; }
.devto { background: #0a0a0a; }
.bilibili { background: #fb7299; }
.s-btn:hover { transform: translateY(-3px); opacity: 0.9; }

.details-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}
.card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}
.card h3 { color: var(--primary-red); margin-bottom: 15px; font-size: 1.2rem; }
.card.highlight { background: var(--primary-red); color: white; }
.card.highlight h3 { color: white; }

@media (max-width: 768px) {
  .profile-section { flex-direction: column; text-align: center; }
}
</style>