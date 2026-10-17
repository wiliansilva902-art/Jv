"use client"

import Image from "next/image"
import { CalendarDays, Heart, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const whatsappNumber = "5562999098774"

const services = [
  {
    title: "Banho de Gel",
    description: "Deixa suas unhas mais fortes, uniformes e com um brilho incrível, sem perder a naturalidade.",
    price: "R$ 55,00",
    maintenance: "R$ 40,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261006-WA0232-ZjO4DRJzXkBjmTde2rkkpQAarfAFJ8.jpg",
  },
  {
    title: "Blindagem",
    description: "Mais resistência, brilho e proteção para suas unhas, com um acabamento impecável.",
    price: "R$ 45,00",
    maintenance: "R$ 30,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261006-WA0231-6GyKiy1d42TS4awXqFHkfcZ5w8j1qe.jpg",
  },
  {
    title: "Alongamento",
    description: "Unhas mais longas, resistentes e com um visual incrível, do jeitinho que você sempre sonhou.",
    price: "R$ 65,00",
    maintenance: "R$ 50,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261006-WA0233-53zXARjT86iU0vZhaqlkvZc9Z3kxYr.jpg",
  },
]

function bookingUrl(service: string) {
  const message = `Olá, Júlia! Gostaria de reservar um horário para ${service}.` 
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function CatalogSection() {
  return (
    <section id="catalogo" className="relative overflow-hidden bg-[#f8eee5] py-16 text-[#3b211d] md:py-24">
      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-[#925247]">Catálogo de serviços</span>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Escolha seu cuidado</h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#694a43]">Atendimento somente com horário reservado. Escolha o seu serviço e fale comigo pelo WhatsApp.</p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.1 }} className="overflow-hidden rounded-[2rem] border border-[#b98b7b]/50 bg-[#fff9f3] shadow-[0_14px_35px_rgba(98,49,39,0.1)]">
              <div className="relative aspect-[1.1/0.82] overflow-hidden p-3 pb-0">
                <Image src={service.image} alt={`Exemplo de ${service.title}`} fill className="object-cover p-3 pb-0" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-3xl italic">{service.title}</h3>
                <div className="mx-auto my-4 flex items-center justify-center gap-3 text-[#ad675a]"><span className="h-px w-12 bg-[#d4aaa0]" /><Heart className="h-4 w-4 fill-current" /><span className="h-px w-12 bg-[#d4aaa0]" /></div>
                <p className="min-h-20 font-sans text-sm leading-relaxed text-[#694a43]">{service.description}</p>
                <div className="my-5 rounded-full bg-[#ead0c6] py-3 font-serif text-3xl">{service.price}</div>
                <div className="mb-5 rounded-2xl bg-[#f1dfd6] px-4 py-3 text-left"><p className="flex items-center gap-2 text-xs uppercase tracking-widest"><CalendarDays className="h-4 w-4" /> Manutenção</p><p className="mt-1 font-serif text-2xl">{service.maintenance} <span className="font-sans text-xs text-[#694a43]">20–30 dias</span></p></div>
                <a href={bookingUrl(service.title)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#5c3028] px-5 py-3 font-sans text-sm font-medium text-white transition hover:bg-[#7d4539] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c3028]"><MessageCircle className="h-4 w-4" /> Reservar horário</a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full bg-[#ead0c6] px-6 py-4 font-serif text-2xl md:px-10 md:text-3xl"><span className="font-sans text-sm uppercase tracking-[0.2em]">Remoção</span><span>R$ 30,00</span></div>
      </div>
    </section>
  )
}
