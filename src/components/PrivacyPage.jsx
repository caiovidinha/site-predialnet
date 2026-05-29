import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fafafa] text-[#3d3838]">

      <div className="mb-16">
        <p className="text-sm font-light text-[#6b6b6b] mb-1">Legal</p>
        <h1 className="text-[1.65rem] md:text-3xl leading-8 font-light mb-1">Política de Privacidade</h1>
        <p className="text-lg font-light leading-6 mb-8">Como coletamos, usamos e protegemos suas informações</p>

        <div className="flex flex-col">
          <p className="text-sm font-light leading-snug mb-2">
            A sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações.
          </p>

          <p className="text-md font-light">Coleta de Informações</p>
          <p className="text-sm font-light leading-snug mb-2">
            Podemos coletar: dados pessoais (nome, e-mail, telefone), dados de uso do site, dados do dispositivo e localização (quando autorizado).
          </p>

          <p className="text-md font-light">Uso das Informações</p>
          <p className="text-sm font-light leading-snug">Gerenciar e personalizar sua experiência.</p>
          <p className="text-sm font-light leading-snug">Prover suporte ao cliente.</p>
          <p className="text-sm font-light leading-snug">Enviar notificações e atualizações relevantes.</p>
          <p className="text-sm font-light leading-snug mb-2">Melhorar a qualidade do serviço.</p>

          <p className="text-md font-light">Compartilhamento de Informações</p>
          <p className="text-sm font-light leading-snug mb-2">
            Não compartilhamos seus dados, exceto para cumprir leis, proteger nossos direitos ou com parceiros que respeitam a privacidade do usuário.
          </p>

          <p className="text-md font-light">Segurança</p>
          <p className="text-sm font-light leading-snug mb-2">
            Adotamos medidas rigorosas para proteger seus dados, conforme exigido pela LGPD. No entanto, nenhum sistema é 100% seguro.
          </p>

          <p className="text-md font-light">Direitos dos Usuários</p>
          <p className="text-sm font-light leading-snug mb-2">
            Você pode acessar, corrigir ou excluir seus dados enviando um e-mail para{' '}
            <a href="mailto:contato@predialnet.com.br" className="text-[#8a0005] hover:underline underline-offset-2">contato@predialnet.com.br</a>.
          </p>

          <p className="text-md font-light">Alterações</p>
          <p className="text-sm font-light leading-snug mb-2">
            Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível em nosso site.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPage;
