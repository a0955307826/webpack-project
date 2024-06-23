import { createApp } from "vue";
import App from './App.vue'     // .vue啟動文件
import './static/global.css' 

//將在 id 等於「app」的 HTML 元素中安裝 vue 應用程式（div 到 temptes/index.html 檔案中）
createApp(App).mount('#app');