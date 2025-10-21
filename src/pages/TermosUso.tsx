import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionTitle } from "@/components/ui/section";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle className="mb-8">Termos e Condições de Uso</SectionTitle>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-AO')}
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar os serviços da Vitaleevo Lda. ("Empresa", "nós" ou "nosso"), 
                você ("Cliente" ou "você") concorda em ficar vinculado a estes Termos e Condições 
                de Uso. Se não concordar com qualquer parte destes termos, não utilize os nossos serviços.
              </p>
              <p>
                Estes termos regem-se pela legislação da República de Angola, nomeadamente pelo 
                Código Civil Angolano, Código Comercial e demais legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Serviços Oferecidos</h2>
              <p>
                A Vitaleevo Lda. é uma empresa de design e comunicação visual especializada em:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criação de apresentações corporativas em PowerPoint</li>
                <li>Desenvolvimento de identidade visual e branding</li>
                <li>Design gráfico e criativo</li>
                <li>Consultoria estratégica em comunicação visual</li>
              </ul>
              <p className="mt-4">
                Os serviços específicos, prazos de entrega, valores e condições serão acordados 
                individualmente através de proposta comercial ou contrato específico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Contratação de Serviços</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">3.1. Orçamento e Proposta</h3>
              <p>
                Todos os projetos começam com um orçamento ou proposta comercial que especifica:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Descrição detalhada dos serviços</li>
                <li>Prazos de entrega</li>
                <li>Valor total e condições de pagamento</li>
                <li>Número de revisões incluídas</li>
                <li>Entregáveis finais</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">3.2. Aceitação</h3>
              <p>
                O contrato é considerado aceite quando o Cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assina a proposta comercial, ou</li>
                <li>Efetua o pagamento inicial (sinal), ou</li>
                <li>Confirma por escrito (email) a aceitação dos termos</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">3.3. Início dos Trabalhos</h3>
              <p>
                Os trabalhos só iniciam após:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recebimento do pagamento inicial (quando aplicável)</li>
                <li>Recebimento de todos os materiais e informações necessários do Cliente</li>
                <li>Conclusão do briefing inicial</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Pagamentos</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">4.1. Condições de Pagamento</h3>
              <p>
                Salvo acordo diferente especificado na proposta comercial, os pagamentos seguem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Projetos até Kz 500.000:</strong> 100% na contratação</li>
                <li><strong>Projetos acima de Kz 500.000:</strong> 50% na contratação + 50% na entrega final</li>
                <li><strong>Projetos corporativos de grande porte:</strong> 40% inicial + 30% desenvolvimento + 30% entrega</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">4.2. Formas de Pagamento</h3>
              <p>Aceitamos as seguintes formas de pagamento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Transferência bancária (BAI, BFA, BIC, Atlântico)</li>
                <li>Multicaixa Express</li>
                <li>Pagamento em moeda estrangeira (USD/EUR) mediante acordo prévio</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">4.3. Atrasos no Pagamento</h3>
              <p>
                Em caso de atraso no pagamento:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Os trabalhos serão suspensos até regularização</li>
                <li>Aplica-se juros de mora de 2% ao mês sobre o valor em atraso</li>
                <li>Após 30 dias de atraso, o contrato pode ser rescindido pela Vitaleevo</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">4.4. Impostos</h3>
              <p>
                Todos os valores incluem IVA (Imposto sobre o Valor Acrescentado) à taxa legal em vigor, 
                conforme legislação fiscal angolana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Prazos e Entregas</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">5.1. Prazos</h3>
              <p>
                Os prazos de entrega são estimados em dias úteis e contam a partir de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Recebimento do pagamento inicial</li>
                <li>Recebimento de todos os materiais necessários</li>
                <li>Aprovação do briefing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">5.2. Atrasos</h3>
              <p>
                Os prazos podem ser prorrogados nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atraso no fornecimento de materiais ou feedback pelo Cliente</li>
                <li>Alterações significativas no escopo do projeto</li>
                <li>Força maior ou caso fortuito</li>
                <li>Período de festividades (Natal, Ano Novo, Carnaval)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">5.3. Entrega</h3>
              <p>
                As entregas são realizadas digitalmente via:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Drive ou Dropbox (links de download)</li>
                <li>WeTransfer para arquivos grandes</li>
                <li>Email para arquivos menores</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Revisões e Alterações</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">6.1. Revisões Incluídas</h3>
              <p>
                Cada pacote/projeto inclui um número específico de rodadas de revisão conforme 
                especificado na proposta. As revisões incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ajustes de texto e conteúdo</li>
                <li>Alterações de cores dentro da paleta aprovada</li>
                <li>Pequenos ajustes de layout</li>
                <li>Correções de erros</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">6.2. Revisões Adicionais</h3>
              <p>
                Revisões além das incluídas no pacote serão cobradas separadamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Revisão adicional simples: Kz 50.000</li>
                <li>Revisão adicional complexa: Kz 100.000 - 200.000</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">6.3. Mudanças de Escopo</h3>
              <p>
                Alterações que mudem significativamente o escopo original do projeto 
                (novos slides, nova identidade, conceito diferente) serão consideradas 
                novo projeto e orçadas separadamente.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">6.4. Prazo para Feedback</h3>
              <p>
                O Cliente tem até 7 dias úteis para fornecer feedback sobre cada entrega. 
                Após este prazo sem retorno, o trabalho será considerado aprovado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Propriedade Intelectual</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">7.1. Direitos do Cliente</h3>
              <p>
                Após o pagamento integral do projeto, o Cliente recebe:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Direitos de uso comercial ilimitado dos materiais entregues</li>
                <li>Direito de modificar os arquivos editáveis fornecidos</li>
                <li>Direito de reproduzir em qualquer meio e formato</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">7.2. Direitos da Vitaleevo</h3>
              <p>
                A Vitaleevo reserva-se o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar os trabalhos criados em seu portfólio</li>
                <li>Divulgar os projetos em redes sociais e materiais de marketing</li>
                <li>Mencionar o Cliente como referência (salvo acordo de confidencialidade)</li>
              </ul>
              <p className="mt-4">
                Se o Cliente desejar confidencialidade total, isto deve ser acordado previamente 
                e pode ter custo adicional.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">7.3. Materiais de Terceiros</h3>
              <p>
                O Cliente é responsável por garantir que todos os materiais fornecidos 
                (imagens, textos, logos) não violam direitos de terceiros. A Vitaleevo 
                não se responsabiliza por conteúdos fornecidos pelo Cliente.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">7.4. Bancos de Imagens</h3>
              <p>
                Imagens de bancos pagos (Shutterstock, iStock, etc.) utilizadas nos projetos 
                são licenciadas e o custo está incluído no projeto. O Cliente não pode revender 
                ou sublicenciar estas imagens isoladamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Responsabilidades do Cliente</h2>
              
              <p>O Cliente compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer todas as informações e materiais necessários em tempo útil</li>
                <li>Responder aos pedidos de feedback dentro dos prazos estabelecidos</li>
                <li>Garantir a veracidade e legalidade dos conteúdos fornecidos</li>
                <li>Efetuar os pagamentos nos prazos acordados</li>
                <li>Comunicar claramente suas expectativas e necessidades</li>
                <li>Respeitar os direitos autorais da Vitaleevo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Responsabilidades da Vitaleevo</h2>
              
              <p>A Vitaleevo compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entregar trabalhos originais e de alta qualidade</li>
                <li>Respeitar os prazos acordados</li>
                <li>Manter confidencialidade sobre informações sensíveis</li>
                <li>Fornecer suporte pós-entrega conforme acordado</li>
                <li>Garantir que os trabalhos não violam direitos de terceiros</li>
                <li>Manter o Cliente informado sobre o progresso do projeto</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Garantias e Limitações</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">10.1. Garantia de Qualidade</h3>
              <p>
                Garantimos que todos os trabalhos são realizados com profissionalismo e 
                seguindo as melhores práticas de design. Se houver erros técnicos ou 
                problemas de qualidade, corrigiremos sem custos adicionais dentro de 30 dias.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">10.2. Limitação de Responsabilidade</h3>
              <p>
                A Vitaleevo não se responsabiliza por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resultados comerciais ou de marketing obtidos com os materiais</li>
                <li>Incompatibilidade de arquivos em versões antigas de software</li>
                <li>Perda de arquivos após a entrega (recomendamos backup)</li>
                <li>Uso inadequado ou modificação incorreta dos materiais pelo Cliente</li>
                <li>Problemas causados por materiais fornecidos pelo Cliente</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">10.3. Força Maior</h3>
              <p>
                Não seremos responsáveis por atrasos ou impossibilidade de cumprimento 
                devido a circunstâncias fora do nosso controle (desastres naturais, 
                cortes de energia prolongados, greves, pandemias, guerra, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Cancelamento e Reembolso</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">11.1. Cancelamento pelo Cliente</h3>
              <p>
                O Cliente pode cancelar o projeto mediante notificação por escrito, 
                aplicando-se as seguintes condições:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Antes do início:</strong> Reembolso de 100% menos 10% de taxa administrativa</li>
                <li><strong>Até 25% de progresso:</strong> Reembolso de 75%</li>
                <li><strong>Até 50% de progresso:</strong> Reembolso de 50%</li>
                <li><strong>Após 50% de progresso:</strong> Sem direito a reembolso</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">11.2. Cancelamento pela Vitaleevo</h3>
              <p>
                A Vitaleevo pode cancelar o contrato nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atraso de pagamento superior a 30 dias</li>
                <li>Falta de resposta do Cliente por mais de 45 dias</li>
                <li>Comportamento abusivo ou desrespeitoso</li>
                <li>Pedidos que violem a lei ou ética profissional</li>
              </ul>
              <p className="mt-4">
                Nestes casos, será feito acerto proporcional ao trabalho executado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Confidencialidade</h2>
              
              <p>
                Ambas as partes comprometem-se a manter confidencialidade sobre informações 
                sensíveis compartilhadas durante o projeto, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Estratégias de negócio</li>
                <li>Dados financeiros</li>
                <li>Informações de mercado não públicas</li>
                <li>Segredos comerciais</li>
              </ul>
              <p className="mt-4">
                Esta obrigação permanece válida por 3 anos após o término do projeto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Resolução de Disputas</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">13.1. Negociação Amigável</h3>
              <p>
                Em caso de desacordo, as partes comprometem-se a tentar resolver a questão 
                através de negociação direta e de boa-fé.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">13.2. Mediação</h3>
              <p>
                Se a negociação não resultar em acordo, as partes podem recorrer a mediação 
                antes de iniciar processo judicial.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">13.3. Jurisdição</h3>
              <p>
                Para resolução de litígios, fica eleito o foro da Comarca de Luanda, Angola, 
                com exclusão de qualquer outro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">14. Disposições Gerais</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">14.1. Lei Aplicável</h3>
              <p>
                Estes termos regem-se pela legislação da República de Angola.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">14.2. Alterações aos Termos</h3>
              <p>
                A Vitaleevo reserva-se o direito de alterar estes termos a qualquer momento. 
                Os Clientes serão notificados por email sobre alterações significativas. 
                Projetos em andamento seguem os termos vigentes na data da contratação.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">14.3. Integralidade</h3>
              <p>
                Estes termos, juntamente com a proposta comercial específica, constituem 
                o acordo integral entre as partes, substituindo todos os acordos anteriores 
                verbais ou escritos.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">14.4. Nulidade Parcial</h3>
              <p>
                Se qualquer cláusula destes termos for considerada inválida, as demais 
                permanecem em pleno vigor.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">14.5. Comunicações</h3>
              <p>
                Todas as comunicações oficiais devem ser feitas por escrito via email para:
                <a href="mailto:geral@vitaleevo.com" className="text-primary hover:underline ml-2">geral@vitaleevo.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">15. Contacto</h2>
              <div className="mt-4 space-y-2">
                <p><strong>Vitaleevo Lda.</strong></p>
                <p>NIF: [Inserir NIF]</p>
                <p>Rua Amilcar Cabral, Luanda, Angola</p>
                <p>Email: <a href="mailto:geral@vitaleevo.com" className="text-primary hover:underline">geral@vitaleevo.com</a></p>
                <p>Telefone: +244 949 839 839 / +244 923 839 839</p>
                <p>WhatsApp: +244 949 839 839</p>
                <p>Website: <a href="https://www.vitaleevo.com" className="text-primary hover:underline">www.vitaleevo.com</a></p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-center text-muted-foreground">
                Ao utilizar os serviços da Vitaleevo, você confirma que leu, compreendeu 
                e concorda com estes Termos e Condições de Uso.
              </p>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default TermosUso;
