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

new Vue({
    // id=app配下ではコンポーネント定義したカスタムタグを使えるようにする
    el: '#app',
    components: {
        MyButton: MyButton,
        MyPage: MyPage
    }
})