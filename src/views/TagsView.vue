<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RelationGraph from 'relation-graph/vue3'
import type { RGNode, RGJsonData } from 'relation-graph';
import { useRouter } from 'vue-router'

const router = useRouter()
const tagViewRef = ref<RelationGraph>()

const graphOptions = {
  layouts: [
    {
      'label': '中心',
      'layoutName': 'force',
      'layoutClassName': 'seeks-layout-center'
    }
  ]
}

const setGraphData = () => {
  const __graph_json_data: RGJsonData = { 
    'rootId': 'N1', 
    'nodes': [
      { 'id': 'N1', 'text': '党的理论', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }},
      // { 'id': 'N2', 'text': '习近平新时代中国特色社会主义思想', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }},
      { 'id': 'N3', 'text': '新时代首都发展', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }},
      { 'id': 'N4', 'text': '城市精细化治理', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }}, 
      { 'id': 'N5', 'text': '文化和旅游', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }}, 
      { 'id': 'N6', 'text': '群众工作', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }}, 
      { 'id': 'N8', 'text': '财税及综合经济', 'color': '#ec6941', 'borderColor': '#ff875e', 'data': { 'nodetype': 'ctrler' }}
      // { 'id': 'N10', 'text': '腾创控股有限公司', 'color': '#4ea2f0', 'borderColor': '#6cc0ff', 'data': { 'nodetype': 'ent' }}
    ], 
    'lines': [
      // { 'from': 'N1', 'to': 'N2', 'text': '50%', 'fontColor': '#d2c0a5' }
    ] 
  }
  setTimeout(() => {
    tagViewRef.value && tagViewRef.value.setJsonData(__graph_json_data, (graphInstance) => {
    })
  }, 1000)
}

const onNodeClick = (props: RGNode) => {
  const { id } = props
  router.push({ name: 'demo', query: { id } })
  return true
}

onMounted(() => {
  setGraphData()
})
</script>

<template>
  <RelationGraph 
    ref="tagViewRef"
    :on-node-click="onNodeClick"
    :options="graphOptions" />
</template>