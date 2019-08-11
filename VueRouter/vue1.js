// root def
// <router-link>でto属性に指定したパスのコンポーネントを呼び出す。パスが一致しなければ何も返さない
// <router-view>は、指定されたルートが持つテンプレートをレンダリングする
var router2 = new VueRouter({
	routes: [
    {
      path: '/index',
      component: {
        template: '<div>Top page</div>'
        }
    },	
    {
    	// :xxxとすると /users/xxxでurlパターンごとの処理を行える
      path: '/users/:userId', 
      name: 'user', 
      component: {
        template: '<div>{{$route.params.userId}}</div>'
        }
    }  
  ]
})
// フック関数を使う場合、VueRouter変数.beforeEach とする
router2.beforeEach( function (to, from, next) {
	if (to.path === '/users'){
  	next('/index')
  } else {
  	next()
  }
})

var app = new Vue({
	router: router2
}).$mount('#app')

