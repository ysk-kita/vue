var TodoList = {
    props:{
        todos: {
          type: Array,
          required: true
        }
    },
    template: `
        <!-- ②置き換えられたテンプレートをレンダリング -->
        <ul>
            <!-- ③ <todo-list :todos="todolists">でtodosという変数にデータバインディングされた値をループして使う。このtodosには、親コンポーネントのtodolistsの値が入っている -->
          <template v-for="todo in todos">
            <!-- ④ 親コンポーネント内でスロットコンテンツとしてtodoを用いるために、todotaskとしてバインディングする -->
            <slot v-bind:todotask="todo"></slot> <!-- slotにv-bind属性を持たせたものをスロットプロパティと呼ぶ -->
          </template>
        </ul>
    `
}
new Vue({
	el: '#app',
    data: function(){
  	return {
    	todolists: [
      	{id: 1 , text: 'C++' , isCompleted: true },
        {id: 2 , text: 'Java' , isCompleted: false },
        {id: 3 , text: 'Python' , isCompleted: true },
      ]
    }
  },
  components: {
  	TodoList: TodoList
  }
})