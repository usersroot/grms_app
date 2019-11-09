const Home = () =>import ( /* webpackChunkName: "group-foo" */ 'views/home')
const Adminlist = () =>import ( /* webpackChunkName: "group-foo" */ 'views/adminlist')
const Edit = () =>import ( /* webpackChunkName: "group-foo" */ 'views/edit')
const Explain = () =>import ( /* webpackChunkName: "group-foo" */ 'views/explain')
const Foodadd = () =>import ( /* webpackChunkName: "group-foo" */ 'views/food_add')
const Foodlist = () =>import ( /* webpackChunkName: "group-foo" */ 'views/foodlist')
const Orderlist = () =>import ( /* webpackChunkName: "group-foo" */ 'views/orderlist')
const Productadd = () =>import ( /* webpackChunkName: "group-foo" */ 'views/product_add')
const Set = () =>import ( /* webpackChunkName: "group-foo" */ 'views/set')
const Shopadd = () =>import ( /* webpackChunkName: "group-foo" */ 'views/shop_add')
const Shoplist = () =>import ( /* webpackChunkName: "group-foo" */ 'views/shoplist')
const Userlist = () =>import ( /* webpackChunkName: "group-foo" */ 'views/userlist')
const Userdistribute = () =>import ( /* webpackChunkName: "group-foo" */ 'views/user_distribute')
const Error = () =>import ( /* webpackChunkName: "group-foo" */ 'views/error')
const Login = () =>import ( /* webpackChunkName: "group-foo" */ 'views/login')
const Shopedit = () =>import ( /* webpackChunkName: "group-foo" */ 'views/shopedit')
const Userphoto = () =>import ( /* webpackChunkName: "group-foo" */ 'views/userphoto')


export default [{
    path: '/',
    redirect: '/home'
}, {
    path: '/userlist',
    component: Userlist
}, {
    path: '/home',
    component: Home
}, {
    path: '/adminlist',
    component: Adminlist
},{
    path: '/shopedit',
    component: Shopedit
}, {
    path: '/edit',
    component: Edit
}, {
    path: '/explain',
    component: Explain
},{
    path: '/userphoto',
    component: Userphoto
}, {
    path: '/foodadd',
    component: Foodadd
}, {
    path: '/shopadd',
    component: Shopadd
}, {
    path: '/orderlist',
    component: Orderlist
}, {
    path: '/productadd',
    component: Productadd
}, {
    path: '/set',
    component: Set
}, {
    path: '/foodlist',
    component: Foodlist
},{
    path:'/login',
    component:Login
}, 
{
    path: '/shoplist',
    component: Shoplist
}, {
    path: '/userdistribute',
    component: Userdistribute
}, {
    path: '*',
    component: Error
}]