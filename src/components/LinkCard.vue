<script setup></script>

<template>
  <div class="link l-flex">
    <a href="#" class="link-old">https://www.frontendmentor.io</a>
    <div class="link-divider"></div>

    <div class="link-bottom-panel l-flex">
      <a href="#" class="link-new">https://rel.ink/k4lKyk</a>
      <button class="button-copy">Copy</button>
    </div>
  </div>
</template>

<style lang="scss">
.link {
  --padding: 1rem;
  --flex-direction: column;
  --gap: 0.8rem;

  background-color: var(--color-neutral-white);
  border-radius: var(--border-radius-xs);
  padding: var(--padding);
  flex-direction: var(--flex-direction);
  gap: var(--gap);

  &-bottom-panel {
    flex-direction: var(--flex-direction);
    gap: var(--gap);
  }

  &-old,
  &-new {
    font-size: var(--font-size-m);
  }

  &-old {
    color: var(--color-neutral-very-dark-blue);
  }

  &-new {
    color: var(--color-primary-cyan);
  }

  &-divider {
    border: 0.5px solid var(--color-neutral-grayish-violet);
    opacity: 0.25;
    margin: 0 calc(-1 * var(--padding));
  }
}
</style>
