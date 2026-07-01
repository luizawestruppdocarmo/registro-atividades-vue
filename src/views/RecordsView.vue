<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import RecordCard from '@/components/records/RecordCard.vue';

const records = ref([
  { id: 1, title: 'Estudar Vue.js', duration: 60, date: '2026-02-06' },
  { id: 2, title: 'Fazer exercícios', duration: 30, date: '2026-02-05' },
]);
</script>

<template>
  <div class="records">
    <h2>Meus Registros</h2>

    <div class="list">
      <RouterLink
        v-for="record in records"
        :key="record.id"
        :to="`/records/${record.id}`"
        class="link"
      >
        <RecordCard
          :title="record.title"
          :duration="record.duration"
          :date="record.date"
        />
      </RouterLink>
    </div>

    <div v-if="records.length === 0" class="empty">
      <p>Nenhum registro ainda</p>
      <RouterLink to="/records/new" class="btn">
        Criar primeiro registro
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.records {
  padding: 72px 16px 16px;
}

.list {
  margin-top: 20px;
}

.link {
  text-decoration: none;
  color: inherit;
}

.empty {
  text-align: center;
  padding: 40px 20px;
}

.btn {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 24px;
  background: #0b5cff;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
</style>