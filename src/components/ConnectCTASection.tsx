import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="25%" stopColor="#f37335" />
        <stop offset="50%" stopColor="#fd1d1d" />
        <stop offset="75%" stopColor="#c13584" />
        <stop offset="100%" stopColor="#833ab4" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
    <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
    <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
    <circle cx="17.25" cy="6.75" r="1.15" fill="#FFFFFF" />
  </svg>
);

const GmailIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <rect width="24" height="24" rx="4" fill="#FFFFFF" />
    <path d="M2.5 7.5V18C2.5 19.1 3.4 20 4.5 20H7.5V11.5L2.5 7.5Z" fill="#4285F4"/>
    <path d="M16.5 20H19.5C20.6 20 21.5 19.1 21.5 18V7.5L16.5 11.5V20Z" fill="#34A853"/>
    <path d="M16.5 5V11.5L21.5 7.5V6C21.5 4.34 19.64 3.4 18.3 4.4L16.5 5Z" fill="#FBBC04"/>
    <path d="M2.5 6V7.5L7.5 11.5V5L5.7 4.4C4.36 3.4 2.5 4.34 2.5 6Z" fill="#EA4335"/>
    <path d="M7.5 5V11.5L12 15L16.5 11.5V5L12 8.5L7.5 5Z" fill="#EA4335"/>
  </svg>
);

const WhatsAppIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <rect width="24" height="24" rx="6" fill="#25D366" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.2C7.69 4.2 4.2 7.69 4.2 12C4.2 13.48 4.62 14.87 5.34 16.06L4.5 19.5L8.03 18.68C9.19 19.38 10.55 19.8 12 19.8C16.31 19.8 19.8 16.31 19.8 12C19.8 7.69 16.31 4.2 12 4.2ZM15.82 14.71C15.65 15.18 14.92 15.56 14.41 15.65C14.06 15.71 13.61 15.75 12.05 15.09C10.06 14.27 8.76 12.23 8.66 12.09C8.56 11.96 7.87 11.03 7.87 10.07C7.87 9.11 8.36 8.64 8.55 8.44C8.75 8.23 8.98 8.18 9.18 8.18C9.34 8.18 9.47 8.19 9.6 8.19C9.77 8.2 9.91 8.15 10.07 8.52C10.23 8.92 10.62 9.88 10.67 9.98C10.72 10.08 10.75 10.2 10.68 10.33C10.62 10.46 10.56 10.53 10.47 10.64C10.37 10.75 10.27 10.87 10.18 10.97C10.08 11.08 9.97 11.2 10.09 11.39C10.2 11.59 10.6 12.24 11.19 12.77C11.95 13.44 12.56 13.66 12.77 13.75C12.97 13.84 13.09 13.82 13.21 13.68C13.33 13.54 13.72 13.08 13.86 12.89C14 12.69 14.13 12.72 14.32 12.79C14.51 12.86 15.55 13.38 15.76 13.49C15.97 13.6 16.11 13.65 16.16 13.74C16.21 13.82 16.21 14.24 16.05 14.71H15.82Z"
      fill="white"
    />
  </svg>
);

const RetroPhoneIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 512 512" fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.1l60.6-49.6a24 24 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
  </svg>
);

interface ContactLinkItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  icon: React.ReactNode;
}

const CONTACT_LINKS: ContactLinkItem[] = [
  {
    id: 'instagram',
    label: 'INSTAGRAM',
    href: 'https://instagram.com/',
    isExternal: true,
    icon: <InstagramIcon />,
  },
  {
    id: 'email',
    label: 'EMAIL',
    href: 'mailto:hello@hafilm.com',
    isExternal: false,
    icon: <GmailIcon />,
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    href: 'https://wa.me/919876543210',
    isExternal: true,
    icon: <WhatsAppIcon />,
  },
  {
    id: 'contact',
    label: 'CONTACT',
    href: 'mailto:hello@hafilm.com?subject=Editorial%20Inquiry%20%E2%80%94%20Hafil.M',
    isExternal: false,
    icon: <RetroPhoneIcon />,
  },
];

