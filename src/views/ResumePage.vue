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
          </div>

          <div class="email-row" @click="copyEmail">
            <img class="email-icon" src="@/assets/icons/envelope.svg" alt="Email" />
            <span class="email-text">work_ybh@163.com</span>
            <span class="email-copy" :class="{ copied: emailCopied }">{{ emailCopied ? '✓ Copied' : 'Copy' }}</span>
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
          <div class="edu-list">
            <div class="edu-item">
              <img src="@/assets/logos/hdu-logo.svg" alt="Hangzhou Dianzi University Logo" class="edu-logo" />
              <div class="edu-text">
                <p class="edu-school">Hangzhou Dianzi University</p>
                <p class="edu-degree">B.S. in Computer Science</p>
              </div>
            </div>
            <div class="edu-item">
              <img src="@/assets/logos/itmo-logo.svg" alt="ITMO University Logo" class="edu-logo" />
              <div class="edu-text">
                <p class="edu-school">ITMO University</p>
                <p class="edu-degree">B.S. in Computer Science (Second Degree)</p>
              </div>
            </div>
            <div class="edu-item">
              <img src="@/assets/logos/polyu-logo.svg" alt="The Hong Kong Polytechnic University Logo" class="edu-logo" />
              <div class="edu-text">
                <p class="edu-school">The Hong Kong Polytechnic University</p>
                <p class="edu-degree">M.Sc. Candidate (Expected 2026–2027)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Tech Stack</h3>
          <div class="stack-grid">
            <div class="stack-cat">
              <span class="cat-label">Languages</span>
              <div class="skill-item">
                <a class="skill-link" href="https://dev.java/" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/badge/Java-ED8B00?style=flat&amp;logo=openjdk&amp;logoColor=white" alt="Java" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:90%"></span></span>
                <span class="skill-tag proficient">Proficient</span>
              </div>
              <div class="skill-item">
                <a class="skill-link" href="https://www.npmjs.com/package/typescript" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/npm/v/typescript?style=flat&amp;label=TS%2FJS&amp;color=3178C6" alt="TypeScript / JS" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:80%"></span></span>
                <span class="skill-tag skilled">Skilled</span>
              </div>
              <div class="skill-item">
                <a class="skill-link" href="https://www.rust-lang.org/" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/badge/Rust-000000?style=flat&amp;logo=rust&amp;logoColor=white" alt="Rust" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:30%"></span></span>
                <span class="skill-tag exploring">Exploring</span>
              </div>
            </div>
            <div class="stack-cat">
              <span class="cat-label">Frameworks</span>
              <div class="skill-item">
                <a class="skill-link" href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/maven-central/v/org.springframework.boot/spring-boot?style=flat&amp;label=Spring%20Boot&amp;color=6DB33F" alt="Spring Boot" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:90%"></span></span>
                <span class="skill-tag proficient">Proficient</span>
              </div>
              <div class="skill-item">
                <a class="skill-link" href="https://spring.io/projects/spring-ai" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/maven-central/v/org.springframework.ai/spring-ai-core?style=flat&amp;label=Spring%20AI&amp;color=6DB33F" alt="Spring AI" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:70%"></span></span>
                <span class="skill-tag skilled">Skilled</span>
              </div>
              <div class="skill-item">
                <a class="skill-link" href="https://www.npmjs.com/package/vue" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/npm/v/vue?style=flat&amp;label=Vue.js&amp;color=4FC08D" alt="Vue.js" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:75%"></span></span>
                <span class="skill-tag skilled">Skilled</span>
              </div>
            </div>
            <div class="stack-cat">
              <span class="cat-label">Infra &amp; Data</span>
              <div class="skill-item">
                <a class="skill-link" href="https://www.postgresql.org/" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&amp;logo=postgresql&amp;logoColor=white" alt="PostgreSQL" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:75%"></span></span>
                <span class="skill-tag skilled">Skilled</span>
              </div>
              <div class="skill-item">
                <a class="skill-link" href="https://www.docker.com/" target="_blank" rel="noopener">
                  <img class="skill-badge" src="https://img.shields.io/badge/Docker-2496ED?style=flat&amp;logo=docker&amp;logoColor=white" alt="Docker" loading="lazy" />
                </a>
                <span class="skill-bar"><span class="skill-fill" style="width:70%"></span></span>
                <span class="skill-tag skilled">Skilled</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3>Research Experience</h3>
          <div class="exp-list">
            <div class="exp-item">
              <div class="exp-marker">
                <span class="exp-dot"></span>
              </div>
              <div class="exp-body">
                <div class="exp-header">
                  <span class="exp-badge org">CAS</span>
                  <span class="exp-role">Core Developer &amp; First Author</span>
                </div>
                <p class="exp-org">Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences</p>
                <div class="exp-pub">
                  <img class="pub-icon" src="@/assets/icons/document.svg" alt="Publication" />
                  <div class="pub-info">
                    <p class="pub-title">Phy-HHMR: Physics-Aware Holistic Human Mesh Reconstruction</p>
                    <p class="pub-venue">Accepted @ <b>IEEE Transactions on Human-Machine Systems</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Competitions Experience</h3>
          <div class="comp-list">
            <div class="comp-item">
              <span class="comp-year">2024</span>
              <div class="comp-body">
                <span class="comp-award award-gold"><img class="comp-icon" src="@/assets/icons/medal-bronze.svg" alt="Bronze Medal" /> National Third Prize</span>
                <p class="comp-name">National College Students Outsourcing Service Competition</p>
              </div>
            </div>
            <div class="comp-item">
              <span class="comp-year">2025</span>
              <div class="comp-body">
                <span class="comp-award award-silver"><img class="comp-icon" src="@/assets/icons/medal.svg" alt="Medal" /> Participant</span>
                <p class="comp-name">National College Students Outsourcing Service Competition</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Hobbies &amp; Interests</h3>
          <div class="hobby-grid">
            <div class="hobby-card">
              <img class="hobby-icon" src="@/assets/icons/coffee.svg" alt="Coffee" />
              <span class="hobby-name">Coffee</span>
              <span class="hobby-desc">Pour-over enthusiast</span>
            </div>
            <div class="hobby-card">
              <img class="hobby-icon" src="@/assets/icons/camera.svg" alt="Photography" />
              <span class="hobby-name">Photography</span>
              <span class="hobby-desc">Street &amp; casual shots</span>
            </div>
            <div class="hobby-card">
              <img class="hobby-icon" src="@/assets/icons/mask.svg" alt="Tokusatsu" />
              <span class="hobby-name">Tokusatsu</span>
              <span class="hobby-desc">Kamen Rider · Sentai · Ultraman</span>
            </div>
            <div class="hobby-card">
              <img class="hobby-icon" src="@/assets/icons/paw.svg" alt="Furry" />
              <span class="hobby-name">Furry</span>
              <span class="hobby-desc">Fandom &amp; community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emailCopied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('work_ybh@163.com')
    emailCopied.value = true
    setTimeout(() => { emailCopied.value = false }, 2000)
  } catch {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = 'work_ybh@163.com'
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    emailCopied.value = true
    setTimeout(() => { emailCopied.value = false }, 2000)
  }
}
</script>

