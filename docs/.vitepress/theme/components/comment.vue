<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { onMounted } from "vue";
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;
const gitalk = new Gitalk({
  clientID: 'd155e925be86a8811994',
  clientSecret: '28ec6d7f02a636b4265dafa1ca2578e8f8866ee7',
  repo: 'https://github.com/ChowChiKwan/ChowChiKwan.github.io',      // The repository of store comments,
  owner: 'ChowChiKwan',
  admin: ['ChowChiKwan'],
  id: window.location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: true  // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
