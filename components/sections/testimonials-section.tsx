"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Star, Quote } from "lucide-react"

import "swiper/css"

const testimonials = [
  {
    id: 1,
    name: "Mariana S.",
    text: "Minhas unhas nunca ficaram tao perfeitas! A Julia tem um cuidado incrivel.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carolina L.",
    text: "Atendimento impecavel e super delicado. Me senti especial do inicio ao fim.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda R.",
    text: "Experiencia maravilhosa! Ja indiquei para todas as minhas amigas.",
    rating: 5,
  },
  {
    id: 4,
    name: "Beatriz M.",
    text: "A melhor profissional que ja conheci! Trabalho impecavel e muito carinho.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fernanda C.",
    text: "Cada vez que saio de la me sinto mais linda e confiante.",
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "text-rose-gold fill-rose-gold" : "text-rose-gold/30"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })

  return (
    <section
      id="depoimentos"
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-cream via-champagne-light/15 to-cream"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-rose-gold text-sm tracking-widest uppercase font-medium">
            Depoimentos
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-elegant-black mt-2">
            O que dizem minhas clientes
          </h2>
          <div className="w-16 h-px bg-rose-gold/40 mx-auto mt-5" />
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay]}
            className="pb-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 * index }}
                  className="group h-full"
                >
                  <div className="relative h-full p-6 rounded-xl bg-white/70 border border-rose-gold/8 hover:border-rose-gold/20 hover:shadow-md transition-all duration-300">
                    {/* Quote icon */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-rose-gold flex items-center justify-center shadow-sm">
                      <Quote className="w-4 h-4 text-white" />
                    </div>

                    {/* Content */}
                    <div className="pt-3">
                      <StarRating rating={testimonial.rating} />

                      <p className="mt-3 text-elegant-black-light text-sm leading-relaxed italic">
                        {'"'}{testimonial.text}{'"'}
                      </p>

                      {/* Author */}
                      <div className="mt-4 pt-3 border-t border-rose-gold/8">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-gold/15 to-nude-pink/15 flex items-center justify-center">
                            <span className="text-rose-gold font-serif text-sm font-medium">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <p className="font-medium text-sm text-elegant-black">
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex justify-center gap-12 md:gap-16"
        >
          {[
            { value: "10+", label: "Clientes" },
            { value: "5.0", label: "Avaliacao" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
              className="text-center"
            >
              <p className="font-serif text-3xl md:text-4xl text-gradient font-semibold">
                {stat.value}
              </p>
              <p className="text-elegant-black-light text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
