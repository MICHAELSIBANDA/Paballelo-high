'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#academics', label: t.nav.academics },
    { href: '#admissions', label: t.nav.admissions },
    { href: '#news', label: t.nav.news },
    { href: '#contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Paballelo-High-School/61558234076140/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background/20">
                <Image
                  src="/paballelo.jpg"
                  alt="Paballelo High School Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-background">Paballelo</span>
                <span className="block text-xs text-background/70">High School</span>
              </div>
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              {t.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-background" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>370 Gudula Street</li>
              <li>Paballelo, Upington</li>
              <li>Northern Cape, 8801</li>
              <li className="pt-2">+27 54 332 2121</li>
              <li>info@paballelohigh.co.za</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} Paballelo High School. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-background transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
