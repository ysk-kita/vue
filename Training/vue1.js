var app = new Vue({
  el: '#app',
  data: {
    modelValue: 'test',
    isAvailable: true,
    itemList: [
      {
        key: 'test',
        value: 'test-val',
        flag: true,
        price : 1000000,
      },
      {
        key: 'test2',
        value: 'test-val2',
        flag: false,
        price : 500,
      },
    ],
    message: '',
    stock: 10,
    point: { x:0, y: 0},
  },
  methods: {
    isSale: function(item){
      console.log(item);
      return item.flag;
    },
    deadly: function(){
      this.$destroy();
      console.log('before');
    },
    onMinItem: function(){
      this.stock--;
    },
    mousemoveHandler: function($event){
      this.point.x = $event.clientX;
      this.point.y = $event.clientY;
    }
  },
  filters: {
    format_test: (val)=>{
      return val.toLocaleString();
    },
    attach_unit: (val)=>{
      return '\\' + val + '-';
    }
  },
  computed: {
    isHit: function(){
      return isNaN(this.modelValue);
    }
  },
  watch: {
    // stock変数のステータス変更  を監視
    stock: function(newStock, oldStock){
      if(newStock === 0){
        this.message = 'Sold Out';
      }
    },

  },
  beforeDestroy: function() {
    console.log('before');
  },
  created: function(){
    // インスタンス生成時にハンドラ処理を追加
    //addEventListener('mousemove', this.mousemoveHandler);
  },
});
