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
        { id: 'N2', text: '习近平新时代中国特色社会主义思想概论', width: 110, height: 110 },
        { id: 'N2-1', text: 'FBKJ2021746', width: 100, height: 100 },
        { id: 'N2-2', text: '普通课程' },
        { id: 'N2-3', text: '必修' },
        { id: 'N2-4', text: '1.5' },
        { id: 'N2-5', text: '1:43:52' },
        { id: 'N3', text: '现代化产业体系的发展方向与政策重点', width: 110, height: 110 },
        { id: 'N3-1', text: '课程集' },
        { id: 'N3-2', text: '必修' },
        { id: 'N3-3', text: '2' },
        { id: 'N3-4', text: '1:35:00' },
        { id: 'N4', text: '向着新目标 奋楫再出发一一2023年两会总体精神解读', width: 120, height: 120 },
        { id: 'N4-1', text: '课程集' },
        { id: 'N4-2', text: '必修' },
        { id: 'N4-3', text: '2' },
        { id: 'N4-4', text: '1:30:00' },
        { id: 'N5', text: '2023年宏观政策的着力点：扩大国内需求', width: 110, height: 110 },
        { id: 'N5-1', text: '课程集' },
        { id: 'N5-2', text: '必修' },
        { id: 'N5-3', text: '2' },
        { id: 'N5-4', text: '1:43:20' },
        { id: 'N6', text: '实施城市更新行动，促进区域优势互补、各展其长', width: 120, height: 120 },
        { id: 'N6-1', text: '课程集' },
        { id: 'N6-2', text: '必修' },
        { id: 'N6-3', text: '2' },
        { id: 'N6-4', text: '1:43:20' }
      ],
      lines: [
        { from: 'N1', to: 'N2', text: '课程名称' },
        { from: 'N1', to: 'N3', text: '课程名称' },
        { from: 'N1', to: 'N4', text: '课程名称' },
        { from: 'N1', to: 'N5', text: '课程名称' },
        { from: 'N1', to: 'N6', text: '课程名称' },
        { from: 'N2', to: 'N2-1', text: '课程编码' },
        { from: 'N2', to: 'N2-2', text: '课程类型' },
        { from: 'N2', to: 'N2-3', text: '选必修' },
        { from: 'N2', to: 'N2-4', text: '学时' },
        { from: 'N2', to: 'N2-5', text: '时长' },
        { from: 'N3', to: 'N3-1', text: '课程类型' },
        { from: 'N3', to: 'N3-2', text: '选必修' },
        { from: 'N3', to: 'N3-3', text: '学时' },
        { from: 'N3', to: 'N3-4', text: '时长' },
        { from: 'N4', to: 'N4-1', text: '课程类型' },
        { from: 'N4', to: 'N4-2', text: '选必修' },
        { from: 'N4', to: 'N4-3', text: '学时' },
        { from: 'N4', to: 'N4-4', text: '时长' },
        { from: 'N5', to: 'N5-1', text: '课程类型' },
        { from: 'N5', to: 'N5-2', text: '选必修' },
        { from: 'N5', to: 'N5-3', text: '学时' },
        { from: 'N5', to: 'N5-4', text: '时长' },
        { from: 'N6', to: 'N6-1', text: '课程类型' },
        { from: 'N6', to: 'N6-2', text: '选必修' },
        { from: 'N6', to: 'N6-3', text: '学时' },
        { from: 'N6', to: 'N6-4', text: '时长' }
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
      <div style="padding-top:20px;" :title="node['text']">{{ node['text'] }}</div>
    </template>
  </relation-graph>
</template>