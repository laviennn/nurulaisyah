import { SERVICES, SERVICES_INFO, WA_LINK } from '@/data/content';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Services() {
  return (
    <section
      id='services'
      className='py-20 bg-slate-50'>
      <div className='container-custom'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-slate-900 mb-6'>
            {SERVICES_INFO.title}
          </h2>
          <div className='flex justify-center mb-6'>
            <Image
              src='/images/logo-aina.png'
              alt='AinaServices Logo'
              width={160}
              height={45}
              className='object-contain h-12 w-auto'
            />
          </div>
          <p className='text-slate-600'>
            {SERVICES_INFO.desc}
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {SERVICES.map((service, idx) => {
            return (
              <div
                key={idx}
                className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center'>
                <div className='w-20 h-20 flex items-center justify-center mb-6'>
                  <Image 
                    src={service.logo} 
                    alt={service.title} 
                    width={80} 
                    height={80} 
                    className='object-contain w-full h-full drop-shadow-sm' 
                  />
                </div>
                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-slate-600 mb-8 flex-grow'>{service.desc}</p>
                <Button
                  href={WA_LINK}
                  variant='outline'
                  external
                  fullWidth>
                  Tukar Sekarang
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
