'use client';

import { SERVICES, SERVICES_INFO, WA_LINK } from '@/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id='services' className='py-24 bg-slate-50'>
      <div className='container-custom'>

        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block bg-[var(--color-primary-subtle)] text-[var(--color-primary)] text-xs font-bold px-4 py-2 rounded-full mb-4 border border-[var(--color-primary)]/15'>
            Platform Kami
          </span>
          <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 mb-4'>
            {SERVICES_INFO.title}
          </h2>
          <div className='flex justify-center mb-4'>
            <Image
              src='/images/logo-nurul.png'
              alt='NurulAisyah Logo'
              width={200}
              height={65}
              className='object-contain h-24 w-auto'
            />
          </div>
          <p className='text-slate-500 text-base max-w-xl mx-auto'>{SERVICES_INFO.desc}</p>
        </div>

        {/* Service cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {SERVICES.map((service, idx) => (
            <motion.a
              key={idx}
              href={WA_LINK}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className='group bg-white border border-slate-100 rounded-3xl p-7 flex flex-col items-center text-center card-hover hover:border-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/10 cursor-pointer relative overflow-hidden'>

              {/* Hover background fill */}
              <div className='absolute inset-0 bg-gradient-to-br from-[var(--color-primary-subtle)] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl' />

              <div className='relative z-10 flex flex-col items-center'>
                {/* Logo */}
                <div className='w-24 h-24 flex items-center justify-center mb-5 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors duration-300 shadow-sm'>
                  <Image
                    src={service.logo}
                    alt={service.title}
                    width={72}
                    height={72}
                    className='object-contain w-16 h-16 drop-shadow-sm'
                  />
                </div>

                <h3 className='text-lg font-bold text-slate-900 mb-2'>{service.title}</h3>
                <p className='text-slate-500 text-sm mb-5 flex-grow'>{service.desc}</p>

                {/* CTA pill */}
                <span className='inline-flex items-center gap-1.5 text-[var(--color-primary)] text-sm font-semibold bg-[var(--color-primary-subtle)] px-4 py-2 rounded-full group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-200'>
                  Tukar Sekarang
                  <ArrowUpRight size={14} className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
