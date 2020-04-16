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
    ]
  },
  methods: {
    move: function(x, y){
      this.pos.x += x;
      this.pos.y += y;
    },
    isSale: function(item){
      console.log(item);
      return item.flag;
    },
    deadly: function(){
      this.$destroy();
      console.log('before');
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

  },
  beforeDestroy: function() {
    console.log('before');
  },
});
