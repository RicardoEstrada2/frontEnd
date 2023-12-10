<script setup lang="ts">
import { SignIn } from 'vue-clerk'
</script>

<template>
  <SignIn after-sign-in-url="/dashboard" />
</template>
