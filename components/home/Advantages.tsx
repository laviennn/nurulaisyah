'use client';

import { ADVANTAGES, ADVANTAGES_INFO } from '@/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Smile, DollarSign, Lock, MessageCircle } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Smile: Smile,
  DollarSign: DollarSign,
  Lock: Lock,
  MessageCircle: MessageCircle,
};

// Each card gets a slightly different tint shade for visual variety
const cardAccents = [
  'from-pink-500/20 to-rose-500/10',
  'from-purple-500/20 to-pink-500/10',
  'from-orange-400/20 to-pink-400/10',
  'from-blue-400/20 to-purple-400/10',
  'from-emerald-400/20 to-teal-400/10',
  'from-pink-400/20 to-fuchsia-500/10',
];

export default function Advantages() {
  return (
    <section
      id='advantages'
      className='relative py-24 overflow-hidden'
      style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e1132 100%)' }}>

      {/* Decorative elements */}
      <div className='absolute top-0 right-0 w-96 h-96 rounded-full opacity-10'
        style={{ background: 'radial-gradient(circle, #F5548C, transparent 70%)' }} />
      <div className='absolute bottom-0 left-20 w-64 h-64 rounded-full opacity-10'
        style={{ background: 'radial-gradient(circle, #F5548C, transparent 70%)' }} />

      <div className='container-custom relative z-10'>

        {/* Header */}
        <div className='text-center mb-14'>
          <span className='inline-block bg-white/10 text-white/80 text-xs font-bold px-4 py-2 rounded-full mb-4 border border-white/10 backdrop-blur-sm'>
            Kenapa Kami
          </span>
          <h2 className='text-3xl md:text-4xl font-extrabold text-white mb-4'>
            {ADVANTAGES_INFO.title}
          </h2>
          <div className='flex justify-center mb-4'>
            <Image
              src='/images/logo-nurul.png'
              alt='NurulAisyah Logo'
              width={200}
              height={65}
              className='object-contain h-24 w-auto opacity-90 brightness-200'
            />
          </div>
          <p className='text-slate-400 text-base max-w-md mx-auto'>{ADVANTAGES_INFO.desc}</p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {ADVANTAGES.map((adv, idx) => {
            const Icon = iconMap[adv.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className='group relative glass rounded-2xl p-6 flex items-center gap-5 overflow-hidden hover:border-[var(--color-primary)]/40 transition-colors duration-300'>

                {/* Card gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cardAccents[idx % cardAccents.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div className='relative z-10 w-12 h-12 rounded-xl bg-[var(--color-primary)]/15 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] transition-colors duration-300'>
                  <Icon
                    size={22}
                    className='text-[var(--color-primary)] group-hover:text-white transition-colors duration-300'
                  />
                </div>

                <span className='relative z-10 font-semibold text-white/90 group-hover:text-white transition-colors'>
                  {adv.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
