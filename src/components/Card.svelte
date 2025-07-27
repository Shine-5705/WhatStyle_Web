<script lang="ts">
  import styles from '../styles/components/Card.module.scss'
  
  interface Props {
    variant?: 'elevated' | 'flat' | 'bordered' | 'dark'
    size?: 'compact' | 'spacious'
    clickable?: boolean
    title?: string
    subtitle?: string
    header?: any
    children?: any
    footer?: any
    onclick?: (event: MouseEvent) => void
  }
  
  let {
    variant,
    size,
    clickable = false,
    title,
    subtitle,
    header,
    children,
    footer,
    onclick,
    ...restProps
  }: Props = $props()
  
  const cardClass = $derived(() => {
    const classes = [styles.card]
    
    if (variant) classes.push(styles[variant])
    if (size) classes.push(styles[size])
    if (clickable) classes.push(styles.clickable)
    
    return classes.join(' ')
  })
</script>

<div class={cardClass()} onclick={onclick} {...restProps}>
  {#if header || title || subtitle}
    <div class={styles.header}>
      {#if header}
        {@render header()}
      {:else}
        {#if title}
          <h3 class={styles.title}>{title}</h3>
        {/if}
        {#if subtitle}
          <p class={styles.subtitle}>{subtitle}</p>
        {/if}
      {/if}
    </div>
  {/if}
  
  {#if children}
    <div class={styles.body}>
      {@render children()}
    </div>
  {/if}
  
  {#if footer}
    <div class={styles.footer}>
      {@render footer()}
    </div>
  {/if}
</div>