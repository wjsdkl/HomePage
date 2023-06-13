// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')

console.log(
    "\n" +
      " %c 项目地址" +
      " %c https://github.com/XzaiCloud/HomePage " +
      "\n",
    "color: #fff; background: #fd79a8; padding:5px 0;",
    "color: #fff; background: #66ccff; padding:5px 0;"
);

var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    const hitokoto = document.querySelector('#hitokoto');
    hitokoto.innerText = data.hitokoto;
  }
}
xhr.send();