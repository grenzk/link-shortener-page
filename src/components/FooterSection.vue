<script setup>
import { BrandLogo } from '@/components/images'
import { IconFacebook, IconTwitter, IconPinterest, IconInstagram } from '@/components/icons'
</script>

<template>
  <footer class="footer">
    <div class="footer-group l-container l-grid">
      <a href="/home" aria-label="Home"><BrandLogo class="footer-logo" /></a>

      <div class="footer-content">
        <h3 class="footer-title">Features</h3>
        <nav class="footer-nav">
          <ul class="footer-nav-list l-flex">
            <li class="footer-nav-item">
              <a href="/link-shortening" aria-label="Link Shortening" class="footer-nav-link"
                >Link Shortening</a
              >
            </li>
            <li class="footer-nav-item">
              <a href="/branded-links" aria-label="Branded Links" class="footer-nav-link"
                >Branded Links</a
              >
            </li>
            <li class="footer-nav-item">
              <a href="/analytics" aria-label="Analytics" class="footer-nav-link">Analytics</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3 class="footer-title">Resources</h3>
        <nav class="footer-nav">
          <ul class="footer-nav-list l-flex">
            <li class="footer-nav-item">
              <a href="/blog" aria-label="Blog" class="footer-nav-link">Blog</a>
            </li>
            <li class="footer-nav-item">
              <a href="/developers" aria-label="Developers" class="footer-nav-link">Developers</a>
            </li>
            <li class="footer-nav-item">
              <a href="/support" aria-label="Support" class="footer-nav-link">Support</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <h3 class="footer-title">Company</h3>
        <nav class="footer-nav">
          <ul class="footer-nav-list l-flex">
            <li class="footer-nav-item">
              <a href="/about" aria-label="About" class="footer-nav-link">About</a>
            </li>
            <li class="footer-nav-item">
              <a href="/our-team" aria-label="Our Team" class="footer-nav-link">Our Team</a>
            </li>
            <li class="footer-nav-item">
              <a href="/careers" aria-label="Careers" class="footer-nav-link">Careers</a>
            </li>
            <li class="footer-nav-item">
              <a href="/contact" aria-label="Contact" class="footer-nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer-content">
        <ul class="footer-socials l-flex">
          <li>
            <a href="/facebook" aria-label="Facebook"
              ><IconFacebook class="footer-socials-icon"
            /></a>
          </li>
          <li>
            <a href="/twitter" aria-label="Twitter"><IconTwitter class="footer-socials-icon" /></a>
          </li>
          <li>
            <a href="/pinterest" aria-label="Pinterest"
              ><IconPinterest class="footer-socials-icon"
            /></a>
          </li>
          <li>
            <a href="/instagram" aria-label="Instagram"
              ><IconInstagram class="footer-socials-icon"
            /></a>
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

    &:hover {
      color: var(--color-primary-cyan);
    }
  }
}
</style>
