<script setup>
import { ref, onMounted } from 'vue'

import { BrandLogo } from '@/components/images'
import { IconHamburger } from '@/components/icons'

const isShown = ref(false)
const isDesktop = ref(false)

const toggleNav = () => {
  isShown.value = !isShown.value
}

const checkIfDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  checkIfDesktop()
  window.addEventListener('resize', checkIfDesktop)
})
</script>

<template>
  <header class="header">
    <div class="header-group l-container">
      <a href="#"><BrandLogo /></a>

      <Transition name="fade">
        <nav class="nav" v-if="isShown || isDesktop">
          <ul class="nav-list l-flex">
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Resources</a></li>
          </ul>

          <div class="nav-divider"></div>

          <ul class="nav-list l-flex">
            <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
            <li class="nav-item">
              <a href="#" class="nav-link styled-link display-block">Sign Up</a>
            </li>
          </ul>
        </nav>
      </Transition>

      <button class="nav-toggle" @click="toggleNav">
        <IconHamburger />
      </button>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: var(--color-neutral-white);
  top: 0;
  left: 0;
  z-index: 100;
  margin-bottom: -1rem;

  &-group {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav {
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    background-color: var(--color-primary-dark-violet);
    border-radius: 0.625rem;
    padding: 2.5rem 1.5rem;
  }

  &-list {
    flex-direction: column;

    &:nth-child(1) {
      gap: 1.88rem;
    }

    &:nth-child(3) {
      gap: 1.5rem;
    }
  }

  &-item {
    text-align: center;
  }

  &-link {
    color: var(--color-neutral-white);
    font-size: var(--font-size-nav);
    font-weight: var(--font-weight-bold);
    cursor: pointer;

    &:hover {
      color: var(--color-neutral-very-dark-blue);
    }
  }

  &-divider {
    border: 0.5px solid var(--color-neutral-grayish-violet);
    opacity: 0.25;
    margin-top: 1.88rem;
    margin-bottom: 2rem;
  }

  &-toggle {
    display: inline-flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
