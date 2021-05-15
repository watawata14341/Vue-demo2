import { createApp } from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

const app = createApp(App)
app.component('LikeNumber', LikeNumber)
app.directive('border', 
    function(el,binding) {
        el.style.border = "solid black 2px";
        el.style.borderWidth = binding.value.width;
        el.style.borderColor = binding.value.color;
        el.style.borderStyle = binding.arg;
        if (binding.modifiers.round) {
            el.style.borderRadius = '0.5rem'
        }
        if (binding.modifiers.shadow) {
            el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)"
        }
    }
    /*
    {
    bind(el, binding, vnode) {
        // ディレクティブが初めて対象の要素に紐づいた時
    },
    inserted(el, binding, vnode) {
        // 親のーどに挿入された時
    },
    update(el, binding, vnode, oldVnode) {
        // コンポーネントが更新された度。子コンポーネントが更新される前
    },
    componentupdated(el, binding, vnode, oldVnode) {
        // コンポーネントが更新された度。子コンポーネントが更新された後
    },
    unbind(el, binding, vnode) {
        // ディレクティブが紐づいてる要素から取り除かれた時
    },
    }
    */
)
/*
filtersは2.xまで
app.filetr("upperCase",function(value){
    return value.toUpperCase();
});*/
app.mount('#app')
