'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { WA_LINK } from '@/data/content';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Testimoni', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-100/80 py-2 border-b border-slate-100'
          : 'bg-transparent py-4'
        }`}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo-nurul.png'
            alt='NurulAisyah Logo'
            width={200}
            height={60}
            className='object-contain h-24 w-auto'
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='px-4 py-2 text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-subtle)] transition-all duration-200'>
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA button desktop */}
        <div className='hidden md:flex items-center gap-3'>
          <a
            href={WA_LINK}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-[#F5548C]/30 transition-all duration-200 hover:scale-105 hover:shadow-[#F5548C]/40'>
            <WhatsAppIcon size={16} />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-800'
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-100 shadow-2xl'>
          <div className='container-custom py-4 flex flex-col gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-base font-medium text-slate-700 py-3 px-4 rounded-xl hover:bg-[var(--color-primary-subtle)] hover:text-[var(--color-primary)] transition-colors'
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-xl'
              onClick={() => setIsOpen(false)}>
              <WhatsAppIcon size={18} />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
