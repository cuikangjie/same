import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);


function getRouter(name){
  return require(`../view/${name}.vue`)
}
export default new VueRouter({
  routes: [
    {path: '/', redirect: '/detail/1032823' },
    {path:'/search', component: getRouter('search')},
    {path:'/detail/:id', component: getRouter('detail')},

  ]
});
