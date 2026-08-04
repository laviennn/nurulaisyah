import { WA_LINK } from '@/data/content';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 group overflow-hidden'
      aria-label='Chat via WhatsApp'>
      {/* Expanded label on hover — desktop only */}
      <span className='max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out text-sm font-semibold pl-0 group-hover:pl-4'>
        Chat Sekarang
      </span>
      <span className='w-14 h-14 flex items-center justify-center shrink-0'>
        <WhatsAppIcon size={28} />
      </span>
    </a>
  );
}
