'use client';

import { useState, useEffect } from "react";
import Link from 'next/link';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavbarProps {
  items?: NavItem[];
  logo?: string;
}

const defaultNavItems: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function FloatingNavbar({
  items = defaultNavItems,
  logo = 'WhatStyle'
}: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-3xl 
      transition-all duration-700 ease-spring
      ${isScrolled
        ? 'w-[95%] max-w-5xl backdrop-blur-2xl shadow-2xl shadow-black/20'
        : 'w-[90%] max-w-6xl backdrop-blur-xl shadow-xl shadow-black/10'
      }
    `}>
      <div
        className={`
          relative overflow-hidden rounded-3xl border-2 
          transition-all duration-700 ease-spring
          ${isScrolled
            ? 'bg-white/20 border-white/40 backdrop-blur-2xl'
            : 'bg-white/10 border-white/25 backdrop-blur-xl'
          }
          before:absolute before:inset-0 before:bg-linear-135/srgb before:from-white/30 before:via-transparent before:to-transparent before:opacity-50
          hover:before:opacity-70 before:transition-opacity before:duration-500
        `}
      >
        {/* Magical gradient overlay */}
        <div className="absolute inset-0 bg-linear-45/oklch from-[#E84A2E]/20 via-[#E2CC9C]/15 to-[#0A2538]/10 opacity-60" />

        {/* Animated decorative elements */}
        <div className="absolute -top-3 -left-3 w-20 h-20 opacity-70 animate-float">
          <DotLottieReact
            src="/lottieFiles/sander.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-lg"
          />
        </div>

        <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-60 animate-bounce-slow">
          <DotLottieReact
            src="/lottieFiles/bot.lottie"
            loop
            autoplay
            className="w-full h-full drop-shadow-lg"
          />
        </div>

        {/* Magical particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 left-20 w-2 h-2 bg-[#E84A2E] rounded-full animate-ping opacity-75" />
          <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-[#E2CC9C] rounded-full animate-pulse" />
          <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-[#0A2538] rounded-full animate-bounce" />
        </div>

        <div className="relative px-8 py-5 z-10">
          <div className="flex items-center justify-between">
            {/* Logo with magical glow */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`
                w-10 h-10 rounded-2xl flex items-center justify-center
                bg-linear-135/srgb from-[#E84A2E] to-[#E2CC9C]
                shadow-lg shadow-[#E84A2E]/30
                transition-all duration-500 ease-spring
                group-hover:scale-110 group-hover:rotate-12
                group-hover:shadow-xl group-hover:shadow-[#E84A2E]/50
                before:absolute before:inset-0 before:rounded-2xl
                before:bg-linear-135/oklch before:from-white/30 before:to-transparent
                before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                relative
              `}>
                <span className="text-white font-bold text-lg relative z-10 drop-shadow-sm">W</span>
              </div>
              <span className={`
                font-bold text-xl transition-all duration-500 ease-spring
                group-hover:scale-105 group-hover:text-[#E84A2E]
                text-[#0A0D0F] drop-shadow-sm
              `}>
                {logo}
              </span>
            </Link>

            {/* Desktop Navigation with magical hover */}
            <div className="hidden md:flex items-center space-x-2">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-6 py-3 rounded-2xl font-medium transition-all duration-500 ease-spring
                    hover:backdrop-blur-lg relative group overflow-hidden
                    text-[#0A0D0F] hover:text-white
                    hover:scale-105 hover:-translate-y-1
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-20">{item.label}</span>

                  {/* Magical hover background */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-all duration-500 ease-spring scale-0 group-hover:scale-100
                    bg-linear-135/srgb from-[#E84A2E] via-[#E2CC9C] to-[#0A2538]
                    shadow-lg shadow-[#E84A2E]/30
                  `} />

                  {/* Shimmer effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-linear-90/srgb 
                    from-transparent via-white/20 to-transparent
                    -translate-x-full group-hover:translate-x-full
                    transition-transform duration-700 ease-spring
                  `} />
                </Link>
              ))}
            </div>

            {/* Magical CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/get-started"
                className={`
                  px-8 py-3.5 rounded-2xl font-semibold text-white
                  transform transition-all duration-500 ease-spring
                  hover:scale-110 hover:-translate-y-2
                  shadow-xl shadow-[#E84A2E]/40 hover:shadow-2xl hover:shadow-[#E84A2E]/60
                  bg-linear-135/srgb from-[#E84A2E] via-[#E2CC9C] to-[#E84A2E]
                  relative overflow-hidden group
                  animate-pulse-glow
                `}
              >
                <span className="relative z-20 drop-shadow-sm">Get Started</span>

                {/* Magical glow effect */}
                <div className={`
                  absolute inset-0 bg-linear-135/oklch from-white/30 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                `} />

                {/* Moving shimmer */}
                <div className={`
                  absolute inset-0 bg-linear-45/srgb from-transparent via-white/40 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  transition-transform duration-1000 ease-spring
                `} />
              </Link>
            </div>

            {/* Mobile menu button with magical animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden p-3 rounded-2xl transition-all duration-500 ease-spring
                hover:scale-110 hover:bg-white/20 text-[#0A0D0F]
                hover:shadow-lg hover:shadow-[#E84A2E]/20
              `}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`
                  h-0.5 bg-current transition-all duration-500 ease-spring
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-[#E84A2E]' : ''}
                `} />
                <span className={`
                  h-0.5 bg-current transition-all duration-300 ease-spring
                  ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}
                `} />
                <span className={`
                  h-0.5 bg-current transition-all duration-500 ease-spring
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-[#E84A2E]' : ''}
                `} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation with magical entrance */}
          <div className={`
            md:hidden overflow-hidden transition-all duration-700 ease-spring
            ${isMobileMenuOpen ? 'mt-6' : 'max-h-0'}
          `}>
            <div className="space-y-3 py-4">
              {items.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-6 py-4 rounded-2xl font-medium 
                    transition-all duration-500 ease-spring
                    text-[#0A0D0F] hover:text-white
                    hover:bg-linear-135/srgb hover:from-[#E84A2E] hover:to-[#E2CC9C]
                    hover:scale-105 hover:shadow-lg hover:shadow-[#E84A2E]/30
                    transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                  `}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/get-started"
                className={`
                  block px-6 py-4 rounded-2xl font-semibold text-white text-center mt-6
                  transition-all duration-500 ease-spring
                  bg-linear-135/srgb from-[#E84A2E] to-[#E2CC9C]
                  hover:scale-105 hover:shadow-xl hover:shadow-[#E84A2E]/50
                  transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{
                  transitionDelay: `${items.length * 100}ms`
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
