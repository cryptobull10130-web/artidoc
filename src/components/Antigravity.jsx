import { useEffect, useRef } from 'react'

export default function Antigravity({
  width = 1080,
  height = 1080,
  count = 750,
  magnetRadius = 16,
  ringRadius = 10,
  waveSpeed = 1.1,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.13,
  color = '#484790',
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0.2,
  depthFactor = 0.7,
  pulseSpeed = 3,
  particleShape = 'tetrahedron',
  fieldStrength = 6,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    // Particle system
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      radius: particleSize + Math.random() * particleVariance,
      wave: Math.random() * Math.PI * 2,
      depth: Math.random() * depthFactor,
    }))

    const centerX = width / 2
    const centerY = height / 2

    const animate = () => {
      time += waveSpeed * 0.01

      // Clear canvas with slight fade for motion blur
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.fillRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        // Wave motion
        particle.wave += waveSpeed * 0.001
        const waveY = Math.sin(particle.wave) * waveAmplitude * 50

        // Magnetic pull towards center
        const dx = centerX - particle.x
        const dy = centerY - particle.y + waveY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < magnetRadius * 100) {
          particle.vx += (dx / dist) * fieldStrength * 0.001
          particle.vy += (dy / dist) * fieldStrength * 0.001
        }

        // Rotation effect
        const angle = Math.atan2(dy, dx)
        particle.vx += Math.cos(angle + rotationSpeed) * 0.1
        particle.vy += Math.sin(angle + rotationSpeed) * 0.1

        // Apply velocity with lerp
        particle.x += particle.vx * lerpSpeed
        particle.y += particle.vy * lerpSpeed

        // Bounce at edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1
        if (particle.y < 0 || particle.y > height) particle.vy *= -1

        // Keep in bounds
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))

        // Pulse effect
        const pulse = 1 + Math.sin(time * pulseSpeed + index) * 0.3
        const size = particle.radius * pulse * particle.depth

        // Render particle
        ctx.fillStyle = color
        ctx.globalAlpha = 0.6 + particle.depth * 0.4
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Draw connecting lines (ring effect)
      ctx.strokeStyle = color
      ctx.globalAlpha = 0.2
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y)
          if (dist < ringRadius * 20) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })
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
      width={width}
      height={height}
      style={{
        display: 'block',
        background: 'transparent',
        margin: '0 auto',
      }}
    />
  )
}