<style scoped>
.container { width: 70%; margin: 0 auto; padding: 0 24px; }
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

.email-row {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 6px 14px;
  background: #FAFAFA;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s, background 0.2s;
}
.email-row:hover {
  border-color: var(--primary-red);
  background: #FFF5F5;
}
.email-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.email-text {
  font-size: 0.85rem;
  color: #333;
  font-family: 'Courier New', monospace;
}
.email-copy {
  font-size: 0.7rem;
  font-weight: 600;
  color: #999;
  padding: 2px 8px;
  background: #EEE;
  border-radius: 4px;
  transition: all 0.2s;
}
.email-copy.copied {
  color: #1B6D36;
  background: #E6F4EA;
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
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.card {
  background: #FFFFFF;
  padding: 30px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  border: 2px solid #E85D3A;
  color: #000000;
}
.card h3 { color: var(--primary-red); margin-bottom: 15px; font-size: 1.2rem; }

.edu-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.edu-item {
  display: flex;
  align-items: center;
  gap: 18px;
}
.edu-logo {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: contain;
}
.edu-school {
  font-weight: 700;
  color: #000;
  margin: 0;
  font-size: 0.95rem;
}
.edu-degree {
  color: #555;
  margin: 2px 0 0;
  font-size: 0.85rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.stack-cat {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.cat-label {
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--primary-red);
  padding-bottom: 6px;
  border-bottom: 1px solid #f0e0e0;
}
.skill-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}
.skill-link {
  flex: 0 0 100%;
  display: inline-block;
  line-height: 0;
  margin-bottom: 2px;
}
.skill-badge {
  height: 20px;
  display: block;
}
.skill-bar {
  flex: 1 1 60%;
  height: 5px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
  min-width: 40px;
}
.skill-fill {
  display: block;
  height: 100%;
  border-radius: 10px;
  background: var(--primary-red);
  transition: width 0.6s ease;
}
.skill-tag {
  flex: 0 0 auto;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  letter-spacing: 0.3px;
}
.skill-tag.proficient { background: #E6F4EA; color: #1B6D36; }
.skill-tag.skilled { background: #E8EEFB; color: #2D5FAD; }
.skill-tag.exploring { background: #FFF3E0; color: #B86E1C; }

/* Research Experience */
.exp-list {
  display: flex;
  flex-direction: column;
}
.exp-item {
  display: flex;
  gap: 16px;
}
.exp-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 12px;
}
.exp-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary-red);
  margin-top: 6px;
  flex-shrink: 0;
}
.exp-marker::after {
  content: '';
  flex: 1;
  width: 2px;
  background: #f0d0d0;
  margin-top: 4px;
  min-height: 8px;
}
.exp-body {
  flex: 1;
  padding-bottom: 4px;
}
.exp-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}
.exp-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}
.exp-badge.org {
  background: #FFF0E6;
  color: #B85C1A;
  border: 1px solid #F5D0A0;
}
.exp-role {
  font-weight: 700;
  font-size: 0.9rem;
  color: #222;
}
.exp-org {
  font-size: 0.82rem;
  color: #555;
  margin: 2px 0 10px;
  padding-left: 2px;
}
.exp-pub {
  display: flex;
  gap: 10px;
  background: #FAFAFA;
  border: 1px solid #EEE;
  border-radius: 8px;
  padding: 12px 14px;
}
.pub-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 1px;
}
.pub-title {
  font-weight: 700;
  font-size: 0.85rem;
  color: #222;
  margin: 0;
  line-height: 1.4;
}
.pub-venue {
  font-size: 0.78rem;
  color: #666;
  margin: 3px 0 0;
}

