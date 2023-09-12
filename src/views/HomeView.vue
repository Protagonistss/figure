<script setup lang="ts">
import { homeModule } from '@/styles/index'
import type { TOption } from '@/types/homeView'
import { useRouter } from 'vue-router'

const router = useRouter()

const options = [
  // { name: '演示', code: 'demo' },
  // { name: '双向树', code: 'bothway-tree' },
  // { name: '集团图谱', code: '' },
  // { name: '组织架构图谱', code: '' },
  // { name: '企业图谱', code: '' },
  // { name: '网络拓扑', code: '' },
  // { name: '人物关系网络', code: 'relation-graph' },
  // { name: '标签', code: 'tag-view' },
  { name: '图谱平台', code: 'chat' },
  { name: '低代码平台', code: 'amis' }
]
const handleClick = (props: TOption) => {
  const { code } = props
  router.push({ name: code })
}
</script>

<template>
  <main :class="homeModule.main">
    <aside :class="homeModule.aside">
      <p :class="homeModule.asideItem" @click="handleClick(option)" v-for="option in options">{{ option.name }}</p>
    </aside>
    <section :class="homeModule.content">
      <RouterView />
    </section>
  </main>
</template>