<script setup>
import InputText from 'primevue/inputtext'

import { SiteHeader } from '@/components'
import {
  BrandLogo,
  HeroImage,
  ShortenMobile,
  ShortenDesktop,
  BoostMobile,
  BoostDesktop
} from '@/components/images'

import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFullyCustomizable,
  IconFacebook,
  IconTwitter,
  IconPinterest,
  IconInstagram
} from '@/components/icons'
</script>

<template>
  <SiteHeader />
  <main>
    <section class="hero overflow-hidden">
      <div class="hero-group l-container l-flex">
        <HeroImage class="hero-img svg-img" />

        <div class="hero-left-panel l-flex">
          <h1 class="hero-title">More than just shorter links</h1>
          <p class="hero-secondary-text">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a href="#" class="hero-link styled-link link-l">Get Started</a>
        </div>
      </div>
    </section>

    <section class="advanced-statistics">
      <form class="form l-container overflow-hidden">
        <ShortenMobile class="form-bg-img-mobile" />
        <ShortenDesktop class="form-bg-img-desktop" />

        <InputText
          type="text"
          class="form-input-text"
          v-model="value"
          placeholder="Shorten a link here..."
        />
        <input class="form-submit-button" type="submit" value="Shorten It!" />
      </form>

      <div class="advanced-statistics-group l-container">
        <div class="advanced-statistics-top-panel l-flex">
          <h2 class="advanced-statistics-title">Advanced Statistics</h2>
          <p class="advanced-statistics-secondary-text">
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>

        <div class="advanced-statistics-bottom-panel l-flex">
          <div class="advanced-statistics-card-divider"></div>

          <div class="advanced-statistics-card">
            <div class="advanced-statistics-card-icon"><IconBrandRecognition /></div>
            <h3 class="advanced-statistics-card-title">Brand Recognition</h3>
            <p class="advanced-statistics-card-description">
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>

          <div class="advanced-statistics-card">
            <div class="advanced-statistics-card-icon"><IconDetailedRecords /></div>
            <h3 class="advanced-statistics-card-title">Detailed Records</h3>
            <p class="advanced-statistics-card-description">
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </div>

          <div class="advanced-statistics-card">
            <div class="advanced-statistics-card-icon"><IconFullyCustomizable /></div>
            <h3 class="advanced-statistics-card-title">Fully Customizable</h3>
            <p class="advanced-statistics-card-description">
              Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action l-flex overflow-hidden">
      <BoostMobile class="call-to-action-bg-img-mobile" />
      <BoostDesktop class="call-to-action-bg-img-desktop" />

      <h2 class="call-to-action-title">Boost your links today</h2>
      <a href="#" class="call-to-action-link styled-link link-l">Get Started</a>
    </section>
  </main>

  <footer class="footer">
    <div class="footer-group l-container l-grid">
      <a href="#"><BrandLogo class="footer-logo" /></a>

      <div class="footer-content">
        <h3 class="footer-title">Features</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer" class="footer-nav-list l-flex">
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Link Shortening</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Branded Links</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Analytics</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3 class="footer-title">Resources</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer" class="footer-nav-list l-flex">
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Blog</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Developers</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Support</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3 class="footer-title">Company</h3>
        <nav class="footer-nav">
          <ul aria-label="Footer" class="footer-nav-list l-flex">
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">About</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Our Team</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Careers</a></li>
            <li class="footer-nav-item"><a href="#" class="footer-nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <ul aria-label="Social links" class="footer-socials l-flex">
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
// Hero
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

.advanced-statistics {
  position: relative;
  padding: 10rem 0 5rem;
  background-color: var(--color-neutral-light-gray);

  &-top-panel {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 5.75rem;
  }

  &-title {
    color: var(--color-neutral-very-dark-blue);
    font-size: var(--font-size-xxxl);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  &-secondary-text {
    font-size: var(--font-size-advanced-statistics-secondary-text);
    text-align: center;
    max-width: 32rem;
    line-height: 1.75rem;
  }

  &-bottom-panel {
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5.75rem;
  }

  &-card {
    position: relative;
    background-color: var(--color-neutral-white);
    padding: 4.81rem 2rem 2rem 2rem;
    border-radius: var(--border-radius-xs);
    max-width: 21.875rem;

    &-icon {
      position: absolute;
      display: inline-block;
      background-color: var(--color-primary-dark-violet);
      border-radius: var(--border-radius-xl);
      width: 88px;
      height: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      margin: 0 auto;
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
}

// Form
.form {
  position: absolute;
  background-color: var(--color-primary-dark-violet);
  border-radius: var(--border-radius-s);
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &-bg-img {
    &-mobile,
    &-desktop {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
    }

    &-desktop {
      display: none;
    }
  }

  &-input-text {
    width: 100%;
    height: 3rem;
    font-size: var(--font-size-m);
    border-radius: var(--border-radius-form-input);
    padding-left: 1rem;
  }
}

// CTA
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

// Footer
.footer {
  padding: 3.37rem 0 3.5rem 0;
  background-color: var(--color-neutral-very-dark-violet);

  &-group {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  &-content {
    margin-bottom: 2.38rem;

    &:nth-child(5) {
      margin-bottom: unset;
    }
  }

  &-logo {
    path {
      fill: var(--color-neutral-white);
    }
    margin-bottom: 3.08rem;
  }

  &-title {
    color: var(--color-neutral-white);
    font-size: var(--font-size-footer-label);
    font-weight: var(--font-weight-bold);
    margin-bottom: 1.38rem;
  }

  &-nav-list {
    flex-direction: column;
    gap: 0.63rem;
  }

  &-socials {
    align-items: center;
    gap: 1.5rem;
  }

  &-nav-link {
    color: var(--color-neutral-gray);
  }
}
</style>
