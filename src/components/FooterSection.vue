<script setup>
import { BrandLogo } from '@/components/images'
import { IconFacebook, IconTwitter, IconPinterest, IconInstagram } from '@/components/icons'
</script>

<template>
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
            <a aria-label="facebook" href="#"><IconFacebook class="footer-socials-icon" /></a>
          </li>
          <li>
            <a aria-label="twitter" href="#"><IconTwitter class="footer-socials-icon" /></a>
          </li>
          <li>
            <a aria-label="pinterest" href="#"><IconPinterest class="footer-socials-icon" /></a>
          </li>
          <li>
            <a aria-label="instagram" href="#"><IconInstagram class="footer-socials-icon" /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
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
    width: var(--logo-width);
    margin-bottom: 3.08rem;

    path {
      fill: var(--color-neutral-white);
    }
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

    &-icon {
      width: var(--footer-icon-svg-width);
    }
  }

  &-nav-link {
    color: var(--color-neutral-gray);
  }
}
</style>
