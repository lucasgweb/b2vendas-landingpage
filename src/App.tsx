import React, { useState } from 'react';
import {
  ShoppingCart,
  Users,
  Smartphone,
  CheckCircle2,
  Shield,
  ArrowRight,
  Globe,
  Zap,
  Target,
  ChevronRight,
  LineChart,
  BarChart,
  PieChart,
  Menu,
  X,
  Play
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden hero-gradient min-h-screen flex items-center">
        <div className="absolute inset-0 hero-pattern opacity-30"></div>

        <nav className="absolute top-0 left-0 right-0 container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center z-20">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 mr-2 text-blue-500" />
            <span className="text-xl sm:text-2xl font-bold text-white">B2Vendas</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 z-10">
            <a href="#recursos" className="text-white/80 hover:text-white transition-colors">Recursos</a>
            <a href="#sistema" className="text-white/80 hover:text-white transition-colors">Sistema</a>
            <a href="#beneficios" className="text-white/80 hover:text-white transition-colors">Benefícios</a>
            <a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a>
            <a href="https://app.b2vendas.com.br/login">
              <button className="glass-card px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base text-white hover:bg-white/20 transition-all">
                Login
              </button>
            </a>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-50 bg-black/95 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col pt-24 p-4">
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            <a href="#recursos" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Recursos</a>
            <a href="#sistema" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Sistema</a>
            <a href="#beneficios" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Benefícios</a>
            <a href="#contato" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            <div className="p-4 mt-4">
              <a href="https://app.b2vendas.com.br/login">
                <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all">
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 relative z-10">
          <div className="md:flex items-center gap-8 lg:gap-12">
            <div className="md:w-1/2 order-1 md:order-none">
              <div className="inline-flex items-center glass-card px-3 py-1.5 mb-4 md:mb-6 text-sm md:text-base text-white/80">
                <span className="mr-2">🚀</span>
                Plataforma líder em B2B
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Potencialize suas<br />
                <span className="text-slate-800"> vendas B2B</span>
              </h1>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-white/80 leading-relaxed">
                Transforme sua força de vendas com uma plataforma completa e integrada.
                Performance e mobilidade para sua equipe vender mais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-0 w-full">
                <a href="https://app.b2vendas.com.br/login" className='bg-white text-blue-500 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center justify-center group'>

                  Começar Agora
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />

                </a>
                <button className="glass-card text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center group">
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Ver Demo
                </button>
              </div>
              <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-8">
                <div className="stat-card">
                  <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                  <div className="text-sm md:text-base text-white/60">Satisfação</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl md:text-3xl font-bold text-white">2.5x</div>
                  <div className="text-sm md:text-base text-white/60">Mais Vendas</div>
                </div>
                <div className="stat-card">
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm md:text-base text-white/60">Suporte</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 order-0 md:order-none">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
                <div className="glass-card p-4 sm:p-6 shadow-2xl animate-float">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Dashboard de Vendas</h3>
                      <p className="text-sm sm:text-base text-white/60">Visão geral do desempenho</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="stat-card">
                      <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-white">R$ 125k</div>
                      <div className="text-white/60 text-xs sm:text-sm">Vendas Mensais</div>
                    </div>
                    <div className="stat-card">
                      <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-white">847</div>
                      <div className="text-white/60 text-xs sm:text-sm">Novos Pedidos</div>
                    </div>
                  </div>
                  <div className="stat-card mb-6 sm:mb-8">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <div>
                        <h4 className="text-sm sm:text-base text-white font-medium">Desempenho</h4>
                        <p className="text-white/60 text-xs sm:text-sm">Últimos 30 dias</p>
                      </div>
                      <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[60%] h-full bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >

      {/* Features Section */}
      < section id="recursos" className="py-12 md:py-16" >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Recursos de
              <span className="text-blue-500"> Última Geração</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Uma plataforma completa que evolui com seu negócio, oferecendo todas as
              ferramentas necessárias para uma gestão de vendas eficiente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard
              icon={<Globe />}
              title="Gestão Omnichannel"
              description="Integre todos os canais de venda em uma única plataforma poderosa"
            />
            <FeatureCard
              icon={<Zap />}
              title="Performance Máxima"
              description="Sistema otimizado para resposta instantânea, mesmo com grandes volumes"
            />
            <FeatureCard
              icon={<Target />}
              title="Metas Inteligentes"
              description="Defina e acompanhe metas com insights baseados em IA"
            />
            <FeatureCard
              icon={<Users />}
              title="Gestão de Clientes"
              description="CRM completo com segmentação e histórico detalhado"
            />
            <FeatureCard
              icon={<Smartphone />}
              title="App Offline"
              description="Trabalhe sem internet com sincronização automática"
            />
            <FeatureCard
              icon={<Shield />}
              title="Segurança Total"
              description="Proteção de dados em nível empresarial com criptografia"
            />
          </div>
        </div>
      </section >

      {/* Screenshots Section */}
      < section id="sistema" className="py-12 md:py-16 bg-white relative overflow-hidden" >
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Conheça o
              <span className="text-blue-500"> Sistema por Dentro</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Uma interface moderna e intuitiva que proporciona a melhor experiência
              para sua equipe de vendas.
            </p>
          </div>

          <div className="screenshot-carousel grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Dashboard"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Dashboard Inteligente</h3>
                <p className="text-gray-600 text-sm sm:text-base">Visualize métricas importantes e tome decisões baseadas em dados</p>
              </div>
            </div>
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                alt="Gestão de Clientes"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Gestão de Clientes</h3>
                <p className="text-gray-600 text-sm sm:text-base">Gerencie seus clientes com facilidade e eficiência</p>
              </div>
            </div>
            <div className="screenshot-item">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="App Mobile"
                className="w-full aspect-video object-cover rounded-xl"
              />
              <div className="p-4 sm:p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">App Mobile</h3>
                <p className="text-gray-600 text-sm sm:text-base">Acesse o sistema de qualquer lugar, mesmo offline</p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <button className="bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all flex items-center mx-auto group">
              Ver Todas as Funcionalidades
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section >

      {/* Benefits Section */}
      < section id="beneficios" className="py-12 md:py-20 relative overflow-hidden" >
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-6">
              Benefícios
              <span className="text-blue-500"> Comprovados</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Resultados reais que transformam a maneira como sua equipe vende
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
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
      </section >

      {/* CTA Section */}
      < section id="contato" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden" >
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-blue-500/90"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
              Pronto para transformar suas vendas?
            </h2>
            <p className="text-base sm:text-xl mb-8 md:mb-12 text-white/80">
              Agende uma demonstração personalizada e descubra como o B2Vendas pode
              impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center group">
                Agendar Demonstração
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-12 md:py-20 border-t border-white/10" >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4 md:mb-6">
                <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 mr-2" />
                <span className="text-xl sm:text-2xl font-bold">B2Vendas</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Transformando a maneira como empresas vendem no B2B.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">Produto</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Recursos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Preços</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Cases</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Segurança</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Sobre</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Carreiras</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Contato</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Privacidade</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Termos</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Cookies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">LGPD</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm sm:text-base">
            © 2024 B2Vendas. Todos os direitos reservados.
          </div>
        </div>
      </footer >
    </div >
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactElement; title: string; description: string }) {
  return (
    <div className="feature-card p-4 sm:p-6 flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-500 mb-4">
        {React.cloneElement(icon, { className: "w-8 h-8 sm:w-10 sm:h-10 stroke-current" })}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}

function BenefitItem({ title, description, metric, metricLabel }: { title: string; description: string; metric: string; metricLabel: string }) {
  return (
    <div className="feature-card p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-blue-500 pt-2">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-blue-500">{metric}</span>
            <span className="text-gray-600 text-sm sm:text-base">{metricLabel}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;