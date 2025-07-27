<script lang="ts">
  import styles from '../styles/components/Card.module.scss'
  
  interface Props {
    variant?: 'elevated' | 'flat'
    size?: 'compact' | 'spacious'
    title?: string
    subtitle?: string
    header?: any
    children?: any
    footer?: any
  }
  
  let {
    variant,
    size,
    title,
    subtitle,
    header,
    children,
    footer,
    ...restProps
  }: Props = $props()
  
  const cardClass = $derived(() => {
    const classes = [styles.card]
    
    if (variant) classes.push(styles[variant])
    if (size) classes.push(styles[size])
    
    return classes.join(' ')
  })
</script>

<div class={cardClass()} {...restProps}>
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