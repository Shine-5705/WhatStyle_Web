<script lang="ts">
  import styles from '../styles/components/Hero.module.scss'
  import Button from '../components/Button.svelte'
  import AnimatedLines from './animate/AnimatedLines.svelte'
  
  interface Props {
    title?: string
    subtitle?: string
    description?: string
    announcementText?: string
    announcementIcon?: string
    primaryButtonText?: string
    secondaryButtonText?: string
    onPrimaryClick?: () => void
    onSecondaryClick?: () => void
    onAnnouncementClick?: () => void
  }
  
  let {
    title = "Keep Your Emails",
    subtitle = "Always Out of Spam",
    description = "WhatStyle warms up your email domain and monitors sender reputation to make sure your cold outreach lands in the inbox, not the junk folder.",
    announcementText = "Multi-warmup Released",
    announcementIcon = "🎉",
    primaryButtonText = "Login",
    secondaryButtonText = "Learn More",
    onPrimaryClick = () => console.log('Primary button clicked'),
    onSecondaryClick = () => console.log('Secondary button clicked'),
    onAnnouncementClick = () => console.log('Announcement clicked')
  }: Props = $props()
</script>

<section class={styles.hero}>
  <!-- Framer Motion Animated Background Elements -->
  <div class={styles.flowingLines}>
    <AnimatedLines />
  </div>

  <div class={styles.container}>
    <!-- Announcement Banner -->
    <button 
      class={styles.announcement}
      onclick={onAnnouncementClick}
      aria-label="View announcement"
    >
      <span class={styles.icon}>{announcementIcon}</span>
      <span>{announcementText}</span>
      <span class={styles.arrow}>→</span>
    </button>

    <!-- Main Headline -->
    <div class={styles.headline}>
      <h1 class={styles.title}>
        <span class={styles.primary}>{title}</span>
      </h1>
      <h2 class={styles.subtitle}>{subtitle}</h2>
    </div>

    <!-- Email Icon -->
    <div class={styles.emailIcon}></div>

    <!-- Description -->
    <p class={styles.description}>
      {description}
    </p>

    <!-- Call to Action Buttons -->
    <div class={styles.actions}>
      <Button 
        variant="primary" 
        size="lg"
        onclick={onPrimaryClick}
      >
        {primaryButtonText}
      </Button>
      
      <Button 
        variant="ghost" 
        size="lg"
        onclick={onSecondaryClick}
      >
        {secondaryButtonText}
      </Button>
    </div>
  </div>
</section>

<style lang="scss">
  @use '../styles/variables' as *;
  
  // Additional component-specific styles if needed
  .actions {
    display: flex;
    gap: $space-4;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>