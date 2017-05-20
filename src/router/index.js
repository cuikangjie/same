import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);


function getRouter(name) {
    return require(`../view/${name}.vue`)
}
export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/search'
        },
        {
            path: '/search',
            component: getRouter('search')
        },
        {
            path: '/detail/:id',
            component: getRouter('detail')
        },
        {
            path: '/user/:id',
            name:'user',
            component: getRouter('userDetail'),

        },
        {
            path: '/img/:src',
            component: getRouter('img')
        },
        {
            path: '/userChannel/:id/:uid',
            component: getRouter('userChannel')
        }


    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});
