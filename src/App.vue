<script setup>
import { ref } from 'vue';
import AppInput from './components/AppInput.vue';

const name = ref('');
const email = ref('');
</script>

<template>
  <AppInput v-model="name" label="Nome" placeholder="Digite seu nome" />

  <AppInput
    v-model="email"
    label="E-mail"
    type="email"
    placeholder="seu@email.com"
  />

  <p>Nome: {{ name }}</p>
  <p>E-mail: {{ email }}</p>
</template>