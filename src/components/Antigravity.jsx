import { useEffect, useRef } from 'react'

export default function Antigravity({
  width = 1920,
  height = 900,
  count = 500,
  magnetRadius = 25,
  ringRadius = 20,
  waveSpeed = 1.2,
  waveAmplitude = 1.2,
  particleSize = 3,
  lerpSpeed = 0.15,
  color = '#ff8c42',
  autoAnimate = true,
  particleVariance = 1.5,
  rotationSpeed = 0.2,
  depthFactor = 0.8,
  pulseSpeed = 2.5,
  fieldStrength = 7,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    let animationFrameId
    let time = 0

    // Particle system
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      radius: particleSize + Math.random() * particleVariance,
      wave: Math.random() * Math.PI * 2,
      depth: 0.3 + Math.random() * depthFactor,
      brightness: 0.5 + Math.random() * 0.5,
    }))

    const centerX = width / 2
    const centerY = height / 2

    const animate = () => {
      time += waveSpeed * 0.015

      // Clear with subtle fade for trail effect
      ctx.fillStyle = 'rgba(20, 35, 70, 0.15)'
      ctx.fillRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        // Wave motion
        particle.wave += waveSpeed * 0.015
        const waveY = Math.sin(particle.wave + time) * waveAmplitude * 30
        const waveX = Math.cos(particle.wave + time * 0.5) * waveAmplitude * 20

        // Magnetic pull towards center
        const dx = centerX - particle.x + waveX
        const dy = centerY - particle.y + waveY
        const dist = Math.sqrt(dx * dx + dy * dy) || 1

        if (dist < magnetRadius * 30) {
          particle.vx += (dx / dist) * fieldStrength * 0.02
          particle.vy += (dy / dist) * fieldStrength * 0.02
        }

        // Rotation effect
        const angle = Math.atan2(dy, dx)
        particle.vx += Math.cos(angle + Math.PI / 2) * rotationSpeed * 0.3
        particle.vy += Math.sin(angle + Math.PI / 2) * rotationSpeed * 0.3

        // Damping
        particle.vx *= 0.95
        particle.vy *= 0.95

        // Apply velocity
        particle.x += particle.vx * lerpSpeed * 5
        particle.y += particle.vy * lerpSpeed * 5

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Pulse effect
        const pulse = 1 + Math.sin(time * pulseSpeed + index * 0.1) * 0.4
        const size = particle.radius * pulse * particle.depth

        // Render particle with glow
        const glowSize = size * 4
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        )
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.4, color + '80')
        gradient.addColorStop(1, color + '00')

        ctx.globalAlpha = particle.brightness * particle.depth
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Bright core
        ctx.globalAlpha = particle.brightness
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size * 0.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalAlpha = 1
      })

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = color
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
          if (dist < ringRadius * 8) {
            ctx.globalAlpha = (1 - dist / (ringRadius * 8)) * 0.3
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [
    width,
    height,
    count,
    magnetRadius,
    ringRadius,
    waveSpeed,
    waveAmplitude,
    particleSize,
    lerpSpeed,
    color,
    particleVariance,
    rotationSpeed,
    depthFactor,
    pulseSpeed,
    fieldStrength,
  ])

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: 'transparent',
      }}
    />
  )
}
