<script setup>
import { HeroImage } from '@/components/images'
</script>

<template>
  <section class="hero overflow-hidden">
    <div class="hero-group l-container l-flex">
      <HeroImage class="hero-img svg-img" />

      <div class="hero-left-panel l-flex">
        <h1 class="hero-title">More than just shorter links</h1>
        <p class="hero-secondary-text">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <a href="#" class="hero-link button-link button-large">Get Started</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  padding-bottom: 10.5rem;

  &-group {
    flex-direction: column;
    row-gap: 2.3rem;
  }

  &-img {
    width: 500px;
  }

  &-left-panel {
    flex-direction: column;
    text-align: center;
  }

  &-title {
    color: var(--color-neutral-very-dark-blue);
    font-size: var(--font-size-xxxxl);
    font-weight: var(--font-weight-bold);
    line-height: 114.286%;
    margin-bottom: 1rem;
  }

  &-secondary-text {
    font-size: var(--font-size-hero-secondary-text);
    line-height: 166.67%;
    margin-bottom: 2rem;
  }

  &-link {
    align-self: center;
  }
}
</style>
