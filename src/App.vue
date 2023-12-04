<script setup>
import { ref } from 'vue'

import BrandLogo from '@/components/images/BrandLogo.vue'
import HeroImage from '@/components/images/HeroImage.vue'
import IconHamburger from '@/components/icons/IconHamburger.vue'
import IconBrandRecognition from '@/components/icons/IconBrandRecognition.vue'
import IconDetailedRecords from '@/components/icons/IconDetailedRecords.vue'
import IconFullyCustomizable from '@/components/icons/IconFullyCustomizable.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconPinterest from '@/components/icons/IconPinterest.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'

const isShown = ref(false)

const toggleNav = () => {
  isShown.value = !isShown.value
}
</script>

<template>
  <header class="header">
    <div class="header-group l-container">
      <a href="#"><BrandLogo /></a>

      <Transition name="fade">
        <nav class="nav" v-if="isShown">
          <ul class="nav-list l-gap-1">
            <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Resources</a></li>
          </ul>

          <div class="nav-divider"></div>

          <ul class="nav-list l-gap-2">
            <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
            <li class="nav-item"><a href="#" class="nav-link styled-link">Sign Up</a></li>
          </ul>
        </nav>
      </Transition>

      <button class="nav-toggle" @click="toggleNav">
        <IconHamburger />
      </button>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="hero-group l-container">
        <HeroImage class="image" />

        <div class="hero-left-panel">
          <h1 class="hero-title">More than just shorter links</h1>
          <p class="main-secondary-text">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a href="#">Get Started</a>
        </div>
      </div>

      <form class="form l-container">
        <input type="text" id="link" name="link" placeholder="Shorten a link here..." />
        <input type="submit" value="Submit" />
      </form>
    </section>

    <section class="advanced-statistics l-container">
      <div class="advanced-statistics-group">
        <div class="advanced-statistics-top-panel">
          <h2 class="advanced-statistics-title">Advanced Statistics</h2>
          <p class="other-secondary-text">
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>

        <div class="advanced-statistics-bottom-panel">
          <div class="card">
            <div class="card-icon"><IconBrandRecognition /></div>
            <h3 class="card-title">Brand Recognition</h3>
            <p class="card-description">
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>

          <div class="card-divider"></div>

          <div class="card">
            <div class="card-icon"><IconDetailedRecords /></div>
            <h3 class="card-title">Detailed Records</h3>
            <p class="card-description">
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </div>

          <div class="card-divider"></div>

          <div class="card">
            <div class="card-icon"><IconFullyCustomizable /></div>
            <h3 class="card-title">Fully Customizable</h3>
            <p class="card-description">
              Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action">
      <h2 class="call-to-action-title">Boost your links today</h2>
      <a href="#">Get Started</a>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-group l-container">
      <BrandLogo />

      <div class="footer-content">
        <h3>Features</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer">
            <li><a href="#">Link Shortening</a></li>
            <li><a href="#">Branded Links</a></li>
            <li><a href="#">Analytics</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3>Resources</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer">
            <li><a href="#"></a>Blog</li>
            <li><a href="#"></a>Developers</li>
            <li><a href="#"></a>Support</li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3>Company</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer">
            <li><a href="#">About</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <ul aria-label="Social links" class="socials">
          <li>
            <a aria-label="facebook" href="#"><IconFacebook /></a>
          </li>
          <li>
            <a aria-label="twitter" href="#"><IconTwitter /></a>
          </li>
          <li>
            <a aria-label="pinterest" href="#"><IconPinterest /></a>
          </li>
          <li>
            <a aria-label="instagram" href="#"><IconInstagram /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
// Header
.header {
  background-color: var(--color-neutral-white);
  width: 100%;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);

  &-group {
    position: relative;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.nav {
  @media screen and (max-width: 1023px) {
    position: absolute;
    top: 6rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    background-color: var(--color-primary-dark-violet);
    border-radius: 0.625rem;
    padding: 2.5rem 1.5rem;
  }

  &-list {
    display: flex;
    flex-direction: column;
  }

  &-item {
    text-align: center;
  }

  &-link {
    color: var(--color-neutral-white);
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    cursor: pointer;
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
