'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  lottieFile?: string;
}

const defaultProps: Required<HeroSectionProps> = {
  title: 'WhatStyle AI',
  subtitle: 'Your Personal WhatsApp AI Assistant',
  description: 'Transform your WhatsApp conversations with AI that adapts to your unique style. Chat naturally while our AI learns your tone, personality, and preferences to respond just like you.',
  primaryCTA: {
    text: 'Start Free Trial',
    href: '/get-started',
  },
  secondaryCTA: {
    text: 'Watch Demo',
    href: '/demo',
  },
  lottieFile: '/lottieFiles/Robot.lottie',
};

export default function HeroSection(props: HeroSectionProps = {}) {
  const { title, subtitle, description, primaryCTA, secondaryCTA, lottieFile } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Enhanced Magical Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient with WhatsApp green inspiration */}
        <div className="absolute inset-0 bg-linear-135/srgb from-[#F6F4F1] via-[#E2E4E7]/80 to-[#F6F4F1]" />
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-45/oklch from-[#E84A2E]/8 via-transparent to-[#E2CC9C]/6 animate-pulse" />
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-linear-225/srgb from-[#0A2538]/4 via-transparent to-[#E84A2E]/3 animate-float" />
        </div>
        
        {/* Dynamic floating elements */}
        <div className="absolute top-1/6 left-1/12 w-96 h-96 bg-[#E84A2E]/12 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/8 w-80 h-80 bg-[#E2CC9C]/10 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-[#0A2538]/8 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#E84A2E]/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/6 left-2/3 w-56 h-56 bg-[#E2CC9C]/8 rounded-full blur-2xl animate-bounce-slow" />
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F6F4F1]/20 to-[#E2E4E7]/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Text Content - Optimized spacing */}
          <div className="space-y-6 lg:pr-8">
            {/* Subtitle with WhatsApp theme */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-[#E84A2E]/20 shadow-lg">
              <div className="w-2 h-2 bg-[#E84A2E] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#0A0D0F]/80">
                {subtitle}
              </span>
            </div>

            {/* Main Heading - Reduced spacing */}
            <div className="space-y-3">
              <h1 className={`
                text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight
                bg-linear-135/srgb from-[#0A0D0F] via-[#E84A2E] to-[#0A2538]
                bg-clip-text text-transparent
                transform transition-all duration-1000 ease-spring
              `}>
                {title}
              </h1>
              
              {/* Supporting text - Optimized */}
              <p className="text-lg md:text-xl lg:text-2xl text-[#0A0D0F]/70 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            {/* Trust indicators - Compact */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#0A0D0F]/60">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E84A2E] rounded-full" />
                <span>WhatsApp Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#E2CC9C] rounded-full" />
                <span>AI-Powered Responses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#0A2538] rounded-full" />
                <span>Privacy First</span>
              </div>
            </div>

            {/* CTA Buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href={primaryCTA.href}
                className={`
                  group inline-flex items-center justify-center gap-3 
                  px-7 py-3.5 rounded-2xl font-semibold text-white
                  bg-linear-135/srgb from-[#E84A2E] to-[#E2CC9C]
                  hover:scale-105 hover:-translate-y-1
                  transition-all duration-500 ease-spring
                  shadow-xl shadow-[#E84A2E]/30 hover:shadow-2xl hover:shadow-[#E84A2E]/40
                  relative overflow-hidden
                `}
                aria-label={`${primaryCTA.text} - Start using WhatStyle AI now`}
              >
                <span className="relative z-10">{primaryCTA.text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                <div className={`
                  absolute inset-0 bg-linear-90/srgb from-transparent via-white/20 to-transparent
                  -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700 ease-spring
                `} />
              </Link>

              <Link
                href={secondaryCTA.href}
                className={`
                  group inline-flex items-center justify-center gap-3
                  px-7 py-3.5 rounded-2xl font-semibold
                  text-[#0A0D0F] bg-white/70 backdrop-blur-sm
                  border-2 border-[#E84A2E]/20 hover:border-[#E84A2E]/40
                  hover:bg-white/90 hover:scale-105
                  transition-all duration-500 ease-spring
                  shadow-lg hover:shadow-xl
                `}
                aria-label={`${secondaryCTA.text} - See WhatStyle AI in action`}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{secondaryCTA.text}</span>
              </Link>
            </div>

            {/* Social proof stats - Compact */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E84A2E]/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E84A2E]">10K+</div>
                <div className="text-xs text-[#0A0D0F]/60">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E2CC9C]">95%</div>
                <div className="text-xs text-[#0A0D0F]/60">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0A2538]">24/7</div>
                <div className="text-xs text-[#0A0D0F]/60">AI Support</div>
              </div>
            </div>
          </div>

          {/* Lottie Animation - Bigger with sparkling effects */}
          <div className="relative lg:pl-4">
            {/* Magical background gradients behind animation */}
            <div className="absolute inset-0 -z-10">
              {/* Primary glow - larger */}
              <div className="absolute top-1/6 left-1/6 w-5/6 h-5/6 bg-linear-135/oklch from-[#E84A2E]/15 to-[#E2CC9C]/10 rounded-full blur-3xl animate-pulse" />
              
              {/* Secondary glow - expanded */}
              <div className="absolute top-1/4 right-1/6 w-3/4 h-3/4 bg-linear-225/srgb from-[#0A2538]/8 to-transparent rounded-full blur-2xl animate-float" />
              
              {/* Additional magical layers */}
              <div className="absolute top-0 left-0 w-full h-full bg-linear-45/oklch from-[#E84A2E]/5 via-transparent to-[#E2CC9C]/8 animate-pulse" />
            </div>
            
            {/* Sparkling/twinkling elements around the animation */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top sparkles */}
              <div className="absolute top-8 left-1/4 w-2 h-2 bg-[#E84A2E] rounded-full animate-ping" />
              <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-[#E2CC9C] rounded-full animate-pulse" />
              <div className="absolute top-12 left-1/2 w-1 h-1 bg-[#0A2538] rounded-full animate-bounce" />
              
              {/* Middle sparkles */}
              <div className="absolute top-1/3 left-8 w-3 h-3 bg-[#E84A2E]/70 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#E2CC9C]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-2/5 left-1/6 w-1.5 h-1.5 bg-[#0A2538]/80 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
              
              {/* Bottom sparkles */}
              <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 bg-[#E84A2E]/60 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-[#E2CC9C] rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
              <div className="absolute bottom-12 right-1/2 w-2 h-2 bg-[#0A2538]/70 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }} />
              
              {/* Corner sparkles */}
              <div className="absolute top-4 right-8 w-1.5 h-1.5 bg-[#E84A2E] rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-[#E2CC9C]/80 rounded-full animate-pulse" style={{ animationDelay: '1.8s' }} />
              
              {/* Floating geometric shapes */}
              <div className="absolute top-1/4 right-12 w-4 h-4 border border-[#E84A2E]/40 rotate-45 animate-float" style={{ animationDelay: '0.7s' }} />
              <div className="absolute bottom-1/3 left-12 w-3 h-3 bg-[#E2CC9C]/30 rotate-12 animate-bounce-slow" style={{ animationDelay: '1.4s' }} />
              <div className="absolute top-3/5 right-6 w-5 h-1 bg-[#0A2538]/50 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }} />
              
              {/* Starburst effects */}
              <div className="absolute top-20 left-1/3 animate-ping" style={{ animationDelay: '2.5s' }}>
                <div className="w-6 h-0.5 bg-[#E84A2E]/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <div className="h-6 w-0.5 bg-[#E84A2E]/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              <div className="absolute bottom-20 right-1/4 animate-pulse" style={{ animationDelay: '1.7s' }}>
                <div className="w-4 h-0.5 bg-[#E2CC9C]/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                <div className="w-4 h-0.5 bg-[#E2CC9C]/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
              </div>
            </div>
            
            {/* Main Lottie Animation - Much Bigger */}
            <div className="relative transform hover:scale-105 transition-transform duration-700 ease-spring">
              <DotLottieReact
                src={lottieFile}
                loop
                autoplay
                className="w-full h-auto max-w-4xl mx-auto drop-shadow-2xl filter brightness-110 contrast-105"
                aria-label="WhatsApp AI assistant interface showing personalized chat responses"
              />
              
              {/* Enhanced floating accent elements around bigger animation */}
              <div className="absolute -top-8 -right-8 w-6 h-6 bg-[#E84A2E]/60 rounded-full animate-bounce" />
              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-[#E2CC9C]/50 rounded-full animate-pulse" />
              <div className="absolute bottom-1/3 -right-10 w-8 h-8 bg-[#0A2538]/40 rounded-full animate-ping" />
              <div className="absolute -bottom-6 left-1/4 w-3 h-3 bg-[#E84A2E]/70 rounded-full animate-bounce" />
              <div className="absolute top-1/2 -right-4 w-5 h-5 bg-[#E2CC9C]/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/6 -left-8 w-4 h-4 bg-[#0A2538]/50 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#E84A2E]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#E84A2E] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}