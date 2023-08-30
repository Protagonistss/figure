<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph from 'relation-graph/vue3'
import type { RGJsonData } from 'relation-graph/vue3'
import { useRoute } from 'vue-router'

const route = useRoute()
const relationGraph$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right',
  // defaultLineShape: 4,
  debug: true,
  showDebugPanel: true,
}

onMounted(() => {
  const id = route.query.id
  if (id === 'N1') {
    const graphJsonData:RGJsonData = {
      rootId: 'N1',
      nodes: [
        { id: 'N1', text: '党的理论' },
        { id: 'N2', text: '习近平新时代中国特色社会主义思想' },
        { id: 'N3', text: '习近平新时代中国特色社会主义思想概论' },
        { id: 'N4', text: 'FBKJ2021746' },
        { id: 'N5', text: '普通课程' },
        { id: 'N6', text: '必修' },
      ],
      lines: [
        { from: 'N1', to: 'N2', text: '二级分类' },
        { from: 'N1', to: 'N3', text: '课程名称' },
        { from: 'N1', to: 'N4', text: '课程编码' },
        { from: 'N1', to: 'N5', text: '课程类型' },
        { from: 'N1', to: 'N6', text: '选必修' }
      ],
    }
    relationGraph$.value && relationGraph$.value.setJsonData(graphJsonData, () => {
      console.log('relationGraph ready!');
    })
  } else {
    const graphJsonData:RGJsonData = {
      rootId: 'N3',
      nodes: [
        { id: 'N4', text: '十4' },
        { id: 'N5', text: '十5' },
        { id: 'N6', text: '十6' },
        { id: 'N7', text: '十7' },
        { id: 'N3', text: '十三' },
        { id: 'N9', text: '152****3393' },
      ],
      lines: [
        { from: 'N3', to: 'N9', text: '分享' },
        { from: 'N3', to: 'N4', text: '分享444' },
        { from: 'N3', to: 'N5', text: '分享555' },
        { from: 'N3', to: 'N6', text: '分享666' },
        { from: 'N3', to: 'N7', text: '分享777' },
        { from: 'N9', to: 'N4', text: '分享x' }
      ],
    }
    relationGraph$.value && relationGraph$.value.setJsonData(graphJsonData, () => {
      console.log('relationGraph ready!');
    })
  }
})
</script>

<template>
  <relation-graph ref="relationGraph$" :options="options">
    <template #node="{ node }">
      <div style="padding-top:20px;">{{ node['text'] }}</div>
    </template>
  </relation-graph>
</template>