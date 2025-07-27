<script lang="ts">
  import Button from '../components/Button.svelte'
  import Card from '../components/Card.svelte'
  import '../styles/global.scss'
  
  let loading = $state(false)
  
  const handleClick = () => {
    loading = true
    setTimeout(() => {
      loading = false
    }, 2000)
  }
  
  const handleCardClick = () => {
    console.log('Card clicked!')
  }
</script>

<main class="container">
  <header class="header">
    <h1>WhatStyle Design System</h1>
    <p class="subtitle">Built with Svelte 5, SCSS Modules & Author Font</p>
  </header>
  
  <section class="section">
    <h2>Typography Showcase</h2>
    <div class="typography-demo">
      <h1 class="font-bold">Heading 1 - Bold</h1>
      <h2 class="font-semibold">Heading 2 - Semibold</h2>
      <h3 class="font-medium">Heading 3 - Medium</h3>
      <p class="font-regular">This is regular body text using the Author variable font family.</p>
      <p class="font-light">This is light weight text for subtle content.</p>
    </div>
  </section>
  
  <section class="section">
    <h2>Color Palette</h2>
    <div class="color-grid">
      <div class="color-swatch primary">
        <span>Tomato Curry</span>
        <code>#E84A2E</code>
      </div>
      <div class="color-swatch secondary">
        <span>Celestial Canvas</span>
        <code>#0A2538</code>
      </div>
      <div class="color-swatch accent">
        <span>Prairie Land</span>
        <code>#E2CC9C</code>
      </div>
      <div class="color-swatch neutral">
        <span>White Chalk</span>
        <code>#F6F4F1</code>
      </div>
    </div>
  </section>
  
  <section class="section">
    <h2>Button Components</h2>
    <div class="component-grid">
      <Card title="Button Variants" size="compact">
        {#snippet children()}
          <div class="button-group">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        {/snippet}
      </Card>
      
      <Card title="Button Sizes" size="compact">
        {#snippet children()}
          <div class="button-group">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Default</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
        {/snippet}
      </Card>
      
      <Card title="Button States" size="compact">
        {#snippet children()}
          <div class="button-group">
            <Button variant="primary" {loading} onclick={handleClick}>
              {loading ? 'Loading...' : 'Click me'}
            </Button>
            <Button variant="secondary" disabled>Disabled</Button>
            <Button variant="success" full>Full Width</Button>
          </div>
        {/snippet}
      </Card>
    </div>
  </section>
  
  <section class="section">
    <h2>Card Components</h2>
    <div class="card-grid">
      <Card 
        title="Default Card" 
        subtitle="Standard card with shadow"
      >
        {#snippet children()}
          <p>This is a default card component with standard styling and hover effects.</p>
        {/snippet}
        
        {#snippet footer()}
          <Button variant="primary" size="sm">Action</Button>
        {/snippet}
      </Card>
      
      <Card 
        variant="elevated" 
        title="Elevated Card"
        subtitle="Enhanced shadow and depth"
      >
        {#snippet children()}
          <p>This card has an elevated appearance with enhanced shadows for more prominence.</p>
        {/snippet}
      </Card>
      
      <Card 
        variant="bordered" 
        title="Bordered Card"
        subtitle="Primary border styling"
      >
        {#snippet children()}
          <p>This card features a bordered design using the primary color from our palette.</p>
        {/snippet}
      </Card>
      
      <Card 
        variant="dark" 
        title="Dark Theme Card"
        subtitle="Dark mode styling"
        clickable
        onclick={handleCardClick}
      >
        {#snippet children()}
          <p>This card demonstrates dark theme styling. Click me to see the interaction!</p>
        {/snippet}
        
        {#snippet footer()}
          <Button variant="secondary" size="sm">Dark Action</Button>
        {/snippet}
      </Card>
      
      <Card 
        variant="flat"
        size="spacious"
        title="Flat Spacious Card"
      >
        {#snippet children()}
          <p>This card uses a flat design with spacious padding for a clean, minimal look.</p>
        {/snippet}
      </Card>
    </div>
  </section>
</main>

<style lang="scss">
  @use '../styles/variables' as *;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: $space-8;
    min-height: 100vh;
  }
  
  .header {
    text-align: center;
    margin-bottom: $space-16;
    
    h1 {
      color: $primary;
      margin-bottom: $space-4;
      font-variation-settings: 'wght' #{$font-weight-bold};
    }
    
    .subtitle {
      font-size: $font-size-xl;
      color: $text-muted;
      font-variation-settings: 'wght' #{$font-weight-light};
    }
  }
  
  .section {
    margin-bottom: $space-16;
    
    h2 {
      color: $text-primary;
      margin-bottom: $space-8;
      font-variation-settings: 'wght' #{$font-weight-semibold};
    }
  }
  
  .typography-demo {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    padding: $space-6;
    background: $neutral-light;
    border-radius: $radius-xl;
    border: 1px solid $neutral-mid;
  }
  
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $space-4;
  }
  
  .color-swatch {
    padding: $space-6;
    border-radius: $radius-lg;
    display: flex;
    flex-direction: column;
    gap: $space-2;
    
    span {
      font-variation-settings: 'wght' #{$font-weight-semibold};
      font-size: $font-size-lg;
    }
    
    code {
      font-family: $font-family-mono;
      font-size: $font-size-sm;
      opacity: 0.8;
    }
    
    &.primary {
      background-color: $primary;
      color: $white-chalk;
    }
    
    &.secondary {
      background-color: $secondary;
      color: $white-chalk;
    }
    
    &.accent {
      background-color: $accent;
      color: $cosmic-black;
    }
    
    &.neutral {
      background-color: $neutral-light;
      color: $cosmic-black;
      border: 1px solid $neutral-mid;
    }
  }
  
  .component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $space-6;
  }
  
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: $space-6;
  }
  
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: $space-3;
    
    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
    }
  }
  
  // Responsive typography
  @media (min-width: $breakpoint-lg) {
    .header h1 {
      font-size: $font-size-6xl;
    }
    
    .header .subtitle {
      font-size: $font-size-2xl;
    }
  }
</style>