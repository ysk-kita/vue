var incrementButton = Vue.extend({
  template: '<span><button v-on:click="addToCart">追加</button></span>',
  methods: {
    addToCart: function () {
      this.$emit('increment') // incrementカスタムイベントの発火
    }
  },
})
// 数量を減らす用のコンポーネント
var decrementButton = Vue.extend({
  template: '<span><button v-on:click="subToCart">減少</button></span>',
  methods: {
    subToCart: function () {
    	// htmlコンポーネントのv-on:decrementで指定している関数を呼び出す
      this.$emit('decrement') 
    }
  },
})

// fruit-counterブロックにマウントするためのvueコンストラクタ
new Vue({
  el: '#fruits-counter',
  components:{
    'increment-button': incrementButton,
    'decrement-button': decrementButton,    
  },
  data: {
    total: 0,
    fruits: [
      {name: '梨', sum: 0 },
      {name: 'イチゴ', sum: 0}
    ]
  },
  methods: {
    incrementCartStatus: function (name,sum) {
    	if(name=="梨"){
      	this.fruits[0].sum = sum
      } else {
      	this.fruits[1].sum = sum
      }
      this.total += 1
    },
    decrementCartStatus: function (name,sum) {
    	if(name=="梨"){
      	this.fruits[0].sum = sum
      } else {
      	this.fruits[1].sum = sum
      }
      this.total -= 1
    }
  }
})