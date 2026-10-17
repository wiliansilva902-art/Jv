"use client"

import Image from "next/image"
import { CalendarDays, Heart } from "lucide-react"
import { motion } from "framer-motion"

const whatsappNumber = "5562999098774"

const services = [
  {
    title: "Banho de Gel",
    description: "Deixa suas unhas mais fortes, uniformes e com um brilho incrível, sem perder a naturalidade.",
    price: "R$ 55,00",
    maintenance: "R$ 40,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261007-WA0055-8eo5BQUMado2f2Fy5wjLb70fczLVjQ.jpg",
    objectPosition: "center 52%",
  },
  {
    title: "Blindagem",
    description: "Mais resistência, brilho e proteção para suas unhas, com um acabamento impecável.",
    price: "R$ 45,00",
    maintenance: "R$ 30,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261007-WA0056-fXQn7PYerbO5ddNr6yLkHHVVtCsvn6.jpg",
    objectPosition: "center 50%",
  },
  {
    title: "Alongamento",
    description: "Unhas mais longas, resistentes e com um visual incrível, do jeitinho que você sempre sonhou.",
    price: "R$ 65,00",
    maintenance: "R$ 50,00",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261007-WA0054-HJzpfHdouhAeJogRA0Cc1fjt00fZkm.jpg",
    objectPosition: "center 58%",
  },
]

function bookingUrl(service: string) {
  const message = `Olá, Júlia! Gostaria de reservar um horário para ${service}.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
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
              <div className="relative mx-3 mt-3 aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                <Image src={service.image} alt={`Exemplo de ${service.title}`} fill className="object-cover" style={{ objectPosition: service.objectPosition }} sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-3xl italic">{service.title}</h3>
                <div className="mx-auto my-4 flex items-center justify-center gap-3 text-[#ad675a]"><span className="h-px w-12 bg-[#d4aaa0]" /><Heart className="h-4 w-4 fill-current" /><span className="h-px w-12 bg-[#d4aaa0]" /></div>
                <p className="min-h-20 font-sans text-sm leading-relaxed text-[#694a43]">{service.description}</p>
                <div className="my-5 rounded-full bg-[#ead0c6] py-3 font-serif text-3xl">{service.price}</div>
                <div className="mb-5 rounded-2xl bg-[#f1dfd6] px-4 py-3 text-left"><p className="flex items-center gap-2 text-xs uppercase tracking-widest"><CalendarDays className="h-4 w-4" /> Manutenção</p><p className="mt-1 font-serif text-2xl">{service.maintenance} <span className="font-sans text-xs text-[#694a43]">20–30 dias</span></p></div>
                <a href={bookingUrl(service.title)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#5c3028] px-5 py-3 font-sans text-sm font-medium text-white transition hover:bg-[#7d4539] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5c3028]"><WhatsAppIcon className="h-4 w-4" /> Reservar horário</a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-6xl items-center justify-between rounded-full bg-[#ead0c6] px-6 py-4 font-serif text-2xl md:px-10 md:text-3xl"><span className="font-sans text-sm uppercase tracking-[0.2em]">Remoção</span><span>R$ 30,00</span></div>
      </div>
    </section>
  )
}
