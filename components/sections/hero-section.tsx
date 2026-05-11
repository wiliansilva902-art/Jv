"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

const WHATSAPP_NUMBER = "5562999098774"
const WHATSAPP_MESSAGE = encodeURIComponent("Olá Júlia Vitória! Gostaria de reservar um horário para fazer minhas unhas 💅✨")

function Particle({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-rose-gold/20 to-champagne/10"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [0, 1, 0.5],
        y: [0, -80],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  )
}

function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
    x: Math.random() * 100,
    y: 60 + Math.random() * 40,
    size: 3 + Math.random() * 5,
  }))
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function HeroSection() {
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 80])
  
  useEffect(() => {
    setParticles(generateParticles(15))
  }, [])

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] -top-32 -right-32 rounded-full bg-gradient-radial from-rose-gold/8 via-champagne/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] -bottom-20 -left-32 rounded-full bg-gradient-radial from-nude-pink/12 via-champagne-light/8 to-transparent blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Soft center glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-radial from-rose-gold/15 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY, opacity: logoOpacity }}
        className="relative z-10 flex flex-col items-center px-6 max-w-3xl mx-auto text-center"
      >
        {/* Logo */}
        <motion.div
          style={{ scale: logoScale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-6"
        >
          <motion.div
            className="absolute inset-0 -m-6 bg-gradient-radial from-rose-gold/15 via-champagne/8 to-transparent rounded-full blur-2xl"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="JV Júlia Vitória - Nail Designer"
              width={380}
              height={380}
              priority
              className="relative z-10 w-56 md:w-72 lg:w-80 h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-elegant-black mb-3 leading-tight tracking-tight"
        >
          Sua beleza começa{" "}
          <span className="text-gradient italic font-medium">nos detalhes</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-sans text-base md:text-lg text-elegant-black-light/75 mb-8 max-w-xl leading-relaxed"
        >
          Unhas sofisticadas, atendimento delicado e uma experiência feita especialmente para você.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-7 py-3.5 rounded-full border border-rose-gold/60 text-rose-gold font-medium text-sm overflow-hidden transition-all duration-300 hover:border-rose-gold hover:text-white"
          >
            <span className="relative z-10">Conhecer meu trabalho</span>
            <motion.div
              className="absolute inset-0 bg-rose-gold"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-7 py-3.5 rounded-full bg-rose-gold text-white font-medium text-sm shadow-lg shadow-rose-gold/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <WhatsAppIcon className="w-4 h-4" />
              Reservar horário
            </span>
            <motion.div
              className="absolute inset-0 bg-rose-gold-dark"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 text-xs text-elegant-black-light/50 tracking-wide"
        >
          Vianopolis, GO
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-rose-gold/60 hover:text-rose-gold transition-colors"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
