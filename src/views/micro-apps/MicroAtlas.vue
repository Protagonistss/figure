<script setup lang="ts">
const url = import.meta.env.VITE_CHAT_ADDRESS
</script>
<template>
  <div class="app-body__wrapper">
    <micro-app 
      name="chat" 
      :url="url"
      baseRoute="/chat"
      inline
      disableSandbox>
    </micro-app>
  </div>
</template>