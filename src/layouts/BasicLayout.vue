<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header"><GlobalHeader /></a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.codefather.cns" target="_blank"> 编程小将 by 程序员sy </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scoped>
#basicLayout .header {
  color: unset;
  background: white;
  padding-inline: 20px;
  margin-bottom: 16px;
}

#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
}

#basicLayout .footer {
  text-align: center;
  background: #efefef;
  padding: 16px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
