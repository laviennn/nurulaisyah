import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/data/content';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id='contact' className='bg-slate-950 text-slate-400'>
      <div className='container-custom py-16'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-10 mb-12'>

          {/* Brand col */}
          <div className='md:col-span-5'>
            <Image
              src='/images/logo-nurul.png'
              alt='NurulAisyah Logo'
              width={200}
              height={65}
              className='object-contain h-14 w-auto mb-5 brightness-200 opacity-90'
            />
            <p className='text-sm leading-relaxed max-w-xs text-slate-500'>
              {SITE_CONFIG.description}
            </p>

            {/* WA Button */}
            <a
              href={`https://wa.me/${SITE_CONFIG.waNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105'>
              <WhatsAppIcon size={16} />
              WhatsApp Kami
            </a>
          </div>

          {/* Spacer */}
          <div className='hidden md:block md:col-span-1' />

          {/* Links */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm uppercase tracking-wider mb-5'>
              Pautan Pantas
            </h4>
            <ul className='space-y-3'>
              {[
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Layanan', href: '#services' },
                { label: 'Keunggulan', href: '#advantages' },
                { label: 'Testimoni', href: '#testimonials' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='md:col-span-3'>
            <h4 className='text-white font-bold text-sm uppercase tracking-wider mb-5'>
              Hubungi Kami
            </h4>
            <div className='flex flex-col gap-3 text-sm'>
              <a
                href={`https://wa.me/${SITE_CONFIG.waNumber}`}
                className='flex items-center gap-2.5 hover:text-white transition-colors group'>
                <span className='w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors'>
                  <WhatsAppIcon size={15} />
                </span>
                WhatsApp
              </a>
              <p className='text-slate-500 text-xs leading-relaxed mt-2'>
                Khidmat pelanggan 24/7. <br />
                Respons dalam masa 5 minit.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600'>
          <p>
            &copy; {year}{' '}
            <span className='text-[var(--color-primary)] font-semibold'>{SITE_CONFIG.name}</span>
            . All rights reserved.
          </p>
          <p>Made with ❤️ in Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
