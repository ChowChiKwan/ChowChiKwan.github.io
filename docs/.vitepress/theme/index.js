// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Comment from "./components/comment.vue";
// import 'many-pictures/es/style.css'
// import manyPictures from 'many-pictures';
  
export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    app.component("Comment", Comment);
    // app.use(manyPictures);
  },
};
