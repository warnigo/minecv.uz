<template>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import { Header } from "#widgets/Header";
import { Footer } from "#widgets/Footer";
</script>
