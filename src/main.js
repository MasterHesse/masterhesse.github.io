import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import ResumePage from './views/ResumePage.vue';
import ProjectPage from './views/ProjectPage.vue';
import BlogPage from './views/BlogPage.vue';

const routes = [
  { path: '/', component: ResumePage },
  { path: '/projects', component: ProjectPage },
  { path: '/blog', component: BlogPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');
