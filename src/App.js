import React, { useState, useEffect } from 'react';
import { Phone, Lightbulb, Shield, ArrowRight, Star, Check, Users, Award, Clock, TrendingUp } from 'lucide-react';

const OptipymeHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Telefonía',
      subtitle: 'VoIP Empresarial',
      icon: Phone,
      description: 'Soluciones de comunicación avanzadas para empresas y particulares con tecnología de última generación.',
      features: ['Voz en Alta Definición', 'Centralitas Virtuales'],
      price: 'Estudio gratuito',
      gradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-green-500',
      textColor: 'text-white'
    },
    {
      title: 'Electricidad',
      subtitle: 'Ahorro Energético',
      icon: Lightbulb,
      description: 'Optimización energética para proyectos empresariales y residenciales.',
      features: ['Eficiencia Energética', 'Smart Control'],
      price: 'Consulta gratuita',
      gradient: 'from-yellow-400 to-orange-500',
      borderColor: 'border-orange-600',
      textColor: 'text-gray-900'
    },
    {
      title: 'Seguridad',
      subtitle: 'Vigilancia',
      icon: Shield,
      description: 'Sistemas de seguridad avanzados con sensores de última generación y videovigilancia.',
      features: ['Tranquilidad', 'Monitoreo 24/7'],
      price: 'Evaluación gratis',
      gradient: 'from-red-600 to-red-700',
      borderColor: 'border-purple-600',
      textColor: 'text-white'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes Activos', icon: Users },
    { number: '99.9%', label: 'Clientes Satisfechos', icon: TrendingUp },
    { number: '24/7', label: 'Soporte', icon: Clock },
    { number: '15+', label: 'Años Experiencia', icon: Award }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-green-500 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block relative">
              <div className="text-8xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">OPTI</span>
                <span className="text-white">PYME</span>
              </div>
              <div className="text-2xl font-light text-blue-200">Solutions</div>
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tecnología que
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
              Transforma
            </span>
            Empresas
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Revoluciona tu negocio con soluciones tecnológicas de <span className="font-semibold text-white">última generación</span>. 
            Líderes en telefonía, instalaciones eléctricas fotovoltaicas y seguridad.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="py-20 md:py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="reveal-on-scroll inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Nuestras Especialidades
            </div>
            <h2 className="reveal-on-scroll text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Soluciones <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Innovadoras</span>
            </h2>
            <p className="reveal-on-scroll text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada servicio está diseñado para catapultar tu empresa hacia el futuro digital con tecnología que supera cualquier expectativa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article 
                key={index}
                className="reveal-on-scroll group relative transform hover:scale-105 transition-all duration-500"
              >
                <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border-t-4 ${service.borderColor} transition-all duration-500 group-hover:-translate-y-2`}>
                  <div className={`p-4 ${service.textColor} relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full -ml-6 -mb-6"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                        <service.icon 
                          size={24}
                          className={service.textColor}
                        />
                      </div>
                      <h3 className={`text-lg font-bold mb-1 ${service.textColor}`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs opacity-90 font-medium ${service.textColor}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                        <span className="font-semibold mr-2">Explorar</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="reveal-on-scroll text-4xl md:text-5xl font-black mb-8">
              La Confianza de <span className="text-yellow-400">Líderes</span>
            </h2>
            <p className="reveal-on-scroll text-xl text-red-100 max-w-3xl mx-auto">
              Comparte tu experiencia con nosotros y ayuda a otros empresarios a tomar la mejor decisión
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="reveal-on-scroll backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      className="star-rating w-6 h-6 transition-colors duration-200"
                    >
                      <Star className="w-6 h-6 text-white/30 hover:text-yellow-400 cursor-pointer transition-colors" />
                    </button>
                  ))}
                </div>
                <span className="ml-3 text-red-100 font-medium">Tu calificación</span>
              </div>

              <div className="mb-6">
                <blockquote className="text-lg leading-relaxed italic text-white/80 min-h-[100px] flex items-center justify-center border-2 border-dashed border-white/30 rounded-xl p-6">
                  "Haz clic en las estrellas y comparte tu experiencia aquí..."
                </blockquote>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-lg mr-4 border-2 border-dashed border-white/30">
                  ?
                </div>
                <div>
                  <div className="font-bold text-lg text-white/80">Tu Nombre</div>
                  <div className="text-red-100">Tu Empresa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-on-scroll text-4xl md:text-6xl font-black leading-tight mb-8">
            ¿Preparado para el 
            <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent"> Futuro</span>?
          </h2>
          
          <p className="reveal-on-scroll text-xl md:text-2xl text-blue-100 leading-relaxed mb-12">
            Más de <span className="font-bold text-white">500 empresas</span> ya han revolucionado su negocio. 
            <span className="block font-semibold text-green-500">Tu turno es ahora.</span>
          </p>

          <div className="reveal-on-scroll flex justify-center mb-16">
            <a href="tel:+34641119677" className="group backdrop-blur-sm bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center w-full max-w-lg">
              <Phone className="w-6 h-6 mr-4 group-hover:rotate-12 transition-transform" />
              Solicita tu Consultoría Gratuita
            </a>
          </div>

          <div className="reveal-on-scroll grid md:grid-cols-3 gap-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <Check className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Instalación Gratuita</h3>
              <p className="text-blue-200 text-sm">Sin costes ocultos ni sorpresas</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Soporte 24/7/365</h3>
              <p className="text-blue-200 text-sm">Equipo experto siempre disponible</p>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Ahorro Garantizado</h3>
              <p className="text-blue-200 text-sm">En menos de 12 meses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Optipyme Solutions</h3>
                  <p className="text-blue-300">Tecnología que transforma empresas</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Líderes en soluciones tecnológicas empresariales. Más de una década transformando 
                negocios con telefonía avanzada, optimización energética y seguridad.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-6 text-center">¿Listo para transformar tu empresa?</h4>
              <a href="mailto:optipymesolutions@gmail.com?subject=Solicitud de Consulta Gratuita&body=Hola, me gustaría solicitar una consulta gratuita para mi empresa." 
                 className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 flex items-center justify-center">
                <span className="mr-3">📧</span>
                Solicita tu Consulta Gratuita
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 mb-2">© 2025 Optipyme Solutions. Todos los derechos reservados.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a>
                <a href="/terminos" className="text-gray-400 hover:text-white transition-colors">Términos de Uso</a>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://wa.me/34641119677" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors text-white font-bold">
                📱
              </a>
              <a href="https://www.instagram.com/optipymesolutions/" className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors text-white font-bold">
                📷
              </a>
              <a href="mailto:optipymesolutions@gmail.com" className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-white font-bold">
                📧
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .reveal-on-scroll.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        html {
          scroll-behavior: smooth;
        }

        .star-rating:hover .lucide-star {
          color: #facc15 !important;
          fill: #facc15 !important;
        }
      `}</style>
    </div>
  );
};

export default OptipymeHomepage;