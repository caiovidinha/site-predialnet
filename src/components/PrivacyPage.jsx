import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
      <h1 className="text-4xl font-bold text-[#9c0004] mb-6 text-left">Política de Privacidade</h1>

      <p className="mb-4">
        A sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos suas informações.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Coleta de Informações</h2>
      <p className="mb-4">
        Podemos coletar: dados pessoais (nome, e-mail, telefone), dados de uso do site, dados do dispositivo e localização (quando autorizado).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Uso das Informações</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Gerenciar e personalizar sua experiência.</li>
        <li>Prover suporte ao cliente.</li>
        <li>Enviar notificações e atualizações relevantes.</li>
        <li>Melhorar a qualidade do serviço.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Compartilhamento de Informações</h2>
      <p className="mb-4">
        Não compartilhamos seus dados, exceto para cumprir leis, proteger nossos direitos ou com parceiros que respeitam a privacidade do usuário.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Segurança</h2>
      <p className="mb-4">
        Adotamos medidas rigorosas para proteger seus dados, conforme exigido pela LGPD. No entanto, nenhum sistema é 100% seguro.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Direitos dos Usuários</h2>
      <p className="mb-4">
        Você pode acessar, corrigir ou excluir seus dados enviando um e-mail para <a href="mailto:contato@predialnet.com.br" className="text-blue-600 underline">contato@predialnet.com.br</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Alterações</h2>
      <p className="mb-4">
        Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível em nosso site.
      </p>
    </div>
  );
};

export default PrivacyPage;
