<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String
})

const icon = defineAsyncComponent(() => import(`@/components/icons/${props.icon}.vue`))
</script>

<template>
  <div class="advanced-statistics-card">
    <div class="advanced-statistics-card-icon"><component :is="icon" /></div>
    <h3 class="advanced-statistics-card-title">{{ title }}</h3>
    <p class="advanced-statistics-card-description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss">
.advanced-statistics-card {
  position: relative;
  background-color: var(--color-neutral-white);
  padding: 4.81rem 2rem 2rem 2rem;
  border-radius: var(--border-radius-xs);
  max-width: 21.875rem;
  height: 16.6875rem;

  &-icon {
    position: absolute;
    display: inline-block;
    background-color: var(--color-primary-dark-violet);
    border-radius: var(--border-radius-xl);
    width: var(--card-icon-size);
    height: var(--card-icon-size);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: 0 auto;

    svg {
      width: var(--card-icon-svg-width);
    }
  }

  &-title {
    color: var(--color-neutral-very-dark-blue);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xxl);
    text-align: center;
    margin-bottom: 0.75rem;
  }

  &-description {
    font-size: var(--font-size-s);
    text-align: center;
    line-height: 1.625rem;
  }

  &-divider {
    position: absolute;
    background-color: var(--color-primary-cyan);
    width: 8px;
    top: 0;
    left: 0;
    right: 0;
    height: 980px;
    margin: 0 auto;
  }
}
</style>
