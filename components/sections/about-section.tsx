"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })

  const highlights = [
    { icon: Heart, text: "Atendimento com carinho" },
    { icon: Sparkles, text: "Atenção aos detalhes" },
    { icon: Star, text: "Experiencia premium" },
  ]

  return (
    <section
      id="sobre"
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-cream"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-rose-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-nude-pink/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-rose-gold text-sm tracking-widest uppercase font-medium">
            Conheca
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-elegant-black mt-2">
            A Profissional
          </h2>
          <div className="w-16 h-px bg-rose-gold/40 mx-auto mt-5" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Frame decoration */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -inset-3 border border-rose-gold/20 rounded-2xl"
              />
              
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl shadow-elegant-black/8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_00000000148c71f58441eed866a71073-ynNC3pFhmvg6LvtrLb8ANvk18fYj68.png"
                  alt="Julia Vitoria - Nail Designer"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-3 -right-3 bg-white rounded-xl px-4 py-2 shadow-lg border border-rose-gold/10"
              >
                <div className="flex items-center gap-1.5 text-rose-gold">
                  <Heart className="w-4 h-4 fill-rose-gold" />
                  <span className="font-medium text-sm text-elegant-black">Nail Designer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-serif text-xl md:text-2xl text-elegant-black"
            >
              Ola, meu nome e{" "}
              <span className="text-gradient">Julia Vitoria</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="space-y-4 text-elegant-black-light text-sm md:text-base leading-relaxed"
            >
              <p>
                A paixao pela beleza e pelo cuidado feminino me trouxe ao universo da nail design, 
                onde cada atendimento e feito com carinho, dedicacao e atencao aos minimos detalhes.
              </p>
              <p>
                Sou <span className="text-elegant-black font-medium">especialista em unhas de gel no modelo F1</span>, 
                uma tecnica que proporciona resultados elegantes e duradouros. Ao longo da minha trajetoria 
                venho aprimorando tecnicas e tendencias para oferecer nao apenas unhas bonitas, mas{" "}
                <span className="text-elegant-black font-medium">autoestima, elegancia e bem-estar</span>.
              </p>
              <p className="text-rose-gold italic text-base md:text-lg border-l-2 border-rose-gold/30 pl-4">
                Meu objetivo e fazer com que cada cliente se sinta unica, confiante e ainda mais linda.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-rose-gold/10 text-sm"
                >
                  <item.icon className="w-4 h-4 text-rose-gold" />
                  <span className="text-elegant-black-light">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
