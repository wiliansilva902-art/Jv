"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Heart, 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Users,
  Gem
} from "lucide-react"

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Delicado",
    description: "Cada cliente e tratada com carinho e atencao especial",
  },
  {
    icon: Sparkles,
    title: "Atendo em Minha Casa",
    description: "Atendimento exclusivo em um ambiente confortavel e acolhedor",
  },
  {
    icon: Gem,
    title: "Materiais de Qualidade",
    description: "Utilizamos apenas produtos de alta qualidade",
  },
  {
    icon: TrendingUp,
    title: "Tendencias Modernas",
    description: "Sempre atualizada com as novidades do mundo nail art",
  },
  {
    icon: Shield,
    title: "Higiene e Cuidado",
    description: "Rigorosos protocolos de higienizacao",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Servico exclusivo adaptado ao seu estilo",
  },
]

export function DifferentialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })

  return (
    <section
      id="diferenciais"
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-cream"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-rose-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-nude-pink/8 to-transparent rounded-full blur-3xl" />
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
            Por que escolher
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-elegant-black mt-2">
            Meus Diferenciais
          </h2>
          <p className="text-elegant-black-light text-sm md:text-base mt-3 max-w-lg mx-auto">
            Uma experiencia completa que vai alem das unhas perfeitas
          </p>
          <div className="w-16 h-px bg-rose-gold/40 mx-auto mt-5" />
        </motion.div>

        {/* Differentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.08 * index,
              }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-xl bg-white/60 border border-rose-gold/8 hover:border-rose-gold/25 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-gold/15 to-nude-pink/10 flex items-center justify-center mb-4 group-hover:from-rose-gold/25 group-hover:to-nude-pink/15 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-rose-gold" />
                </div>

                {/* Text */}
                <h3 className="font-serif text-base md:text-lg text-elegant-black mb-2 group-hover:text-rose-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-elegant-black-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
