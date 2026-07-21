import { ADVANTAGES, ADVANTAGES_INFO } from '@/data/content';
import Image from 'next/image';
import { ShieldCheck, Zap, Smile, DollarSign, Lock, MessageCircle } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Smile: Smile,
  DollarSign: DollarSign,
  Lock: Lock,
  MessageCircle: MessageCircle,
};

export default function Advantages() {
  return (
    <section
      id='advantages'
      className='py-20 bg-slate-900 text-white'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-6'>{ADVANTAGES_INFO.title}</h2>
          <div className='flex justify-center mb-6'>
            <Image
              src='/images/white-logo-aina.png'
              alt='AinaServices Logo'
              width={160}
              height={45}
              className='object-contain h-8 w-auto'
            />
          </div>
          <p className='text-slate-400'>{ADVANTAGES_INFO.desc}</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {ADVANTAGES.map((adv, idx) => {
            const Icon = iconMap[adv.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <div
                key={idx}
                className='flex items-center gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700'>
                <Icon
                  className='text-[var(--color-primary)] shrink-0'
                  size={24}
                />
                <span className='font-semibold'>{adv.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
