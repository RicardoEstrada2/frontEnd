<script setup>
import { SignInButton, useAuth, UserButton, UserProfile } from 'vue-clerk'
import { useMiddleware } from '@/composables/middleware'

const { isSignedIn } = useAuth()

useMiddleware(isSignedIn.value)
</script>

<template>
  <div>
    <UserButton v-if="isSignedIn" />
    <SignInButton v-else />
  </div>
</template>
