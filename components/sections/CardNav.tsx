"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links?: CardNavLink[];
  description?: string;
  href?: string;
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 200; 

    const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      const topBar = 50; 
      const padding = 12;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 200;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // 🟢 SETTING AWAL: Menu dibuat bulat penuh (circle) dan lebarnya pas seukuran tombol (50px)
    gsap.set(navEl, { 
      height: 50, 
      width: 50, 
      borderRadius: "9999px", 
      overflow: 'hidden' 
    });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    // 🟢 ANIMASI TRANSFORMATION: Mengubah lingkaran menjadi rounded-xl besar secara bersamaan
    tl.to(navEl, {
      width: "100%", // Melebar kembali ke ukuran w-[90%] max-w-[700px]
      borderRadius: "12px", // Berubah dari lingkaran menjadi rounded-xl (12px)
      height: calculateHeight, // Memanjang ke bawah untuk memunculkan kartu
      duration: 0.5,
      ease: ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.3, ease, stagger: 0.05 }, '-=0.2');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight, width: "100%", borderRadius: "12px" });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: any) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    // 🟢 PEMBUNGKUS UTAMA: w-[90%] max-w-[700px] tetap di sini agar menjadi batas maksimal pelebaran GSAP
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} mx-auto block h-[50px] p-0 shadow-md relative overflow-hidden will-change-[height,width,border-radius]`}
        style={{ backgroundColor: baseColor }}
      >
        {/* 🟢 TOP BAR: Menggunakan flex-none dan lebar penuh agar elemen di dalamnya tidak terhimpit saat menyusut */}
        <div className="card-nav-top absolute left-0 top-0 h-[50px] w-full flex items-center justify-between p-2 z-[2]">
          
          {/* LOGO: Disembunyikan dulu saat menu mengecil (lingkaran) dan muncul via CSS transition saat open */}
          <div className={`logo-container flex items-center order-1 transition-opacity duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <img src={logo} alt={logoAlt} className="logo h-[22px]" />
          </div>

          {/* HAMBURGER BUTTON: Diposisikan di tengah lingkaran awal (menggunakan class utility jika tertutup) */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] order-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
            onClick={toggleMenu}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[22px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[22px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          {/* BUTTON GET STARTED: Ikut bersembunyi saat berbentuk lingkaran */}
          <button
            type="button"
            className={`card-nav-cta-button hidden md:inline-flex border-0 rounded-md px-3 items-center h-[34px] text-[13px] font-medium cursor-pointer transition-opacity duration-200 order-3 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[50px] bottom-0 p-2 grid grid-cols-2 gap-2 justify-start auto-rows-max overflow-y-auto z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          }`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 10).map((item, idx) => (
            <a
              key={`${item.label}-${idx}`}
              href={item.href || '#'}
              className="nav-card select-none relative flex flex-col gap-1 p-2.5 rounded-lg min-w-0 flex-[1_1_auto] h-auto min-h-[45px] no-underline transition-transform duration-200 hover:scale-[1.01]"
              ref={setCardRef(idx)}
              style={{ background: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-bold tracking-[-0.3px] text-[14px] md:text-[15px] uppercase">
                {item.label}
              </div>

              {item.description && (
                <div className="nav-card-desc text-[11px] md:text-[12px] opacity-75 font-normal leading-tight">
                  {item.description}
                </div>
              )}

              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <div
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[4px] text-[12px]"
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
