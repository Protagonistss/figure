<template>
  <div class="demo-wrapper">
    <div class="demo-item" v-for="renderItem in renderContents" :key="renderItem.id">
      <p class="title">{{ renderItem.text }}</p>
        <n-space v-if="renderItem.data">
          <n-tag type="info" v-for="item in renderItem.data.content">{{item}}</n-tag>
        </n-space>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'
import type { PropType } from 'vue'
import type { RGNode } from 'relation-graph/vue3'

export default defineComponent({
  name: 'DemoContent',
  props: {
    dataSource: Array as PropType<RGNode[]>
  },
  setup (ctx) {
    const renderContents = computed(() => {
      return ctx.dataSource
    })
    watchEffect(() => {
      console.log('renderContents', renderContents.value)
    })
    return {
      renderContents
    }
  }
})
</script>

<style lang="scss" scoped>
.demo-wrapper {
  .demo-item {
    margin-top: 8px;
    &:first-child {
      margin-top: unset;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
}
</style>