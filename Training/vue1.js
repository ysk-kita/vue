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
    year: 2019,
    year2: 2020,
    answer: 'はい',
    answers: [],
    radio: 'select',
    selectBox: '',
    multiSelect: [],
    options: [
      {code: 'A', label: 'One'},
      {code: 'B', label: 'Two'},
      {code: 'C', label: 'Three'},
    ],
    selectDay: null,
    minDay: null
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
    },
    inputHandler: function($event){
      this.year2 = $event.target.value;
    },
    formatDate: function(dt){
      var year = dt.getFullYear();
      var month = ('00' + (dt.getMonth()+1)).slice(-2);
      var date =  ('00' + dt.getDate()).slice(-2);
      return year + '-' + month + '-' + date;
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
    },
    // answersリストの値を文字列結合する
    selection: function(){
      return this.answers.join();
    },
    multiSelected: function(){
      return this.multiSelect.length >= 1 ? this.multiSelect.join() : '';
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

    this.selectDay = this.formatDate(new Date());
    this.minDay = this.selectDay;
  },
});
