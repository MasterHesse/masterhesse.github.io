import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ResumePage from './views/ResumePage.vue';
import ProjectPage from './views/ProjectPage.vue';
import BlogPage from './views/BlogPage.vue';
import ContactPage from './views/ContactPage.vue';

const routes = [
  { path: '/', component: ResumePage },
  { path: '/projects', component: ProjectPage },
  { path: '/blog', component: BlogPage },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory('/masterhesse.github.io/'),
  routes
});

createApp(App).use(router).mount('#app');
