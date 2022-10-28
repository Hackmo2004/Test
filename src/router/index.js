import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/mainPage";
import gradesOfStudent from "@/components/gradesOfStudent";
import examComponent from "@/components/examComponent";

const routes = [
  {
    path: '/',
    component: mainPage
  },
  {
    path: '/grades',
    component: gradesOfStudent
  },
  {
    path: '/exam',
    component: examComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
