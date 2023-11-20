<script setup>
import BrandLogo from '@/components/images/BrandLogo.vue'
import HeroImage from '@/components/images/HeroImage.vue'
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
    <section class="hero">
      <div class="hero-group container">
        <HeroImage class="image" />

        <div class="left-panel">
          <h1 class="title">More than just shorter links</h1>
          <p class="secondary-text">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a href="#">Get Started</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
