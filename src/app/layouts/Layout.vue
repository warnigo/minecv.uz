<template>
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</template>

<script setup>
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
</script>
