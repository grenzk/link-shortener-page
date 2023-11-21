<script setup>
import BrandLogo from '@/components/images/BrandLogo.vue'
import HeroImage from '@/components/images/HeroImage.vue'
import IconBrandRecognition from '@/components/icons/IconBrandRecognition.vue'
import IconDetailedRecords from '@/components/icons/IconDetailedRecords.vue'
import IconFullyCustomizable from './components/icons/IconFullyCustomizable.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#"><BrandLogo /></a>

      <nav class="nav">
        <ul>
          <a href="#"><li>Feaures</li></a>
          <a href="#"><li>Pricing</li></a>
          <a href="#"><li>Resources</li></a>
        </ul>
      </nav>

      <nav class="nav">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </nav>
    </div>
  </header>
  <main>
    <section class="hero">
      <div class="hero-group container">
        <HeroImage class="image" />

        <div class="left-panel">
          <h1 class="title">More than just shorter links</h1>
          <p class="secondary-text">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a href="#">Get Started</a>
        </div>
      </div>

      <form class="form container">
        <input type="text" id="link" name="link" placeholder="Shorten a link here..." />
        <input type="submit" value="Submit" />
      </form>
    </section>

    <section class="advanced-statistics container">
      <div class="advanced-statistics-group">
        <div class="top-panel">
          <h2 class="section-title">Advanced Statistics</h2>
          <p class="other secondary-text">
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </div>

        <div class="bottom-panel">
          <div class="card">
            <div class="icon"><IconBrandRecognition /></div>
            <h3 class="title">Brand Recognition</h3>
            <p class="description">
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>

          <div class="divider"></div>

          <div class="card">
            <div class="icon"><IconDetailedRecords /></div>
            <h3 class="title">Detailed Records</h3>
            <p class="description">
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </div>

          <div class="divider"></div>

          <div class="card">
            <div class="icon"><IconFullyCustomizable /></div>
            <h3 class="title">Fully Customizable</h3>
            <p class="description">
              Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="call-to-action">
      <h2 class="section-title">Boost your links today</h2>
      <a href="#">Get Started</a>
    </section>
  </main>
</template>

<style scoped></style>
