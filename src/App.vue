<script setup>
import BrandLogo from '@/components/images/BrandLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#"><BrandLogo /></a>

      <nav class="nav">
        <ul>
          <a href="#"><li>Feaures</li></a>
          <a href="#"><li>Pricing</li></a>
          <a href="#"><li>Resources</li></a>
        </ul>
      </nav>

      <nav class="nav">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </nav>
    </div>
  </header>
  <main>
    <h1>Hello, Vue!</h1>
  </main>
</template>

<style scoped></style>
