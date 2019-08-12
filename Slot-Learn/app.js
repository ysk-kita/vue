// カスタムコンポーネントmy-buttonの定義
var MyButton = {
    template: `
        <button>
            <!-- 
            親からコンテンツが送られてくれば、<slot>タグ内のコンテンツは無効になるが、送られてこなかった場合は、<slot>タグ内のコンテンツが有効になり、表に出る。その際も<slot>タグは消える
            -->
            <slot><div>OK</div></slot>
        </button>
    `
}

var MyPage = {
    template: `
    <div class="slottest">
        <!-- 親からheader属性のスロット(slot="header")指定時に置き換えられる -->
        <header><slot name="header"></slot></header>
        <!-- 単一スロットとして扱われ、属性を指定しなかったコンテンツに置き換えられる -->
        <main><div class="main"><slot></slot></div></main>
        <!-- 親からfooter属性のスロット(slot="footer")指定時に置き換えられる -->
        <footer><slot name="footer"></slot></footer>
    </div>
    `
}

// カスタムコンポーネントmy-buttonの定義
var MyButton2 = {
    // new Vueで定義しているcomponentsと親子関係でこちらが子であるため、データバインディングを行う場合は、親のdataを参照し、子のdataは適用されない
    // また、親のdataには無いが、子のdataには定義されている項目があるといった場合でも、子のdataを参照することはない
    data: function(){
        return {
            textLabel: 'child scope',
            hoge: 'hoge'
        }  
    },
    template: `
        <button>
            <slot><div>OK</div></slot>
        </button>
    `
}

new Vue({
    // id=app配下ではコンポーネント定義したカスタムタグを使えるようにする
    el: '#app',
    data: function(){
        return {
            textLabel: 'parent scope'
        }
    },
    components: {
        MyButton: MyButton,
        MyPage: MyPage,
        MyButton2: MyButton2
    }
})