"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay } from "swiper/modules"
import { X } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-coverflow"

const portfolioImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0001-UH2oGK7zRBdKp01x8lrO1EneqNcqRS.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0000-GS2Q87NGWphaSxhBTiScmU5JuSCiIZ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0002-csT6eqyaZmi9od5HEL0RUF4Q3Q2wwL.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0004-9C7hVRJEo2QuBGFsskAycQGmuOy5b3.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0005-Hb2XsqBHCYjGZ5BwqgiRfDxDfFcegA.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0006-h4ZVSt3BE8kMQJeLLjr252lzsebXRJ.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260508-WA0003-GbUquwiEmVttJ4nfRg3FJSzoi6Fi1w.jpg",
]

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-80px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-cream via-champagne-light/20 to-cream"
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
            Inspiracao
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-elegant-black mt-2">
            Meu Portfolio
          </h2>
          <p className="text-elegant-black-light text-sm md:text-base mt-3 max-w-lg mx-auto">
            Cada trabalho e feito com dedicacao para realcar a beleza de cada cliente
          </p>
          <div className="w-16 h-px bg-rose-gold/40 mx-auto mt-5" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 8,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="py-8"
          >
            {portfolioImages.map((src, index) => (
              <SwiperSlide key={index} className="!w-56 md:!w-64">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedImage(src)}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-elegant-black/8"
                >
                  <Image
                    src={src}
                    alt={`Trabalho ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-rose-gold/40 transition-colors duration-300" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Grid gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {portfolioImages.map((src, index) => (
            <motion.div
              key={`grid-${index}`}
              initial={{ 
                opacity: 0, 
                y: 20,
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
              } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.06,
              }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={src}
                alt={`Trabalho ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-elegant-black/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={selectedImage}
                alt="Portfolio"
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-elegant-black hover:bg-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
