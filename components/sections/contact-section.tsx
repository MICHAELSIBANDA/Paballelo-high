
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/context/language-context';

export function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: '370 Gudula Street, Paballelo, Upington, Northern Cape, 8801',
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+27 54 332 2121',
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'info@paballelohigh.co.za',
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: t.contact.hoursText,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.contact.title}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 text-balance">
            {t.contact.subtitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-muted-foreground mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed Container */}
            <div className="mt-8 aspect-video rounded-2xl bg-card border border-border overflow-hidden isolation-blur">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sza!4v1781870610736!5m2!1sen!2sza!6m8!1m7!1s7w_WkMrpTOu0p64ADnOoNg!2m2!1d-28.43622766213476!2d21.21334628052614!3f84.11501576537343!4f-10.153137258179171!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Paballelo High School Map Location"
              ></iframe>
            </div>

            {/* Facebook Follow */}
            <div className="mt-6 p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#1877F2]/10 flex-shrink-0">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm">Follow us on Facebook</h4>
                  <p className="text-muted-foreground text-xs">Join our 659+ followers for updates</p>
                </div>
                <Button asChild size="sm" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
                  <Link href="https://www.facebook.com/people/Paballelo-High-School/61558234076140/" target="_blank" rel="noopener noreferrer">
                    Follow
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.subject}
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12"
              >
                <Send className="h-4 w-4 mr-2" />
                {t.contact.form.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