export const ConnectCTASection: React.FC = () => {
  return (
    <section 
      id="section-05-connect"
      className="relative w-full bg-[#F4EDE1] min-h-[85vh] lg:min-h-screen flex flex-col justify-between pt-10 sm:pt-14 md:pt-18 lg:pt-20 pb-16 sm:pb-20 md:pb-24 select-none"
    >
      {/* Centered Editorial Container */}
      <div className="w-full max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex-1 flex flex-col justify-between">
        
        {/* ============================================================ */}
        {/* 01: TOP INFORMATION BAR & DIVIDER                           */}
        {/* ============================================================ */}
        <div>
          <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.28em] text-[#736F68] uppercase">
            <div className="flex items-center gap-2">
              <span className="font-light text-base leading-none select-none">+</span>
              <span>SECTION // 05</span>
            </div>
            <span>P. 05 / 05</span>
          </div>

          {/* Thin horizontal rule underneath */}
          <div className="w-full h-[1px] bg-[#111111]/15 mt-3 sm:mt-4 md:mt-5" />

          {/* ============================================================ */}
          {/* 02: SECTION IDENTIFICATION (CONNECT WITH ME)                 */}
          {/* ============================================================ */}
          <div className="pt-6 sm:pt-8 md:pt-10 flex flex-col items-center justify-center text-center">
            <span className="font-sans text-xs sm:text-sm md:text-[14px] font-semibold tracking-[0.26em] text-[#111111] uppercase leading-tight">
              CONNECT WITH ME
            </span>
            <span className="font-mono text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.28em] text-[#736F68] uppercase mt-1.5 leading-tight">
              LET’S CREATE TOGETHER
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 03: MAIN CTA STATEMENT                                       */}
        {/* ============================================================ */}
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="font-serif editorial-heading-stroke uppercase text-[#111111] font-light sm:font-normal tracking-[-0.01em] md:tracking-[-0.02em] leading-[1.04] sm:leading-[1.03] text-[36px] sm:text-[46px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[76px]">
            {/* Mobile View: 4 Intentional Lines matching reference image */}
            <span className="block md:hidden">
              LET’S MAKE<br />
              SOMETHING<br />
              WORTH<br />
              REMEMBERING.
            </span>

            {/* Tablet & Desktop View: 2 Broad Lines */}
            <span className="hidden md:block">
              LET’S MAKE SOMETHING<br />
              WORTH REMEMBERING.
            </span>
          </h2>

          {/* Small Editorial Rule acting as visual pause before contact rows */}
          <div className="w-16 sm:w-20 md:w-28 lg:w-32 h-[1px] bg-[#111111]/30 mt-8 sm:mt-10 md:mt-12" />
        </div>

        {/* ============================================================ */}
        {/* 04: CONTACT LINKS LIST                                        */}
        {/* ============================================================ */}
        <div className="w-full border-t border-[#1A1A1A]/20">
          {CONTACT_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between py-5 border-b border-[#1A1A1A]/20 transition-all focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#1A1A1A]"
              aria-label={`Open ${item.label}`}
            >
              {/* Left side: Icon + Label (20px gap) */}
              <div className="flex items-center gap-5">
                <div className="w-[22px] h-[22px] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="font-sans text-[15px] sm:text-[16px] font-medium tracking-[0.2em] text-[#1A1A1A] uppercase leading-none group-hover:tracking-[0.24em] transition-all duration-300">
                  {item.label}
                </span>
              </div>

              {/* Right side: Diagonal arrow icon (20px) */}
              <div className="p-1 text-[#1A1A1A] group-hover:text-[#4A4741] transition-colors flex items-center justify-center">
                <ArrowUpRight 
                  size={20} 
                  strokeWidth={1.35} 
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
