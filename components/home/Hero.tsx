'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { HERO_CONTENT, WA_LINK } from '@/data/content';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center overflow-hidden bg-white'>

      {/* Background decorations */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Large pink blob top-right */}
        <div
          className='absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-15'
          style={{ background: 'radial-gradient(circle, #F5548C 0%, transparent 70%)' }}
        />
        {/* Small pink blob bottom-left */}
        <div
          className='absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full opacity-10'
          style={{ background: 'radial-gradient(circle, #F5548C 0%, transparent 70%)' }}
        />
        {/* Grid pattern overlay */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `linear-gradient(#F5548C 1px, transparent 1px), linear-gradient(90deg, #F5548C 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className='container-custom w-full py-32 md:py-0'>
        <div className='grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100vh-80px)]'>

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='flex flex-col justify-center py-10 md:py-0'>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className='inline-flex items-center gap-2 bg-[var(--color-primary-subtle)] text-[var(--color-primary)] text-xs font-bold px-4 py-2 rounded-full mb-6 w-fit border border-[var(--color-primary)]/20'>
              <span className='w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse' />
              Perkhidmatan Terpercaya di Malaysia
            </motion.div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight'>
              {HERO_CONTENT.headline.split(' ').slice(0, 4).join(' ')}{' '}
              <span className='gradient-text'>
                {HERO_CONTENT.headline.split(' ').slice(4).join(' ')}
              </span>
            </h1>

            <p className='text-base md:text-lg text-slate-500 mb-10 max-w-md leading-relaxed'>
              {HERO_CONTENT.subheadline}
            </p>

            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href={WA_LINK}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold px-7 py-4 rounded-2xl shadow-xl shadow-[#F5548C]/30 transition-all duration-200 hover:scale-105 hover:shadow-[#F5548C]/40 text-base'>
                <MessageCircle size={18} />
                {HERO_CONTENT.cta}
                <ArrowRight size={16} className='ml-1' />
              </a>
              <a
                href='#services'
                className='inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-slate-700 font-semibold px-7 py-4 rounded-2xl transition-all duration-200 text-base'>
                Lihat Layanan
              </a>
            </div>

            {/* Trust indicators */}
            <div className='flex items-center gap-6 mt-10 pt-8 border-t border-slate-100'>
              <div className='text-center'>
                <p className='text-2xl font-extrabold text-slate-900'>5K+</p>
                <p className='text-xs text-slate-500 font-medium'>Pelanggan</p>
              </div>
              <div className='w-px h-10 bg-slate-200' />
              <div className='text-center'>
                <p className='text-2xl font-extrabold text-slate-900'>RM2M+</p>
                <p className='text-xs text-slate-500 font-medium'>Dicairkan</p>
              </div>
              <div className='w-px h-10 bg-slate-200' />
              <div className='text-center'>
                <p className='text-2xl font-extrabold text-slate-900'>5 Min</p>
                <p className='text-xs text-slate-500 font-medium'>Proses</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className='relative flex items-center justify-center'>

            {/* Decorative ring */}
            <div className='absolute inset-0 rounded-3xl border-2 border-[var(--color-primary)]/20 -rotate-3 scale-95 hidden md:block' />
            <div className='absolute inset-0 rounded-3xl border border-[var(--color-primary-subtle)] rotate-2 scale-98 hidden md:block' />

            {/* Image container — no fixed height, preserves aspect ratio */}
            <div className='relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 ring-1 ring-slate-200'>
              <Image
                src='/images/hero1.jpeg'
                alt='Happy customer using cashout service'
                width={700}
                height={500}
                className='w-full h-auto object-contain'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />

              {/* Floating badge on image */}
              <div className='absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3'>
                <div className='w-9 h-9 bg-[var(--color-primary-subtle)] rounded-xl flex items-center justify-center'>
                  <span className='text-[var(--color-primary)] font-bold text-sm'>✓</span>
                </div>
                <div>
                  <p className='text-xs text-slate-500'>Wang masuk dalam</p>
                  <p className='text-sm font-bold text-slate-900'>5–10 minit</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
