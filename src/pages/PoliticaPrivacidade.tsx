import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionTitle } from "@/components/ui/section";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle className="mb-8">Política de Privacidade</SectionTitle>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-AO')}
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introdução</h2>
              <p>
                A Vitaleevo Lda. ("nós", "nosso" ou "empresa"), com sede em Luanda, Angola, 
                está comprometida com a proteção da privacidade e dos dados pessoais dos nossos 
                clientes e utilizadores, em conformidade com a Lei n.º 22/11 de 17 de Junho 
                (Lei de Protecção de Dados Pessoais de Angola) e demais legislação aplicável.
              </p>
              <p>
                Esta Política de Privacidade descreve como recolhemos, utilizamos, armazenamos 
                e protegemos as suas informações pessoais quando utiliza os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Dados Recolhidos</h2>
              <p>Recolhemos as seguintes categorias de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados de Identificação:</strong> Nome completo, número de identificação fiscal (NIF), número do bilhete de identidade</li>
                <li><strong>Dados de Contacto:</strong> Endereço de e-mail, número de telefone, endereço postal</li>
                <li><strong>Dados Empresariais:</strong> Nome da empresa, NIF da empresa, setor de atividade</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de acesso</li>
                <li><strong>Dados de Transação:</strong> Informações sobre serviços contratados, valores pagos, formas de pagamento</li>
                <li><strong>Dados de Comunicação:</strong> Histórico de comunicações connosco (e-mails, mensagens, chamadas)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Finalidade do Tratamento</h2>
              <p>Utilizamos os seus dados pessoais para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestação de serviços de design e criação de apresentações corporativas</li>
                <li>Comunicação sobre projetos, orçamentos e entregas</li>
                <li>Processamento de pagamentos e emissão de faturas</li>
                <li>Cumprimento de obrigações legais e fiscais</li>
                <li>Melhoria dos nossos serviços e experiência do cliente</li>
                <li>Envio de informações sobre novos serviços (mediante consentimento)</li>
                <li>Segurança e prevenção de fraudes</li>
                <li>Resolução de disputas e litígios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Base Legal</h2>
              <p>O tratamento dos seus dados pessoais fundamenta-se em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Execução de Contrato:</strong> Necessário para executar o contrato de prestação de serviços</li>
                <li><strong>Obrigação Legal:</strong> Cumprimento de obrigações fiscais e contabilísticas estabelecidas pela legislação angolana</li>
                <li><strong>Consentimento:</strong> Para ações de marketing e comunicações promocionais</li>
                <li><strong>Interesses Legítimos:</strong> Melhoria dos serviços, segurança e prevenção de fraudes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Partilha de Dados</h2>
              <p>
                Os seus dados pessoais podem ser partilhados com as seguintes entidades, 
                exclusivamente para os fins descritos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prestadores de Serviços:</strong> Empresas que nos auxiliam na prestação de serviços (hospedagem web, processamento de pagamentos)</li>
                <li><strong>Autoridades Fiscais:</strong> Administração Geral Tributária (AGT) em cumprimento de obrigações legais</li>
                <li><strong>Autoridades Judiciais:</strong> Mediante ordem judicial ou requisição legal</li>
                <li><strong>Parceiros Comerciais:</strong> Apenas com o seu consentimento expresso</li>
              </ul>
              <p className="mt-4">
                <strong>Transferências Internacionais:</strong> Alguns dos nossos prestadores de serviços 
                tecnológicos podem estar localizados fora de Angola. Garantimos que essas transferências 
                são realizadas com as devidas salvaguardas de segurança e em conformidade com a lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acesso não autorizado</li>
                <li>Perda, alteração ou destruição acidental</li>
                <li>Divulgação ou utilização ilícita</li>
              </ul>
              <p className="mt-4">
                As medidas incluem: encriptação de dados, controlo de acessos, formação de colaboradores, 
                auditorias regulares e protocolos de resposta a incidentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Retenção de Dados</h2>
              <p>
                Os seus dados pessoais serão conservados apenas pelo tempo necessário para as finalidades 
                para as quais foram recolhidos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dados Contratuais:</strong> Durante a vigência do contrato e por 5 anos após o término (conforme Código Comercial Angolano)</li>
                <li><strong>Dados Fiscais:</strong> 10 anos (conforme Código Geral Tributário de Angola)</li>
                <li><strong>Dados de Marketing:</strong> Até revogação do consentimento ou 3 anos sem interação</li>
                <li><strong>Dados de Navegação:</strong> 12 meses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Seus Direitos</h2>
              <p>
                Em conformidade com a Lei de Protecção de Dados Pessoais de Angola, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Direito de Acesso:</strong> Obter confirmação sobre o tratamento dos seus dados e acesso aos mesmos</li>
                <li><strong>Direito de Retificação:</strong> Corrigir dados inexatos ou desatualizados</li>
                <li><strong>Direito de Eliminação:</strong> Solicitar a eliminação dos seus dados (exceto quando legalmente obrigatório)</li>
                <li><strong>Direito de Limitação:</strong> Restringir o tratamento em determinadas circunstâncias</li>
                <li><strong>Direito de Oposição:</strong> Opor-se ao tratamento dos seus dados para fins de marketing</li>
                <li><strong>Direito de Portabilidade:</strong> Receber os seus dados em formato estruturado</li>
                <li><strong>Direito de Retirar Consentimento:</strong> Revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="mt-4">
                Para exercer estes direitos, contacte-nos através de: <a href="mailto:geral@vitaleevo.com" className="text-primary hover:underline">geral@vitaleevo.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência no nosso website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do website</li>
                <li><strong>Cookies Analíticos:</strong> Ajudam-nos a entender como utiliza o website</li>
                <li><strong>Cookies de Marketing:</strong> Utilizados para mostrar conteúdo relevante (mediante consentimento)</li>
              </ul>
              <p className="mt-4">
                Você pode gerir as suas preferências de cookies nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Menores de Idade</h2>
              <p>
                Os nossos serviços não se destinam a menores de 18 anos. Não recolhemos conscientemente 
                dados pessoais de menores. Se tiver conhecimento de que recolhemos dados de um menor, 
                contacte-nos imediatamente para procedermos à sua eliminação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Alterações à Política</h2>
              <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. 
                As alterações serão publicadas nesta página com a data de atualização. Recomendamos 
                que reveja regularmente esta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Reclamações</h2>
              <p>
                Se considerar que o tratamento dos seus dados pessoais viola a legislação aplicável, 
                tem o direito de apresentar reclamação junto da entidade reguladora competente em Angola.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contactos</h2>
              <p>Para questões relacionadas com a proteção de dados pessoais, contacte-nos:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Vitaleevo Lda.</strong></p>
                <p>Rua Amilcar Cabral, Luanda, Angola</p>
                <p>Email: <a href="mailto:geral@vitaleevo.com" className="text-primary hover:underline">geral@vitaleevo.com</a></p>
                <p>Telefone: +244 949 839 839 / +244 923 839 839</p>
              </div>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
