<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Bem-vindo!</h1>
      <p>Registre e acompanhe suas atividades diárias</p>
    </div>

    <nav class="menu">
      <RouterLink to="/records" class="menu-item">
        📋 Ver registros
      </RouterLink>
      <RouterLink to="/records/new" class="menu-item">
        ➕ Novo registro
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.home {
  padding: 72px 16px 16px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 28px;
  margin-bottom: 12px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-item {
  display: block;
  padding: 20px;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: #111;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  transition: transform 0.1s;
}

.menu-item:active {
  transform: scale(0.98);
}
</style>