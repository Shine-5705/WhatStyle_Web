<script lang="ts">
  import { onMount } from 'svelte'
  import styles from '../styles/components/Navbar.module.scss'
  
  interface NavItem {
    label: string
    href: string
    active?: boolean
  }
  
  interface Props {
    logo?: string
    brandName?: string
    navItems?: NavItem[]
    ctaText?: string
    ctaHref?: string
    onCtaClick?: () => void
  }
  
  let {
    logo = "WS",
    brandName = "WhatStyle",
    navItems = [
      { label: "Home", href: "/", active: true },
      { label: "Pricing", href: "/pricing" },
      { label: "About Us", href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Case Studies", href: "/case-studies" }
    ],
    ctaText = "Get Started",
    ctaHref = "/check-domain",
    onCtaClick = () => console.log('CTA clicked')
  }: Props = $props()
  
  let scrolled = $state(false)
  let mobileMenuOpen = $state(false)
  
  const handleScroll = () => {
    scrolled = window.scrollY > 10
  }
  
  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen
  }
  
  const closeMobileMenu = () => {
    mobileMenuOpen = false
  }
  
  const handleCtaClick = (e: Event) => {
    if (onCtaClick) {
      e.preventDefault()
      onCtaClick()
    }
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<nav class="{styles.navbar} {scrolled ? styles.scrolled : ''}">
  <div class={styles.container}>
    <!-- Logo -->
    <a href="/" class={styles.logo}>
      <div class={styles.icon}>{logo}</div>
      <span>{brandName}</span>
    </a>
    
    <!-- Desktop Navigation -->
    <div class={styles.nav}>
      <ul class={styles.navList}>
        {#each navItems as item}
          <li class={styles.navItem}>
            <a 
              href={item.href} 
              class="{styles.navLink} {item.active ? styles.active : ''}"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    
    <!-- Actions -->
    <div class={styles.actions}>
      <a 
        href={ctaHref} 
        class={styles.ctaButton}
        onclick={handleCtaClick}
      >
        {ctaText}
      </a>
      
      <!-- Mobile Menu Toggle -->
      <button 
        class="{styles.mobileToggle} {mobileMenuOpen ? styles.active : ''}"
        onclick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div class={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div class="{styles.mobileMenu} {mobileMenuOpen ? styles.open : ''}">
    <ul class={styles.mobileNavList}>
      {#each navItems as item}
        <li>
          <a 
            href={item.href} 
            class="{styles.mobileNavLink} {item.active ? styles.active : ''}"
            onclick={closeMobileMenu}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    <div class={styles.mobileCta}>
      <a 
        href={ctaHref} 
        class={styles.ctaButton}
        onclick={handleCtaClick}
        style="width: 100%; justify-content: center;"
      >
        {ctaText}
      </a>
    </div>
  </div>
</nav>