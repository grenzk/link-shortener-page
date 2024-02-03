<script setup>
defineProps({
  longUrl: String,
  shortUrl: String,
  isCopied: Boolean
})
</script>

<template>
  <div class="link l-flex">
    <a :href="longUrl" class="link-old">{{ longUrl }}</a>
    <div class="link-divider"></div>

    <div class="link-bottom-panel l-flex">
      <a :href="shortUrl" class="link-new">{{ shortUrl }}</a>
      <button
        class="button-copy"
        :class="{ 'is-pressed': isCopied }"
        @click="$emit('copy', shortUrl)"
      >
        {{ isCopied ? 'Copied!' : 'Copy' }}
      </button>
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 485px;
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
