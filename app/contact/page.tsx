import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Autogas Service | Programare Service Roți Ploiești',
  description: 'Contactează Autogas Service pentru programare sau consultanță. Strada Gheorghe Grigore Cantacuzino 348, Ploiești. Telefon: 0727 517 896. Luni-Vineri: 08:00-18:00.',
  keywords: ['contact autogas service', 'programare service auto', 'service roți Ploiești', 'telefon service auto'],
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-deep to-navy">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contactează-ne
            </h1>
            <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
              Suntem aici să te ajutăm. Programează-te acum sau sună-ne pentru 
              consultanță și ofertă personalizată.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-navy-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Informații de contact</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresă</h3>
                      <address className="text-text-light/80 not-italic">
                        Strada Gheorghe Grigore Cantacuzino 348<br />
                        Ploiești 100301
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a
                        href="tel:0727517896"
                        className="text-accent hover:text-accent/80 text-lg font-semibold"
                      >
                        0727 517 896
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🕒</div>
                    <div>
                      <h3 className="font-semibold mb-1">Program</h3>
                      <div className="text-text-light/80 space-y-1">
                        <p>Luni - Vineri: 08:00 - 18:00</p>
                        <p>Sâmbătă: 08:00 - 14:00</p>
                        <p>Duminică: Închis</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="font-semibold mb-1">Social Media</h3>
                      <a
                        href="https://www.facebook.com/servicegas/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80"
                      >
                        Facebook - Autogas Service
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45187.691198678534!2d25.9815096!3d44.9389779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2499e0104a35b%3A0x5d208c41b7c19e06!2sAUTOGAS%20Garage%20Cantacuzino!5e0!3m2!1sen!2sro!4v1762418658817!5m2!1sen!2sro"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Autogas Service"
                  className="w-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Formular de contact</h2>
              <div className="bg-neutral-1 rounded-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

