import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import TutorialManagementComponent from "../learning/pages/tutorial-management.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',    component: HomeComponent},
        { path: '/tutorials', component: TutorialManagementComponent, meta: { title: 'Tutorials' } },
        { path: '/about',   component: AboutComponent},
        { path: '/',        redirect: '/home'}
    ]
});

export default router;