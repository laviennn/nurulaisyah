'use client';

import { CTA_EXTRA, WA_LINK } from '@/data/content';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className='py-24 relative overflow-hidden bg-white'>
      <div className='container-custom'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='relative rounded-3xl overflow-hidden text-center px-6 py-16 md:py-20'>

          {/* Gradient background */}
          <div
            className='absolute inset-0'
            style={{
              background: 'linear-gradient(135deg, #F5548C 0%, #d93872 60%, #b02060 100%)',
            }}
          />

          {/* Pattern overlay */}
          <div
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Decorative circles */}
          <div className='absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full' />
          <div className='absolute -bottom-20 -left-10 w-56 h-56 bg-white/10 rounded-full' />

          <div className='relative z-10'>
            <span className='inline-block bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/25 backdrop-blur-sm'>
              💬 Hubungi Kami Sekarang
            </span>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight'>
              {CTA_EXTRA.headline}
            </h2>

            <p className='text-white/80 text-base mb-10 max-w-md mx-auto'>
              Proses mudah, cepat dan selamat. Kami sedia membantu anda 24/7.
            </p>

            <a
              href={WA_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 bg-white text-[var(--color-primary)] font-bold text-base px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/30 transition-all duration-200 hover:scale-105 group'>
              <MessageCircle size={20} />
              {CTA_EXTRA.button}
              <ArrowRight size={16} className='transition-transform group-hover:translate-x-1' />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
