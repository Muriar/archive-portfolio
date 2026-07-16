"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Struktur data Item Navigasi sesuai kiriman dari SiteHeader
interface NavItem {
  label: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  href: string;
  fullWidth?: boolean;
  borderGradient?: string;
  borderColor?: string;
}

interface CardNavProps {
  className?: string;
  ease?: string;
  logo?: string;
  logoAlt?: string;
  items: NavItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  className = '',
  ease = 'power3.out',
  logo,
  logoAlt = 'Logo',
  items = [],
  baseColor = 'rgba(10, 10, 10, 0.4)', // Default hitam transparan kaca
  menuColor = '#fff', // Warna tombol hamburger
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimatingRef = useRef(false);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 50; 

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
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + 8;
    }
    return 50;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Reset awal ke tombol bulat kecil
    gsap.set(navEl, { 
      height: 48, 
      width: 48, 
      borderRadius: "9999px", 
      overflow: 'hidden' 
    });
    gsap.set(cardsRef.current, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ 
      paused: true,
      onReverseComplete: () => setIsExpanded(false)
    });

    // TAHAP 1: Memanjang ke samping terlebih dahulu
    tl.to(navEl, {
      width: "100%", 
      borderRadius: "16px", 
      duration: 0.35,
      ease: ease
    });

    // TAHAP 2: Melebar ke bawah setelah pelebaran samping selesai
    tl.to(navEl, {
      height: "auto", 
      duration: 0.45,
      ease: ease
    });

    // TAHAP 3: Kartu muncul berurutan (Stagger)
    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.3, 
      ease, 
      stagger: 0.04 
    }, '-=0.25');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    {/* efek fade up dan stagger tombol menu  */}
    const parent = navRef.current?.parentElement;
    const navEl = navRef.current;
    const lines = navRef.current?.querySelectorAll('.hamburger-line');
    const logo = parent?.querySelector('.logo')
    if (navEl && lines) {
      const entranceTl = gsap.timeline({delay: 0.25});
      const outerElement = [navEl, logo].filter(Boolean);

      entranceTl.fromTo(outerElement,
        {
          y: -15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          clearProps: "transform,opacity"
        }
      );
      entranceTl.fromTo(lines,
        {
        y: -8,
        opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.08,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "all"
        },
        "-=0.03"
      );
    }
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]); // Menambahkan dependency items jika data berubah

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight, width: "100%", borderRadius: "16px" });

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
  }, [isExpanded, items]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (isAnimatingRef.current) return;

    if (!isExpanded) {
      isAnimatingRef.current = true;
      setIsHamburgerOpen(true);
      setIsExpanded(true);

      tl.play(0);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 800); 
    } else {
      isAnimatingRef.current = true;
      setIsHamburgerOpen(false);
      tl.reverse();

      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 800);
    }
  };

  const setCardRef = (i: number) => (el: any) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[700px] z-[99] top-[1.2em] md:top-[2em] ${className}`}>

      {/* logonya */}
      {logo && (
        <img src={logo} alt={logoAlt}
    className="logo absolute left-0 top-[6px] z-[1] h-[36px] rounded-xl border-neutral-700/50 bg-neutral-900/40 w-auto object-contain transition-all duration-500 hover:-translate-y-0.5 hover:scale-[1.05] hover:border-neutral-400 hover:shadow-[0_0_35px_rgba(255,255,255,0.12)] shadow-md"
  />
)}
      {/* Kontainer Navigasi Utama */}
      <nav
        ref={navRef}
        style={{
          backgroundColor: baseColor,

        }}
        className={`card-nav ${isExpanded ? 'open' : ''} mx-auto block w-[48px] h-[48px] rounded-[9999px] p-0 shadow-2xl relative z-[10] overflow-hidden border border-neutral-800/80 backdrop-blur-xl will-change-[height,width,border-radius]`}
      >
        {/* Bar Bagian Atas */}
        <div className="card-nav-top absolute left-0 top-0 h-[48px] w-full flex items-center justify-between px-3 py-2 z-[2]">
      
          {/* Tombol Hamburger di Tengah */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[5px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition`}
            onClick={toggleMenu}
            style={{ color: menuColor }}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            aria-expanded={isExpanded}
            tabIndex={0}
          >
            <div className={`hamburger-line w-[22px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
            <div className={`hamburger-line w-[22px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </div>
        </div>

        {/* Area Isi Grid Menu */}
        <div
          className={`card-nav-content relative left-0 right-0 mt-[48px] p-3 grid grid-cols-2 gap-3 justify-start auto-rows-max ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          }`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => {
            const isFullWidth = (item as any).fullWidth;

            return (
              //isi warna tabnya

              <a
                key={`${item.href}-${idx}`}
                href={item.href}
                style={{
                  background:`linear-gradient(rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.65)) padding-box, ${item.borderGradient || item.borderColor || 'transparent'} border-box`,
                  border:'2px solid transparent',
                  color: item.textColor
                }}
                className={`nav-card backdrop-blur-md text-center select-none relative flex flex-col items-center justify-center gap-1 p-4 rounded-xl min-w-0 h-auto min-h-[75px] no-underline transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:opacity-95 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] ${ isFullWidth ? 'col-span-2': '' // 
                  }`}
                ref={setCardRef(idx)}
              >
                {/*label tabnya*/}

                <div className="nav-card-label font-semibold tracking-wide text-[14px] md:text-[15px] filter brightness-110">
                  {item.label}
                </div>

                {/*deskripsi tabnya*/}

                {item.description && (
                  <div className="nav-card-desc text-[11px] opacity-70 font-normal leading-tight mt-1">
                    {item.description}
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;