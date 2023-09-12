<script setup lang="ts">
const url = import.meta.env.VITE_AMIS_ADDRESS
</script>
<template>
  <div class="app-body__wrapper">
    <micro-app 
      name="amis" 
      :url="url"
      baseRoute="/amis"
      inline
      disableSandbox>
    </micro-app>
  </div>
</template>