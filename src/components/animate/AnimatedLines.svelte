<script lang="ts">
  import { onMount } from 'svelte'
  import { Tween } from 'svelte/motion'
  import { cubicOut, elasticOut } from 'svelte/easing'
  import { draw } from 'svelte/transition'
  import styles from '../../styles/components/AnimatedLines.module.scss'
  
  interface CurvedLine {
    id: string
    startX: number
    startY: number
    endX: number
    endY: number
    controlPoints: { x1: number, y1: number, x2: number, y2: number }[]
    color: string
    thickness: number
    duration: number
    delay: number
  }
  
  // Define flowing curved lines like in the reference image
  const curvedLines: CurvedLine[] = [
    {
      id: 'wave1',
      startX: -200,
      startY: 40,
      endX: 1400,
      endY: 45,
      controlPoints: [
        { x1: 100, y1: 20, x2: 200, y2: 60 },
        { x1: 300, y1: 25, x2: 400, y2: 55 },
        { x1: 500, y1: 30, x2: 600, y2: 50 },
        { x1: 700, y1: 35, x2: 800, y2: 45 },
        { x1: 900, y1: 25, x2: 1000, y2: 55 },
        { x1: 1100, y1: 40, x2: 1200, y2: 40 }
      ],
      color: '#E84A2E',
      thickness: 3,
      duration: 20000,
      delay: 0
    },
    {
      id: 'wave2',
      startX: 1400,
      startY: 55,
      endX: -200,
      endY: 50,
      controlPoints: [
        { x1: 1200, y1: 75, x2: 1100, y2: 35 },
        { x1: 1000, y1: 70, x2: 900, y2: 40 },
        { x1: 800, y1: 65, x2: 700, y2: 45 },
        { x1: 600, y1: 75, x2: 500, y2: 35 },
        { x1: 400, y1: 70, x2: 300, y2: 40 },
        { x1: 200, y1: 65, x2: 100, y2: 45 }
      ],
      color: '#0A2538',
      thickness: 2.5,
      duration: 25000,
      delay: 5000
    },
    {
      id: 'wave3',
      startX: -150,
      startY: 65,
      endX: 1350,
      endY: 60,
      controlPoints: [
        { x1: 50, y1: 45, x2: 150, y2: 85 },
        { x1: 250, y1: 50, x2: 350, y2: 80 },
        { x1: 450, y1: 55, x2: 550, y2: 75 },
        { x1: 650, y1: 45, x2: 750, y2: 85 },
        { x1: 850, y1: 60, x2: 950, y2: 70 },
        { x1: 1050, y1: 45, x2: 1150, y2: 85 }
      ],
      color: '#E2CC9C',
      thickness: 2,
      duration: 18000,
      delay: 2500
    },
    {
      id: 'wave4',
      startX: 1350,
      startY: 35,
      endX: -150,
      endY: 40,
      controlPoints: [
        { x1: 1150, y1: 55, x2: 1050, y2: 15 },
        { x1: 950, y1: 50, x2: 850, y2: 20 },
        { x1: 750, y1: 45, x2: 650, y2: 25 },
        { x1: 550, y1: 55, x2: 450, y2: 15 },
        { x1: 350, y1: 50, x2: 250, y2: 20 },
        { x1: 150, y1: 45, x2: 50, y2: 25 }
      ],
      color: '#E2E4E7',
      thickness: 1.5,
      duration: 22000,
      delay: 7500
    }
  ]
  
  // Tween stores for each line's position
  let lineTweens = curvedLines.map(line => 
    new Tween(0, { 
      duration: line.duration, 
      easing: cubicOut 
    })
  )
  
  // Create SVG path from curved line data
  const createCurvedPath = (line: CurvedLine, progress: number): string => {
    if (progress === 0) return ''
    
    let path = `M ${line.startX} ${line.startY}`
    
    // Calculate how much of the path to show based on progress
    const visibleSegments = Math.floor(progress * line.controlPoints.length)
    const segmentProgress = (progress * line.controlPoints.length) % 1
    
    // Add completed segments
    for (let i = 0; i < visibleSegments; i++) {
      const cp = line.controlPoints[i]
      const nextX = i === line.controlPoints.length - 1 ? line.endX : 
                   line.startX + ((line.endX - line.startX) * (i + 1) / line.controlPoints.length)
      const nextY = i === line.controlPoints.length - 1 ? line.endY :
                   line.startY + ((line.endY - line.startY) * (i + 1) / line.controlPoints.length)
      
      path += ` C ${cp.x1} ${cp.y1}, ${cp.x2} ${cp.y2}, ${nextX} ${nextY}`
    }
    
    // Add partial segment if in progress
    if (visibleSegments < line.controlPoints.length && segmentProgress > 0) {
      const cp = line.controlPoints[visibleSegments]
      const nextX = line.startX + ((line.endX - line.startX) * (visibleSegments + segmentProgress) / line.controlPoints.length)
      const nextY = line.startY + ((line.endY - line.startY) * (visibleSegments + segmentProgress) / line.controlPoints.length)
      
      path += ` C ${cp.x1} ${cp.y1}, ${cp.x2} ${cp.y2}, ${nextX} ${nextY}`
    }
    
    return path
  }
  
  const animateLine = async (index: number) => {
    const line = curvedLines[index]
    const tween = lineTweens[index]
    
    // Wait for delay
    await new Promise(resolve => setTimeout(resolve, line.delay))
    
    // Start the animation loop
    const animate = async () => {
      // Animate to 100%
      await tween.set(1)
      // Reset to 0
      tween.set(0, { duration: 0 })
      // Wait before next loop
      await new Promise(resolve => setTimeout(resolve, 3000))
      // Repeat
      animate()
    }
    
    animate()
  }
  
  let mounted = false
  
  onMount(() => {
    mounted = true
    // Start all line animations
    curvedLines.forEach((_, index) => {
      animateLine(index)
    })
  })
</script>

<div class={styles.linesContainer}>
  {#if mounted}
    <svg 
      class={styles.curveSvg}
      viewBox="0 0 1200 100" 
      preserveAspectRatio="none"
    >
      {#each curvedLines as line, index (line.id)}
        <path
          d={createCurvedPath(line, lineTweens[index].current)}
          stroke={line.color}
          stroke-width={line.thickness}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.8"
          filter="blur(0.3px)"
        />
        <!-- Add a glow effect -->
        <path
          d={createCurvedPath(line, lineTweens[index].current)}
          stroke={line.color}
          stroke-width={line.thickness * 2}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.2"
          filter="blur(2px)"
        />
      {/each}
    </svg>
    
    <!-- Floating particles -->
    {#each Array(6).fill(null) as _, i}
      <div
        class={styles.particle}
        style="
          top: {20 + Math.random() * 60}%;
          left: {10 + Math.random() * 80}%;
          width: {1 + Math.random() * 2}px;
          height: {1 + Math.random() * 2}px;
          background: #E2CC9C;
          animation-delay: {Math.random() * 5}s;
          animation-duration: {8 + Math.random() * 4}s;
        "
      ></div>
    {/each}
  {/if}
</div>

<style lang="scss">
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) scale(1); 
      opacity: 0.3; 
    }
    50% { 
      transform: translateY(-20px) scale(1.5); 
      opacity: 0.8; 
    }
  }
  
  @keyframes drift {
    0% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(-10px); }
  }
</style>