<script setup>
// Props para customizar o título
defineProps({
  title: {
    type: String,
    default: 'Meu App',
  },
});
</script>

<template>
  <header class="app-header">
    <h1>{{ title }}</h1>
    <slot name="actions"></slot>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #0b5cff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.app-header h1 {
  font-size: 18px;
  font-weight: 600;
}
</style>