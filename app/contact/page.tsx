import ContactSection from '@/components/sections/ContactSection';

export const metadata = {
     title: 'Contact | Kalp Chaniyara',
     description: 'Get in touch with me for opportunities or collaborations.',
};

export default function ContactPage() {
     return (
          <div className="pt-20">
               <ContactSection />
          </div>
     );
}
