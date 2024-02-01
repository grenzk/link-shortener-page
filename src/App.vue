<script setup>
import { onBeforeMount, ref } from 'vue'
import { useForm } from 'vee-validate'
import Axios from 'axios'
import * as Yup from 'yup'
import { API_ACCESS_TOKEN, API_ENDPOINT } from '@/config'

import InputText from 'primevue/inputtext'
import {
  SiteHeader,
  HeroSection,
  CallToActionSection,
  FooterSection,
  CardWithIcon,
  LinkCard
} from '@/components'

import { ShortenMobile, ShortenDesktop } from '@/components/images'

const shortenLinks = ref([])

const schema = Yup.object({
  website: Yup.string().url().required('Please add a link')
})

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema
})

const [website] = defineField('website')

const fetchShortenLink = async (input) => {
  try {
    const response = await Axios.post(
      API_ENDPOINT,
      {
        long_url: input
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_ACCESS_TOKEN}`
        }
      }
    )
    const shortLink = response.data

    shortenLinks.value.push({
      id: shortLink.id,
      longUrl: shortLink.long_url,
      shortUrl: shortLink.link
    })
    localStorage.setItem('cachedResponse', JSON.stringify(shortenLinks.value))
  } catch (error) {
    console.error(error)
  }
}

const onSubmit = handleSubmit((values) => {
  fetchShortenLink(values.website)
  resetForm()
})

onBeforeMount(() => {
  const cachedResponse = localStorage.getItem('cachedResponse')

  if (cachedResponse) {
    shortenLinks.value = JSON.parse(cachedResponse)
  }
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <section class="advanced-statistics">
      <form class="form l-container l-flex overflow-hidden" @submit="onSubmit">
        <ShortenMobile class="form-bg-img-mobile" />
        <ShortenDesktop class="form-bg-img-desktop" />

        <div class="form-top-panel">
          <InputText
            class="form-input-text"
            :class="{ 'p-invalid': errors.website }"
            v-model="website"
            aria-described="website-help"
            placeholder="Shorten a link here..."
          />
          <small id="website-help" class="p-error">{{ errors.website }}</small>
        </div>
        <input class="button-submit" type="submit" value="Shorten It!" />
      </form>

      <div v-if="shortenLinks.length" class="link-group l-container l-flex">
        <LinkCard
          v-for="link in shortenLinks"
          :key="link.id"
          :long-url="link.longUrl"
          :short-url="link.shortUrl"
        />
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

  &-top-panel {
    width: 100%;
  }

  &-input-text {
    width: 100%;
    height: 3rem;
    font-size: var(--font-size-m);
    border-radius: var(--border-radius-form-input);
    padding-left: 1rem;
  }

  &-input-text.p-invalid {
    border: 3px solid var(--color-secondary-red);

    &::placeholder {
      color: var(--color-secondary-red);
    }
  }

  .p-error {
    color: var(--color-secondary-red);
    font-size: var(--font-size-xs);
    font-style: italic;
  }
}

.link-group {
  margin-top: 1.5rem;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
