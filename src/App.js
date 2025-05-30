import React, { useState, useEffect } from 'react';
import { Phone, Lightbulb, Shield, ArrowRight, Star, Check, Users, Award, Clock, TrendingUp } from 'lucide-react';

const OptipymeHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: 'Telefonía',
      subtitle: 'VoIP Empresarial',
      icon: Phone,
      description: 'Soluciones de comunicación avanzadas para empresas y particulares con tecnología de última generación.',
      features: ['Voz en Alta Definición', 'Centralitas Virtuales'],
      price: 'Estudio gratuito',
      gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      textColor: '#ffffff'
    },
    {
      title: 'Electricidad',
      subtitle: 'Ahorro Energético',
      icon: Lightbulb,
      description: 'Optimización energética para proyectos empresariales y residenciales.',
      features: ['Eficiencia Energética', 'Smart Control'],
      price: 'Consulta gratuita',
      gradient: 'linear-gradient(135deg, #facc15, #f97316)',
      textColor: '#111827'
    },
    {
      title: 'Seguridad',
      subtitle: 'Vigilancia',
      icon: Shield,
      description: 'Sistemas de seguridad avanzados con sensores de última generación y videovigilancia.',
      features: ['Tranquilidad', 'Monitoreo 24/7'],
      price: 'Evaluación gratis',
      gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      textColor: '#ffffff'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clientes Activos', icon: Users },
    { number: '99.9%', label: 'Clientes Satisfechos', icon: TrendingUp },
    { number: '24/7', label: 'Soporte', icon: Clock },
    { number: '15+', label: 'Años Experiencia', icon: Award }
  ];

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2563eb, #10b981)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 1rem'
    },
    heroContent: {
      maxWidth: '80rem',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    },
    mainTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '2rem',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s ease-out'
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      color: '#dbeafe',
      maxWidth: '48rem',
      margin: '0 auto 3rem',
      lineHeight: '1.6',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s ease-out 0.3s'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      maxWidth: '64rem',
      margin: '0 auto',
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 1s ease-out 0.6s'
    },
    statCard: {
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    servicesSection: {
      padding: '5rem 1rem',
      backgroundColor: '#f9fafb',
      position: 'relative'
    },
    servicesContainer: {
      maxWidth: '80rem',
      margin: '0 auto'
    },
    sectionTitle: {
      textAlign: 'center',
      marginBottom: '5rem'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    serviceCard: {
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    serviceCardHover: {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.35)'
    },
    serviceHeader: {
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    serviceBody: {
      backgroundColor: 'white',
      padding: '2rem'
    },
    ctaSection: {
      padding: '5rem 1rem',
      background: 'linear-gradient(135deg, #2563eb, #10b981)',
      color: 'white',
      textAlign: 'center'
    },
    testimonialSection: {
      padding: '5rem 1rem',
      background: 'linear-gradient(135deg, #ef4444, #f97316)',
      color: 'white',
      textAlign: 'center'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '4rem 1rem',
      textAlign: 'center'
    },
    button: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      padding: '1rem 2.5rem',
      borderRadius: '1rem',
      fontSize: '1.125rem',
      fontWeight: '700',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      maxWidth: '32rem',
      width: '100%',
      justifyContent: 'center'
    },
    backgroundElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 1
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.backgroundElements}>
          <div style={{
            position: 'absolute',
            top: '5rem',
            left: '5rem',
            width: '8rem',
            height: '8rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '10rem',
            right: '4rem',
            width: '6rem',
            height: '6rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            animation: 'bounce 1s infinite',
            animationDelay: '2s'
          }}></div>
        </div>

        <div style={styles.heroContent}>
          {/* Logo */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: 'clamp(4rem, 10vw, 6rem)',
              fontWeight: '900',
              marginBottom: '1rem',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out'
            }}>
              <span style={{
                background: 'linear-gradient(45deg, #facc15, #f97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>OPTI</span>
              <span>PYME</span>
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '300',
              color: '#bfdbfe',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1s ease-out 0.2s'
            }}>Solutions</div>
          </div>

          {/* Title */}
          <h1 style={styles.mainTitle}>
            Tecnología que
            <div style={{
              background: 'linear-gradient(45deg, #facc15, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pulse 2s infinite'
            }}>
              Transforma
            </div>
            Empresas
          </h1>

          {/* Subtitle */}
          <p style={styles.subtitle}>
            Revoluciona tu negocio con soluciones tecnológicas de <strong>última generación</strong>. 
            Líderes en telefonía, instalaciones eléctricas fotovoltaicas y seguridad.
          </p>

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '900',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  color: '#bfdbfe',
                  fontWeight: '500',
                  fontSize: '0.875rem'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main style={styles.servicesSection}>
        <div style={styles.servicesContainer}>
          <div style={styles.sectionTitle}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Nuestras Especialidades
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 3rem)',
              fontWeight: '900',
              color: '#111827',
              marginBottom: '1.5rem'
            }}>
              Soluciones <span style={{
                background: 'linear-gradient(45deg, #2563eb, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Innovadoras</span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#4b5563',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Cada servicio está diseñado para catapultar tu empresa hacia el futuro digital con tecnología que supera cualquier expectativa.
            </p>
          </div>

          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index}
                style={styles.serviceCard}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.serviceCardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.serviceCard)}
              >
                <div style={{
                  ...styles.serviceHeader,
                  background: service.gradient,
                  color: service.textColor
                }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <service.icon size={24} />
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    marginBottom: '0.25rem'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: '0.75rem',
                    opacity: 0.9,
                    fontWeight: '500'
                  }}>
                    {service.subtitle}
                  </p>
                </div>

                <div style={styles.serviceBody}>
                  <p style={{
                    color: '#374151',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}>
                        <Check style={{ width: '1.25rem', height: '1.25rem', color: '#059669' }} />
                        <span style={{ color: '#374151', fontWeight: '500' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#111827'
                    }}>
                      {service.price}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#2563eb',
                      fontWeight: '600'
                    }}>
                      <span style={{ marginRight: '0.5rem' }}>Explorar</span>
                      <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Testimonials */}
      <section style={styles.testimonialSection}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3rem)',
            fontWeight: '900',
            marginBottom: '2rem'
          }}>
            La Confianza de <span style={{ color: '#facc15' }}>Líderes</span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#fee2e2',
            maxWidth: '48rem',
            margin: '0 auto 4rem'
          }}>
            Comparte tu experiencia con nosotros y ayuda a otros empresarios a tomar la mejor decisión
          </p>

          <div style={{
            maxWidth: '42rem',
            margin: '0 auto',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              justifyContent: 'center',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} style={{ 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    color: 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer'
                  }} />
                ))}
              </div>
              <span style={{ color: '#fee2e2', fontWeight: '500' }}>Tu calificación</span>
            </div>

            <blockquote style={{
              fontSize: '1.125rem',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.8)',
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed rgba(255, 255, 255, 0.3)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              "Haz clic en las estrellas y comparte tu experiencia aquí..."
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #2563eb, #10b981)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.125rem',
                fontWeight: '700',
                marginRight: '1rem',
                border: '2px dashed rgba(255, 255, 255, 0.3)'
              }}>
                ?
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: '700', fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Tu Nombre
                </div>
                <div style={{ color: '#fee2e2' }}>Tu Empresa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>
            ¿Preparado para el{' '}
            <span style={{
              background: 'linear-gradient(45deg, #10b981, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Futuro
            </span>?
          </h2>
          
          <p style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
            color: '#bfdbfe',
            lineHeight: '1.6',
            marginBottom: '3rem'
          }}>
            Más de <strong style={{ color: 'white' }}>500 empresas</strong> ya han revolucionado su negocio.{' '}
            <div style={{ fontWeight: '600', color: '#10b981' }}>Tu turno es ahora.</div>
          </p>

          <div style={{ marginBottom: '4rem' }}>
            <a 
              href="tel:+34641119677" 
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#111827';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.color = 'white';
              }}
            >
              <Phone style={{ width: '1.5rem', height: '1.5rem' }} />
              Solicita tu Consultoría Gratuita
            </a>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { icon: Check, title: 'Instalación Gratuita', desc: 'Sin costes ocultos ni sorpresas' },
              { icon: Clock, title: 'Soporte 24/7/365', desc: 'Equipo experto siempre disponible' },
              { icon: TrendingUp, title: 'Ahorro Garantizado', desc: 'En menos de 12 meses' }
            ].map((item, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}>
                <item.icon style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: '700', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#bfdbfe', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'linear-gradient(45deg, #2563eb, #10b981)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>O</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '900' }}>Optipyme Solutions</h3>
                  <p style={{ color: '#93c5fd' }}>Tecnología que transforma empresas</p>
                </div>
              </div>
              
              <p style={{
                color: '#d1d5db',
                lineHeight: '1.6',
                maxWidth: '28rem',
                margin: '0 auto 1.5rem'
              }}>
                Líderes en soluciones tecnológicas empresariales. Más de una década transformando 
                negocios con telefonía avanzada, optimización energética y seguridad.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                ¿Listo para transformar tu empresa?
              </h4>
              <a 
                href="mailto:optipymesolutions@gmail.com?subject=Solicitud de Consulta Gratuita&body=Hola, me gustaría solicitar una consulta gratuita para mi empresa."
                style={{
                  background: 'linear-gradient(45deg, #2563eb, #10b981)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '1rem',
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #1d4ed8, #059669)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(45deg, #2563eb, #10b981)';
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>📧</span>
                Solicita tu Consulta Gratuita
              </a>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>
                © 2025 Optipyme Solutions. Todos los derechos reservados.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.5rem',
                fontSize: '0.875rem'
              }}>
                <a href="/privacidad" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  Política de Privacidad
                </a>
                <a href="/terminos" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  Términos de Uso
                </a>
                <a href="/cookies" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                  Cookies
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="https://wa.me/34641119677"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#10b981',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
              >
                📱
              </a>
              <a 
                href="https://www.instagram.com/optipymesolutions/"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                📷
              </a>
              <a 
                href="mailto:optipymesolutions@gmail.com"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: '#3b82f6',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.target.style.backgroundColor
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                📧
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 768px) {
          .responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OptipymeHomepage;