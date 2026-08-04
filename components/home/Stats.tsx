'use client';

import { STATS } from '@/data/content';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock } from 'lucide-react';

const icons = [Users, TrendingUp, Clock];

export default function Stats() {
  return (
    <section className='relative py-16 overflow-hidden'>
      {/* Background */}
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, #F5548C 0%, #d93872 100%)',
        }}
      />
      {/* Decorative shapes */}
      <div className='absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3' />
      <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4' />

      <div className='container-custom relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-0 md:divide-x divide-white/20'>
          {STATS.map((stat, idx) => {
            const Icon = icons[idx] || TrendingUp;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='flex flex-col sm:flex-row items-center sm:justify-center gap-4 py-4 sm:py-0 sm:px-10 text-center sm:text-left'>
                <div className='w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm'>
                  <Icon size={22} className='text-white' />
                </div>
                <div>
                  <p className='text-3xl md:text-4xl font-extrabold text-white leading-none'>
                    {stat.value}
                  </p>
                  <p className='text-white/75 text-sm font-medium mt-1'>{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
