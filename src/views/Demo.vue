<script setup lang="ts">
import { onMounted, ref, h } from 'vue'
import RelationGraph from 'relation-graph/vue3'
import type { RGJsonData, RGNode } from 'relation-graph/vue3'
import { useRoute } from 'vue-router'
import { useNotification, useMessage, NAvatar } from 'naive-ui'
import type { NotificationReactive } from 'naive-ui'
import DemoContent from '@/components/DemoContent.vue'

const route = useRoute()
const relationGraph$ = ref<RelationGraph>()
const options = {
  defaultExpandHolderPosition: 'right',
  // defaultLineShape: 4,
  debug: true,
  showDebugPanel: true,
}

const notification = useNotification()
const message = useMessage()
const notificationRef = ref<NotificationReactive | null>(null)
const nodeMaps:{ [key: string]: RGNode } = {}

const displayNotification = () => {
  notificationRef.value = notification.create({
    title: "信息展示",
    content: () => {
      return h(DemoContent, { dataSource: Object.keys(nodeMaps).map((key: string) => nodeMaps[key])})
    },
    meta: new Date().toLocaleString(),
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }),
    onAfterLeave: () => {
      message.success("closed")
    }
  })
}

const updateNotification = () => {
  if (notificationRef.value) {
    notificationRef.value.content = () => {
      return h(DemoContent, { dataSource: Object.keys(nodeMaps).map((key: string) => nodeMaps[key])})
    }
  }
}

const onNodeClick = (node: RGNode) => {
  const { id } = node
  const graph = relationGraph$.value && relationGraph$.value.getInstance()
  if (graph) {
    if (graph.getNodeById(node.id).opacity !== 0.3) {
      graph.getNodeById(node.id).opacity = 0.3
      nodeMaps[id] = node
    } else {
      delete nodeMaps[id]
      graph.getNodeById(node.id).opacity = 1
    }
  }
  if (!notificationRef.value) {
    displayNotification()
  } else {
    updateNotification()
  }
  if (!Object.keys(nodeMaps).length) {
    if (notificationRef.value) {
      notificationRef.value.destroy()
      notificationRef.value = null
    }
  }
  return true
}

onMounted(() => {
  const id = route.query.id
  if (id === 'N1') {
    const graphJsonData:RGJsonData = {
      rootId: 'N1',
      nodes: [
        { id: 'N1', text: '党的理论', data: { content: ['习近平新时代中国特色社会主义思想', '习近平新时代中国特色社会主义思想概论', 'FBKJ2021746', '普通课程'] } },
        { id: 'N2', text: '习近平新时代中国特色社会主义思想概论', data: { content: ['FBKJ2021746', '普通课程', '必修', '基础类']}, width: 110, height: 110 },
        { id: 'N2-1', text: 'FBKJ2021746',  data: { content: ['普通课程', '必修', '1.5', '1:43:52'] }, width: 100, height: 100 },
        { id: 'N2-2', text: '普通课程', data: { content: ['必修', '1.5', '1:43:52'] } },
        { id: 'N2-3', text: '必修' },
        { id: 'N2-4', text: '1.5' },
        { id: 'N2-5', text: '1:43:52' },
        { id: 'N3', text: '现代化产业体系的发展方向与政策重点', data: { content: ['党的理论', '中央重要会议精神和决策部署', '课程集', '必修'] }, width: 110, height: 110 },
        { id: 'N3-1', text: '课程集' },
        { id: 'N3-2', text: '必修' },
        { id: 'N3-3', text: '2' },
        { id: 'N3-4', text: '1:35:00' },
        { id: 'N4', text: '向着新目标 奋楫再出发一一2023年两会总体精神解读', data: { content: ['党的理论', '中央重要会议精神和决策部署', '课程集', '必修'] }, width: 120, height: 120 },
        { id: 'N4-1', text: '课程集' },
        { id: 'N4-2', text: '必修' },
        { id: 'N4-3', text: '2' },
        { id: 'N4-4', text: '1:30:00' },
        { id: 'N5', text: '2023年宏观政策的着力点：扩大国内需求', data: { content: ['党的理论', '中央重要会议精神和决策部署', '课程集', '必修'] }, width: 110, height: 110 },
        { id: 'N5-1', text: '课程集' },
        { id: 'N5-2', text: '必修' },
        { id: 'N5-3', text: '2' },
        { id: 'N5-4', text: '1:43:20' },
        { id: 'N6', text: '实施城市更新行动，促进区域优势互补、各展其长', data: { content: ['党的理论', '中央重要会议精神和决策部署', '课程集', '必修'] }, width: 120, height: 120 },
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
  <relation-graph :on-node-click="onNodeClick" ref="relationGraph$" :options="options">
    <template #node="{ node }">
      <div style="padding-top:20px;" :title="node['text']">{{ node['text'] }}</div>
    </template>
  </relation-graph>
</template>