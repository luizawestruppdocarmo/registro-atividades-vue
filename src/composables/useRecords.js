// src/composables/useRecords.js
import { ref, computed } from 'vue';

export function useRecords() {
  const records = ref([]);
  const loading = ref(false);

  const totalRecords = computed(() => records.value.length);

  function addRecord(record) {
    records.value.push({
      id: Date.now(),
      ...record,
      createdAt: new Date().toISOString(),
    });
  }

  function deleteRecord(id) {
    records.value = records.value.filter((r) => r.id !== id);
  }

  function getRecord(id) {
    return records.value.find((r) => r.id === id);
  }

  return {
    // Estado
    records,
    loading,

    // Computed
    totalRecords,

    // Métodos
    addRecord,
    deleteRecord,
    getRecord,
  };
}