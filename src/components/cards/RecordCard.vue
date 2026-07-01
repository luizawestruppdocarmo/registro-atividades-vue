<script setup>
const props = defineProps({
  id: Number,
  title: String,
});

const emit = defineEmits(['delete', 'edit']);

function handleDelete() {
  // Emite evento com o ID
  emit('delete', props.id);
}

function handleEdit() {
  emit('edit', { id: props.id, title: props.title });
}
</script>

<template>
  <div class="record-card">
    <h3>{{ title }}</h3>
    <button @click="handleEdit">Editar</button>
    <button @click="handleDelete">Excluir</button>
  </div>
</template>

<style scoped>
.record-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.1s;
}

.record-card:active {
  transform: scale(0.98);
}

.record-header {
  margin-bottom: 8px;
}

.record-title {
  font-size: 18px;
  font-weight: 600;
  color: #111;
}

.record-body {
  font-size: 14px;
  color: #666;
}
</style>