/* Competitions */
.comp-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.comp-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.comp-year {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 800;
  color: #fff;
  background: var(--primary-red);
  padding: 3px 10px;
  border-radius: 6px;
  letter-spacing: 0.3px;
  margin-top: 2px;
}
.comp-body {
  flex: 1;
}
.comp-award {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 4px;
}
.comp-icon {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}
.comp-award.award-gold {
  background: #FFF8E1;
  color: #8D6E00;
  border: 1px solid #FFE082;
}
.comp-award.award-silver {
  background: #F5F5F5;
  color: #666;
  border: 1px solid #E0E0E0;
}
.comp-name {
  margin: 0;
  font-size: 0.85rem;
  color: #333;
}

/* Hobbies */
.hobby-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.hobby-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #FAFAFA;
  border: 1px solid #EEE;
  border-radius: 10px;
  padding: 16px 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hobby-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.hobby-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 6px;
}
.hobby-name {
  font-weight: 700;
  font-size: 0.85rem;
  color: #222;
  margin-bottom: 2px;
}
.hobby-desc {
  font-size: 0.7rem;
  color: #888;
}

@media (max-width: 768px) {
  .profile-section { flex-direction: column; text-align: center; }
  .container { padding: 0 16px; }
  .card { padding: 24px 20px; }
  .name { font-size: 2.5rem; }
  .details-section { gap: 18px; }
  .avatar { width: 140px; height: 140px; }
  .stack-grid { grid-template-columns: 1fr; gap: 18px; }
  .hobby-grid { grid-template-columns: repeat(2, 1fr); }
  .exp-item { gap: 10px; }
  .exp-pub { padding: 10px; }
}
</style>