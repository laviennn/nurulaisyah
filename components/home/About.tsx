'use client';

import { ABOUT_CONTENT, WHY_CHOOSE_US } from '@/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, BadgeCheck, Shield } from 'lucide-react';

const itemIcons = [Clock, BadgeCheck, Shield];

export default function About() {
  return (
    <section id='about' className='py-24 bg-white overflow-hidden'>
      <div className='container-custom'>

        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block bg-[var(--color-primary-subtle)] text-[var(--color-primary)] text-xs font-bold px-4 py-2 rounded-full mb-4 border border-[var(--color-primary)]/15'>
            Tentang Kami
          </span>
          <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 mb-5'>
            {ABOUT_CONTENT.title}
          </h2>
          <div className='flex justify-center mb-6'>
            <Image
              src='/images/logo-nurul.png'
              alt='NurulAisyah Logo'
              width={200}
              height={65}
              className='object-contain h-24 w-auto'
            />
          </div>
          <p className='text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>
            {ABOUT_CONTENT.text}
          </p>
        </div>

        {/* Cards */}
        <div className='grid md:grid-cols-3 gap-6'>
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = itemIcons[index] || CheckCircle2;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg-white border border-slate-100 rounded-3xl p-8 card-hover shadow-sm hover:border-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/10'>

                {/* Top accent bar */}
                <div className='absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className='w-14 h-14 bg-[var(--color-primary-subtle)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300'>
                  <Icon size={24} />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3'>{item.title}</h3>
                <p className='text-slate-500 text-sm leading-relaxed'>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
