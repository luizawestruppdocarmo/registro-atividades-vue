<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Pega o ID da URL
const recordId = computed(() => route.params.id);

// Simula busca do registro (futuramente virá de uma store ou API)
const record = ref({
  id: recordId.value,
  title: 'Estudar Vue.js',
  duration: 60,
  date: '2026-02-06',
  notes: 'Estudei Composition API e Vue Router',
});

function goBack() {
  router.push('/records');
}

function editRecord() {
  router.push(`/records/${recordId.value}/edit`);
}
</script>

<template>
  <div class="detail">
    <button @click="goBack" class="btn-back">← Voltar</button>

    <div class="card">
      <h1>{{ record.title }}</h1>

      <div class="info">
        <div class="info-item">
          <span class="label">Duração:</span>
          <span class="value">{{ record.duration }} min</span>
        </div>
        <div class="info-item">
          <span class="label">Data:</span>
          <span class="value">{{ record.date }}</span>
        </div>
      </div>

      <div class="notes">
        <h3>Observações</h3>
        <p>{{ record.notes }}</p>
      </div>

      <button @click="editRecord" class="btn-edit">Editar</button>
    </div>
  </div>
</template>

<style scoped>
.detail {
  padding: 72px 16px 16px;
}

.btn-back {
  margin-bottom: 16px;
  padding: 8px 16px;
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
}

.info {
  margin: 20px 0;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.label {
  font-weight: 600;
  color: #666;
}

.notes {
  margin: 20px 0;
}

.notes h3 {
  margin-bottom: 8px;
  font-size: 16px;
}

.btn-edit {
  width: 100%;
  padding: 14px;
  background: #0b5cff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
</style>