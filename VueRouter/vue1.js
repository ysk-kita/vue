var UserData = [
    	{id: 1, name: 'kitano', description: 'hoge fuga'},
    	{id: 2, name: 'kaneko', description: 'hoge piyo'}
]

// def: return to JSON
var getUsersData = function (callbackfunc) {
	// 第二引数で指定した時間経過後に、functionを呼び出す。
  // 呼び出されfunctionは引数で受け取った関数を実行する
	setTimeout(function(){
  	callbackfunc(null, [
    	{id: 1, name: 'kitano'},
    	{id: 2, name: 'kaneko'}
    ])
  }, 1000)
}

// def: return to JSON
var getUser = function (userId, callbackfunc) {
	// 第二引数で指定した時間経過後に、functionを呼び出す。
  // 呼び出されfunctionは引数で受け取った関数を実行する
	setTimeout(function(){
  	var filterd = UserData.filter(function(user){
			return user.id === parseInt(userId, 10)
    })
    callbackfunc(null, filterd && filterd[0])
  }, 1000)
}

// ユーザ作成用関数
var postUser = function(params, callbackfunc){
	setTimeout( function(){
  	params.id = UserData.length + 1
    UserData.push(params)	
    callbackfunc(null, params)
  }, 1000)
}

// ユーザ作成
var UserCreate = {
	template: '#user-create',
  data: function(){
  	return {
    	sending: false,
      user: this.defaultUser(),
      error: null
    }
  },
  created: function(){},  // コンポーネント作成時はなにもしない
	methods: {
  	defaultUser: function() {
    	return {
      	name: '',
        description: ''
      }
    },
    createUser: function(){ // バリデーションで用いる
			if(this.user.name.trim() === ''){
      	this.error = 'Name is Required.'
        return
      }
      if(this.user.description.trim() === ''){
      	this.error = 'Description is Required.'
        return
      }
      postUser(this.user, (function (err, user){
      	this.sending = false
        if(err){
        	this.error = err.toString()
        } else {
        	this.error = null
          this.user = user
          alert('Inserted New User')
          
          this.$router.push('/users')
        }
        
      }).bind(this))
    }
  }
}


// ユーザ詳細コンポーネント
// vue routerの中で定義するには長すぎるオブジェクト型のため,別途オブジェクトとして定義している
var UserDetail = {
	template: '#user-detail',
  data: function(){
  	return {
    	loading: false,
      user: null,
      error: null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {	// watch内で定義した項目を監視できる。監視項目に変化があればイベントを呼び出す
  	'$route': 'fetchData'
  },
  methods: {
  	// 今回の場合はルートに変化があれば、fetchData関数を実行する
  	fetchData: function(){
    	// データの取得処理の実行中なのでloadingフラグをONにする
    	this.loading = true
      
      // 定義しているグローバル関数を呼び出す。
     	// getUserDataにfunctionを渡してコールバックさせる
      getUser(this.$route.params.userId, 
      	(function(err, user){
      	this.loading = false
        if (err) {
        	this.error = err.toString()
        } else {
        	this.user = user
        }      
      }).bind(this)) // コールバック関数でこのインスタンスをthisとするために、bindで紐づける
    }
  }
}

// UserListコンポーネント
var UserList = {
	template: '#user-list',
  data: function(){
  	return {
    	loading: false,
      users: function() { return [] },
      error: null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {	// watch内で定義した項目を監視できる。監視項目に変化があればイベントを呼び出す
  	'$route': 'fetchData'
  },
  methods: {
  	// 今回の場合はルートに変化があれば、fetchData関数を実行する
  	fetchData: function(){
    	// データの取得処理の実行中なのでloadingフラグをONにする
    	this.loading = true
      
      // 定義しているグローバル関数を呼び出す。
     	// getUserDataにfunctionを渡してコールバックさせる
      getUsersData(
      	(function(err, users){
      	this.loading = false
        if (err) {
        	this.error = err.toString()
        } else {
        	this.users = users
        }      
      }).bind(this)) // コールバック関数でこのインスタンスをthisとするために、bindで紐づける
    }
  }
}

// def: vue Router
var router = new VueRouter({
	routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページ</div>'
        }
    },	
    {
      path: '/users', 
      component: UserList	// x-template:user-listをコンポーネントのテンプレートとして指定
    },
    // /users/:userIdより後ろで定義すると、userid=newと解釈されて、UserCreateページではなく、userDetailページにルーティングされてしまう。
    // パターンマッチングとかぶるルートを定義するときは、パターンマッチングよりも前に定義する
    {
      path: '/users/new', 
      component: UserCreate
    },
    {
      path: '/users/:userId', 
      component: UserDetail	// x-template:user-detailをコンポーネントのテンプレートとして指定
    },

  ]
})

var app = new Vue({
	router: router
}).$mount('#app')

