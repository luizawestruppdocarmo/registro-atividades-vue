<script setup>
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <div class="app">
    <AppHeader title="Registro de Atividades" />

    <!-- Componentes das rotas renderizam aqui -->
    <RouterView />
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}
</style>