<script setup>
import InputText from 'primevue/inputtext'

import { SiteHeader, HeroSection, CallToActionSection, FooterSection } from '@/components'
import { ShortenMobile, ShortenDesktop } from '@/components/images'

import {
  IconBrandRecognition,
  IconDetailedRecords,
  IconFullyCustomizable
} from '@/components/icons'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
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
    <CallToActionSection />
  </main>
  <FooterSection />
</template>

<style lang="scss">
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
</style>
