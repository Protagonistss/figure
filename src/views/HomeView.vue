<script setup lang="ts">
import { homeModule } from '@/styles/index'
</script>

<template>
  <main :class="homeModule.main">
    <aside :class="homeModule.aside">
      <p :class="homeModule.asideItem">demo</p>
      <p :class="homeModule.asideItem">双向树</p>
      <p :class="homeModule.asideItem">集团图谱</p>
      <p :class="homeModule.asideItem">组织架构图谱</p>
      <p :class="homeModule.asideItem">企业图谱</p>
      <p :class="homeModule.asideItem">网络拓扑</p>
      <p :class="homeModule.asideItem">任务关系网络</p>
    </aside>
    <section :class="homeModule.content">
      <RouterView />
    </section>
  </main>
</template>