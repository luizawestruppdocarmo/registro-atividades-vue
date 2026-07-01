<script setup>
// Declara quais eventos o componente pode emitir
const emit = defineEmits(['click', 'longPress']);

function handleClick() {
  // Emite o evento
  emit('click');
}

function handleLongPress() {
  emit('longPress');
}
</script>

<template>
  <button
    @click="handleClick"
    @mousedown.prevent="handleLongPress"
    class="app-button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.app-button {
  width: 100%;
  min-height: 48px;
  padding: 12px 24px;
  background: #0b5cff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.1s;
}

.app-button:active {
  transform: scale(0.98);
}

.app-button:hover {
  background: #0a4fd6;
}
</style>