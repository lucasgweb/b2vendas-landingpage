import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Dashboard from './image.png';

import logo from './logo.png';
import {
  ShoppingCart,
  Users,
  Smartphone,
  CheckCircle2,
  BarChart3,
  Shield,
  ArrowRight,
  Globe,
  Zap,
  Target,
  ChevronRight,
  Menu,
  X,
  Play,
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-screen flex items-center pb-32 md:pb-0">

        <div className="hero-pattern"></div>
        <div className="hero-overlay"></div>

        <nav className="absolute top-0 left-0 right-0 bg-[#2D61E3]/95 backdrop-blur-sm px-6 py-4 z-40">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-5" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#recursos" className="text-white/80 hover:text-white transition-colors">Recursos</a>
              <a href="#sistema" className="text-white/80 hover:text-white transition-colors">Sistema</a>
              <a href="#beneficios" className="text-white/80 hover:text-white transition-colors">Benefícios</a>
              <a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
              <div className="flex items-center gap-2">
                <a href="https://app.b2vendas.com.br/login">

                  <button className="glass-card px-6 py-2 text-white hover:bg-white/20 transition-all">
                    Login
                  </button>
                </a>

              </div>
            </div>
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>

        </nav>



        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          <div className="flex flex-col pt-24">
            <a href="#recursos" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Recursos</a>
            <a href="#sistema" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Sistema</a>
            <a href="#beneficios" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Benefícios</a>
            <a href="#contato" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            <div className="p-6 space-y-4">
              <a href="https://app.b2vendas.com.br/login" className="text-[#2D61E3] text-center block font-semibold">
                <button className="w-full bg-white text-[#2D61E3] px-6 py-3 rounded-xl hover:bg-white/90 transition-all font-semibold">
                  Login
                </button>
              </a>
              <a href="https://app.b2vendas.com.br/registre-se" className="text-[#2D61E3] text-center block font-semibold">
                <button className="w-full glass-card text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all font-semibold">
                  Teste Grátis
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-24 md:pt-32 relative z-10">
          <div className="md:flex items-center gap-16">
            <div className="md:w-5/12 space-y-8">
              <FadeInLeft>
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white ">
                    Potencialize suas
                    <span className="text-white"> vendas B2B</span>
                  </h1>
                  <p className="text-xl mb-8 text-white/90 leading-relaxed">
                    Transforme sua força de vendas com uma plataforma completa e integrada.
                    Performance e mobilidade para sua equipe vender mais.
                  </p>
                </div>
              </FadeInLeft>

              <FadeInUp>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://app.b2vendas.com.br/registre-se" className="w-full">
                    <button className="bg-white text-[#2D61E3] w-full px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center justify-center group">
                      Começar Trial Grátis
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                  <button className="glass-card text-white px-8 py-4 rounded-xl font-semibold text-nowrap hover:bg-white/20 transition-all flex items-center justify-center group">
                    <Play className="mr-2 h-5 w-5" />
                    Ver Demo
                  </button>
                </div>
              </FadeInUp>

              <div className="grid grid-cols-3 gap-4">
                <StatCard>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-white/80 text-sm">Satisfação</div>
                </StatCard>
                <StatCard>
                  <div className="text-3xl font-bold text-white">2.5x</div>
                  <div className="text-white/80 text-sm">Mais Vendas</div>
                </StatCard>
                <StatCard>
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-white/80 text-sm">Suporte</div>
                </StatCard>
              </div>
            </div>

            <FadeInRight>
              <div className=" mt-16 md:mt-0">
                <div className="relative">
                  <img
                    src={Dashboard}
                    alt="Dashboard B2Vendas"
                    className="hero-image animate-float"
                  />
                  <div className="absolute -bottom-4 -right-4 hero-card animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2D61E3] rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Vendas Hoje</div>
                        <div className="text-xl font-bold text-gray-900">R$ 42.500</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 hero-card animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Novos Clientes</div>
                        <div className="text-xl font-bold text-gray-900">+28</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="recursos" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeInUp>
              <h2 className="text-4xl font-bold mb-6">
                Recursos de
                <span className="text-[#2D61E3]"> Última Geração</span>
              </h2>
              <p className="text-xl text-gray-600">
                Uma plataforma completa que evolui com seu negócio, oferecendo todas as
                ferramentas necessárias para uma gestão de vendas eficiente.
              </p>
            </FadeInUp>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedFeatureCard
              icon={<Globe />}
              title="Gestão Omnichannel"
              description="Integre todos os canais de venda em uma única plataforma poderosa"
              delay={0}
            />
            <AnimatedFeatureCard
              icon={<Zap />}
              title="Performance Máxima"
              description="Sistema otimizado para resposta instantânea, mesmo com grandes volumes"
              delay={100}
            />
            <AnimatedFeatureCard
              icon={<Target />}
              title="Metas Inteligentes"
              description="Defina e acompanhe metas com insights baseados em IA"
              delay={200}
            />
            <AnimatedFeatureCard
              icon={<Users />}
              title="Gestão de Clientes"
              description="CRM completo com segmentação e histórico detalhado"
              delay={300}
            />
            <AnimatedFeatureCard
              icon={<Smartphone />}
              title="App Offline"
              description="Trabalhe sem internet com sincronização automática"
              delay={400}
            />
            <AnimatedFeatureCard
              icon={<Shield />}
              title="Segurança Total"
              description="Proteção de dados em nível empresarial com criptografia"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="sistema" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">
              Conheça o
              <span className="text-[#2D61E3]"> Sistema por Dentro</span>
            </h2>
            <p className="text-xl text-gray-600">
              Uma interface moderna e intuitiva que proporciona a melhor experiência
              para sua equipe de vendas.
            </p>
          </div>

          <div className="screenshot-carousel">
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Dashboard"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Dashboard Inteligente</h3>
                <p className="text-gray-600">Visualize métricas importantes e tome decisões baseadas em dados</p>
              </div>
            </div>
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Gestão de Clientes"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Gestão de Clientes</h3>
                <p className="text-gray-600">Gerencie seus clientes com facilidade e eficiência</p>
              </div>
            </div>
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="App Mobile"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">App Mobile</h3>
                <p className="text-gray-600">Acesse o sistema de qualquer lugar, mesmo offline</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-[#2D61E3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2D61E3]/90 transition-all flex items-center mx-auto group">
              Ver Todas as Funcionalidades
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">
              Benefícios
              <span className="text-[#2D61E3]"> Comprovados</span>
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais que transformam a maneira como sua equipe vende
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <BenefitItem
              title="Aumento de Produtividade"
              description="Automatize tarefas repetitivas e permita que sua equipe foque no que realmente importa: vender"
              metric="45%"
              metricLabel="mais produtividade"
            />
            <BenefitItem
              title="Redução de Custos"
              description="Elimine processos manuais e reduza significativamente seus custos operacionais"
              metric="30%"
              metricLabel="economia"
            />
            <BenefitItem
              title="Conversão Maior"
              description="Aumente suas taxas de conversão com processos otimizados e insights precisos"
              metric="2.5x"
              metricLabel="mais vendas"
            />
            <BenefitItem
              title="ROI Garantido"
              description="Retorno sobre investimento comprovado por nossos clientes em diferentes setores"
              metric="300%"
              metricLabel="ROI médio"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-[#2D61E3]/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Pronto para transformar suas vendas?
            </h2>
            <p className="text-xl mb-12 text-white/80">
              Agende uma demonstração personalizada e descubra como o B2Vendas pode
              impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center group">
                Agendar Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <ShoppingCart className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">B2Vendas</span>
              </div>
              <p className="text-gray-400">
                Transformando a maneira como empresas vendem no B2B.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Recursos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Termos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            © 2024 B2Vendas. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FadeInUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FadeInLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-left ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FadeInRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-right ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StatCard({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`stat-card ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}

function AnimatedFeatureCard({ icon, title, description, delay = 0 }: { icon: React.ReactElement; title: string; description: string; delay?: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`feature-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-[#2D61E3] mb-6">
        {React.cloneElement(icon, { className: "w-12 h-12 stroke-current" })}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface BenefitItemProps {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

function BenefitItem({ title, description, metric, metricLabel }: BenefitItemProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`feature-card ${inView ? 'visible' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className="text-[#2D61E3]">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-[#2D61E3]">{metric}</span>
            <span className="text-gray-600">{metricLabel}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;