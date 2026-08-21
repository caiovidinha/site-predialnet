/**
 * Perguntas frequentes da home.
 *
 * IMPORTANTE: o Google exige que o conteúdo marcado como FAQPage esteja
 * visível na página. Por isso esta lista alimenta ao mesmo tempo o
 * componente Faq.astro (o que o usuário lê) e o Schema.org do Layout —
 * assim os dois nunca divergem.
 *
 * Formato pensado para extração por mecanismos de resposta: a resposta
 * começa direta, e só depois complementa.
 */
export const FAQ_HOME = [
  {
    pergunta: 'Em quais cidades a Predialnet atende?',
    resposta:
      'A Predialnet atende Niterói, São Gonçalo, Itaboraí e regiões do Rio de Janeiro, incluindo a Zona Norte e o Centro. A cobertura por fibra óptica varia conforme o endereço, e há também atendimento via rádio em locais sem fibra. A disponibilidade é confirmada por consulta de viabilidade técnica no endereço.',
  },
  {
    pergunta: 'Quantos Mega de internet uma família precisa?',
    resposta:
      'Uma família de quatro pessoas usando streaming, videochamadas e jogos ao mesmo tempo navega com conforto em planos de 600 a 800 Mega. Para casas com muitos dispositivos conectados, trabalho remoto intenso, jogos em nuvem ou conteúdo em 4K e 8K, o plano de 1 Giga é o mais indicado. A necessidade varia conforme a quantidade de aparelhos e o tipo de uso.',
  },
  {
    pergunta: 'Qual a diferença entre Wi-Fi 5 e Wi-Fi 6?',
    resposta:
      'O Wi-Fi 6 mantém mais dispositivos conectados ao mesmo tempo sem perda de desempenho e tem maior alcance e estabilidade que o Wi-Fi 5. Na prática, a diferença aparece em casas com muitos aparelhos simultâneos. Os planos Predialnet de 800 Mega e 1 Giga incluem Super Wi-Fi 6; o plano de 600 Mega inclui Super Wi-Fi Gigabit.',
  },
  {
    pergunta: 'Os planos da Predialnet têm fidelidade?',
    resposta:
      'Não. Os planos residenciais de fibra óptica da Predialnet são sem fidelidade e com instalação grátis. As condições valem para contratação por pessoa física, sem franquia de consumo, e a instalação está sujeita a viabilidade técnica no endereço.',
  },
  {
    pergunta: 'Como faço um teste de velocidade corretamente?',
    resposta:
      'Para medir a velocidade real do plano, conecte o computador ao roteador por cabo de rede, feche outros programas e pause downloads e streamings antes do teste. Medições por Wi-Fi sofrem interferência de paredes, distância e outros aparelhos, e por isso costumam mostrar valores menores que os contratados. A Predialnet tem um medidor próprio em speedtest.predialnet.com.br.',
  },
  {
    pergunta: 'Por que meu Wi-Fi não chega no quarto?',
    resposta:
      'O sinal de Wi-Fi perde força ao atravessar paredes, lajes e móveis, e a distância até o roteador é o fator que mais pesa. Posicionar o roteador em ponto central da casa, elevado e longe de metais, espelhos e eletrodomésticos costuma resolver. Em casas grandes ou com muitos cômodos, um sistema mesh distribui o sinal melhor do que um único roteador.',
  },
  {
    pergunta: 'A Predialnet é licenciada pela Anatel?',
    resposta:
      'Sim. A Predialnet opera sob a razão social Predlink Rede de Telecomunicações Ltda. (CNPJ 05.980.171/0001-48) e é licenciada pela Anatel para prestar Serviço de Comunicação Multimídia (SCM). A Predialnet está no mercado desde 1998.',
  },
  {
    pergunta: 'Qual a diferença entre internet por fibra óptica e via rádio?',
    resposta:
      'A fibra óptica leva o sinal por cabo de vidro até o imóvel e entrega velocidades mais altas e latência menor. A internet via rádio transmite o sinal por antena e é a alternativa para endereços onde a fibra ainda não chegou. A Predialnet oferece as duas tecnologias: fibra em planos de 600 Mega a 1 Giga e via rádio em planos de 5 a 10 Mega.',
  },
];
