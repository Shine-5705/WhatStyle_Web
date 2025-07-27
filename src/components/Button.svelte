<script lang="ts">
  import styles from '../styles/components/Button.module.scss';
  
  interface Props {
    variant?: 'primary' | 'secondary' | 'success' | 'danger'
    size?: 'sm' | 'lg' | 'xl'
    disabled?: boolean
    loading?: boolean
    full?: boolean
    type?: 'button' | 'submit' | 'reset'
    onclick?: (event: MouseEvent) => void
    children?: any
  }
  
  let {
    variant = 'primary',
    size,
    disabled = false,
    loading = false,
    full = false,
    type = 'button',
    onclick,
    children,
    ...restProps
  }: Props = $props()
  
  $inspect(styles) // Debug CSS modules classes
  
  const buttonClass = $derived(() => {
    const classes = [styles.btn]
    
    if (variant) classes.push(styles[variant])
    if (size) classes.push(styles[size])
    if (full) classes.push(styles.full)
    if (loading) classes.push(styles.loading)
    
    return classes.join(' ')
  })
</script>

<button
  class={buttonClass()}
  {type}
  disabled={disabled || loading}
  onclick={onclick}
  {...restProps}
>
  {#if loading}
    <span style="opacity: 0;">{@render children?.()}</span>
  {:else}
    {@render children?.()}
  {/if}
</button>