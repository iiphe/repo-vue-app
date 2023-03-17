import { createRouter, createWebHistory } from 'vue-router';
import GithubRepoVue from '../components/GithubRepo.vue';
import RepoDetail from '../components/RepoDetail.vue';
import NotFound from '../components/NotFound.vue';


 const routes = [
  {
    path: '/',
    component: GithubRepoVue,
    props:true
  },

  {
    path:"/RepoDetail/:name",
    component: RepoDetail, 
    props: true

  },

  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

 const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;