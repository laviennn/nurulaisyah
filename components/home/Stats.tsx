'use client';

import { STATS } from '@/data/content';
import { motion } from 'framer-motion';

export default function Stats() {
  return (
    <section className='bg-slate-900 py-12 relative z-20 shadow-xl border-y border-slate-800'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700 text-center'>
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className='flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0'>
              <h3 className='text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] mb-2 drop-shadow-sm'>
                {stat.value}
              </h3>
              <p className='text-slate-300 font-medium text-lg'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
