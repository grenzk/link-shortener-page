<script setup>
import { BoostMobile, BoostDesktop } from '@/components/images'
</script>

<template>
  <section class="call-to-action l-flex overflow-hidden">
    <BoostMobile class="call-to-action-bg-img-mobile" />
    <BoostDesktop class="call-to-action-bg-img-desktop" />

    <h2 class="call-to-action-title">Boost your links today</h2>
    <a href="/get-started" aria-label="Get Started" class="call-to-action-link button-link button-large">Get Started</a>
  </section>
</template>

<style lang="scss">
.call-to-action {
  position: relative;
  background-color: var(--color-primary-dark-violet);
  padding: 5.63rem 0;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &-bg-img {
    &-mobile,
    &-desktop {
      position: absolute;
      top: 0;
    }

    &-mobile {
      width: 100%;
    }

    &-desktop {
      display: none;
    }
  }

  &-title {
    color: var(--color-neutral-white);
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-bold);
    z-index: 2;
  }

  &-link {
    z-index: 2;
  }
}
</style>
