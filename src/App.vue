<script setup>
import InputText from 'primevue/inputtext'

import {
  SiteHeader,
  HeroSection,
  CallToActionSection,
  FooterSection,
  CardWithIcon
} from '@/components'

import { ShortenMobile, ShortenDesktop } from '@/components/images'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <section class="advanced-statistics">
      <form class="form l-container l-flex overflow-hidden">
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

      <div class="link-group l-container l-flex">
        <div class="link l-flex">
          <a href="#" class="link-old">https://www.frontendmentor.io</a>
          <div class="link-divider"></div>

          <div class="link-bottom-panel l-flex">
            <a href="#" class="link-new">https://rel.ink/k4lKyk </a>
            <button class="link-copy-button">Copy</button>
          </div>
        </div>
      </div>

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

          <CardWithIcon
            icon="IconBrandRecognition"
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content."
          />

          <CardWithIcon
            icon="IconDetailedRecords"
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions."
          />

          <CardWithIcon
            icon="IconFullyCustomizable"
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement."
          />
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
  padding: 5rem 0 5rem;
  background-color: var(--color-neutral-light-gray);

  &-top-panel {
    margin-top: 5rem;
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
}

.form {
  position: absolute;
  background-color: var(--color-primary-dark-violet);
  border-radius: var(--border-radius-s);
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 1.5rem;
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

.link {
  --padding: 1rem;
  --flex-direction: column;
  --gap: 0.8rem;

  background-color: var(--color-neutral-white);
  border-radius: var(--border-radius-xs);
  padding: var(--padding);
  flex-direction: var(--flex-direction);
  gap: var(--gap);

  &-group {
    margin-top: 1.5rem !important;
    flex-direction: column;
    gap: 1.5rem;
  }

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
