// ``と""の違いは、内部で改行コードを含むことができるかどうか

// headerスロットブロックは、親(HTMLなど)から移譲された構成に完全に上書きされる
var headerTemplate = `
  <div id="test">
    <slot name="header">No Title</slot>
  </div>  
`
Vue.component('page-header', {
	template: headerTemplate
})

var contentTemplate = `
  <div>
    <slot name="content">No Contents</slot>
  </div>
`
Vue.component('page-content',{
  template: contentTemplate
})


new Vue({
	el: "#fruits-list" 
})