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
</script>

<main class="container">
  <h1>Svelte 5 + CSS Modules + SCSS</h1>
  
  <div class="grid">
    <Card 
      title="Button Examples" 
      subtitle="Different variants and sizes"
    >
      {#snippet children()}
        <div class="button-group">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success" size="sm">Small Success</Button>
          <Button variant="danger" size="lg">Large Danger</Button>
          <Button variant="primary" {loading} onclick={handleClick}>
            {loading ? 'Loading...' : 'Click me'}
          </Button>
        </div>
      {/snippet}
    </Card>
    
    <Card 
      variant="elevated" 
      size="compact"
      title="Elevated Card"
    >
      {#snippet children()}
        <p>This is an elevated card with compact spacing.</p>
      {/snippet}
      
      {#snippet footer()}
        <Button variant="secondary" size="sm" full>Action</Button>
      {/snippet}
    </Card>
    
    <Card variant="flat" size="spacious">
      {#snippet header()}
        <div>
          <h2>Custom Header</h2>
          <span>With custom content</span>
        </div>
      {/snippet}
      
      {#snippet children()}
        <p>This card has a custom header and spacious layout.</p>
      {/snippet}
    </Card>
  </div>
</main>

<style lang="scss">
  @use '../styles/variables' as *;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: $space-8;
  }
  
  h1 {
    text-align: center;
    color: $primary;
    margin-bottom: $space-8;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $space-6;
  }
  
  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: $space-3;
    
    @media (max-width: 640px) {
      flex-direction: column;
    }
  }
</style>