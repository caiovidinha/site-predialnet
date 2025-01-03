import React, { useEffect, useState } from 'react';
const axios = require("axios");
const https = require("https");

const FormModal = ({ isOpen, onClose, type, plan }) => {
  const [formData, setFormData] = useState({});
  const [phone, setPhone] = useState("");
  const [plan1, setPlan1] = useState(null);
  const [missingField, setMissingField] = useState("none");
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState("")
  // Verifica se o modal está aberto
  if (!isOpen) {
    return null;
  }

  // Prevenir scroll na página enquanto o modal está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
});

const sendEmail = async(to,subject,body) => {
    const data = {
        "to": to,
        "subject": subject,
        "content": body
    }
    const email = await instance.post('https://appgw.predialnet.com.br/emails', data)
    if(!email) return {error: "Erro ao enviar o e-mail"}
    return email
}

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, "");
    if (phoneNumber.length <= 2) return `(${phoneNumber}`;
    if (phoneNumber.length <= 7) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };
  // Configuração do formulário com base no "type"
  const formConfig = {
    telefonia: {
      title: "TELEFONIA",
      email: "comercial@predialnet.com.br",
      subtitle: "Preencha o formulário e um de nossos consultores entrará em contato com você.",
      fields: [
        { id: "nome", label: "Nome", type: "text" },
        { id: "plan", label: "Confirme o plano escolhido", type: "select", options: ["Ideal Plus", "Ideal Master"] },
        { id: "address", label: "Endereço", type: "text" },
        { id: "number", label: "Número", type: "text" },
        { id: "complement", label: "Complemento", type: "text" },
        { id: "neighborhood", label: "Bairro", type: "text" },
        { id: "cep", label: "CEP", type: "text" },
        { id: "phone", label: "Telefone", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
      ],
    },
    portoMaravilha: {
      title: "Planos Resienciais - PORTO MARAVILHA",
      email: "comercial@predialnet.com.br",
      subtitle: "Preencha o formulário e um de nossos consultores entrará em contato com você.",
      fields: [
        { id: "nome", label: "Nome", type: "text" },
        { id: "plan", label: "Confirme o plano escolhido", type: "select", options: ["60 mega", "40 mega", "30 mega", "25 mega"] },
        { id: "address", label: "Endereço", type: "text" },
        { id: "number", label: "Número", type: "text" },
        { id: "complement", label: "Complemento", type: "text" },
        { id: "neighborhood", label: "Bairro", type: "text" },
        { id: "cep", label: "CEP", type: "text" },
        { id: "phone", label: "Telefone", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
      ],
    },
    viaRadio: {
      title: "Planos residenciais - VIA RÁDIO",
      email: "comercial@predialnet.com.br",
      subtitle: "Preencha o formulário e um de nossos consultores entrará em contato com você.",
      fields: [
        { id: "nome", label: "Nome", type: "text" },
        { id: "plan", label: "Confirme o plano escolhido", type: "select", options: ["10 mega", "8 mega", "6 mega", "5 mega"] },
        { id: "address", label: "Endereço", type: "text" },
        { id: "number", label: "Número", type: "text" },
        { id: "complement", label: "Complemento", type: "text" },
        { id: "neighborhood", label: "Bairro", type: "text" },
        { id: "cep", label: "CEP", type: "text" },
        { id: "phone", label: "Telefone", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
      ],
    },
    cancelamento: {
      title: "CANCELAMENTO",
      email: "cancelamento@predialnet.com.br",
      subtitle: "Se você deseja cancelar algum serviço, preencha as informações abaixo.",
      fields: [
        { id: "fullName", label: "Nome completo", type: "text" },
        { id: "cpfCnpj", label: "CPF ou CNPJ", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
        {
          id: "cancelReason",
          label: "Qual o motivo do cancelamento?",
          type: "select",
          options: [
            "Contratei os serviços de outra operadora.",
            "Estou cortando gastos.",
            "Insatisfação com o serviço.",
            "Outro motivo"
          ]
        },
        { id: "observation", label: "Gostaria de fazer uma observação?", type: "textarea" }
      ],
    },
    contato: {
      title: "FALE CONOSCO",
      email: "sac@predialnet.com.br",
      subtitle: "Utilize este canal para informações, dúvidas ou solicitar serviços.",
      fields: [
        { id: "clientCode", label: "Código do Cliente", type: "text" },
        { id: "cpfCnpj", label: "CPF ou CNPJ", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
        {
          id: "subject",
          label: "Assunto",
          type: "select",
          options: [
            "Contratar novo serviço",
            "Cancelamento do serviço",
            "Problema técnico",
            "Problema com a fatura",
            "Sugestões",
            "Outros"
          ]
        },
        { id: "message", label: "Mensagem", type: "textarea" }
      ],
    },
    financeiro: {
      title: "FINANCEIRO",
      email: "financeiro@predialnet.com.br",
      subtitle: "Resolva problemas com a sua fatura ou outras questões sobre pagamento.",
      fields: [
        { id: "fullName", label: "Nome completo", type: "text" },
        { id: "cpfCnpj", label: "CPF ou CNPJ", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
        {
          id: "helpReason",
          label: "Em que podemos ajudá-lo?",
          type: "select",
          options: [
            "Não recebi minha fatura",
            "Não consigo imprimir a 2ª via da minha fatura",
            "Outro motivo"
          ]
        },
        { id: "description", label: "Descreva aqui o que você precisa", type: "textarea" }
      ],
    },
    suporte: {
      title: "SUPORTE",
      email: "suporte@predialnet.com.br",
      subtitle: "Informe o seu problema e nossa equipe retornará o mais breve possível",
      fields: [
        { id: "clientCode", label: "Código do cliente", type: "text" },
        { id: "cpfCnpj", label: "CPF ou CNPJ", type: "text" },
        { id: "email", label: "E-mail", type: "email" },
        {
          id: "supportReason",
          label: "Em que podemos ajudá-lo?",
          type: "select",
          options: [
            "Gostaria de fazer uma pergunta",
            "Estou sem internet",
            "A velocidade da minha conexão está muito baixa",
            "Outro motivo"
          ]
        },
        { id: "description", label: "Descreva aqui o que você precisa", type: "textarea" }
      ],
    },
    empresa: {
      title: "EMPRESA",
      email: "comercial@predialnet.com.br",
      subtitle: "Preencha os detalhes da sua empresa no formulário abaixo.",
      fields: [
        { id: "address", label: "Endereço", type: "text" },
        { id: "number", label: "Número", type: "text" },
        { id: "complement", label: "Complemento", type: "text" },
        { id: "neighborhood", label: "Bairro", type: "text" },
        { id: "cep", label: "CEP", type: "text" },
        { id: "companyName", label: "Nome da empresa", type: "text" },
        { id: "yourName", label: "Seu nome", type: "text" },
        { id: "phone", label: "Telefone", type: "text" },
        { id: "email", label: "E-mail", type: "email" }
      ],
    },
  };

  

  const { title, subtitle, fields } = formConfig[type] || formConfig["telefonia"];

  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    }


  const handleSubmit = async (e) => {
    e.preventDefault();
    formData["phone"] = phone
    formData["plan"] = plan1 ? plan1 : plan
        // Verificar se todos os campos estão preenchidos
    for (let field of fields) {
      const fieldValue = formData[field.id] || '';
      if (!fieldValue.trim()) {
        setMissingField(field.label)
        return; 
      }
    }
    setMissingField("none")
    // Definir o assunto do e-mail com base no tipo
    const subject = type === "telefonia" || type === "viaRadio" || type === "portoMaravilha"
      ? `Solicitação de ${type}`
      : formData.subject || title;


    let userIp = "";
    try {
      const ipRes = await fetch("/api/get-ip");
      const data = await ipRes.json();
      userIp = data.ip;
    } catch (error) {
      console.log("Erro ao obter IP:", error);
      userIp = "Não foi possível capturar o IP.";
    }
    
    // Corpo do e-mail formatado
    const body = `
      <h3>${title}</h3>
      ${fields.map(field => {
        const fieldValue = formData[field.id] || "";
        return `<p><strong>${field.label}:</strong> ${fieldValue}</p>`;
      }).join("")}
      <hr />
      <p><strong>IP do solicitante:</strong> ${userIp}</p>
    `;

    // Enviar e-mail
    setLoading(true)
    try {
      const response = await sendEmail(
        formConfig[type].email,
        subject,
        body
      );
      if (response.error) {
        setResponse("error")
      } else {
        setResponse("success")
      }
    } catch (error) {
      setResponse("error")
    }finally{
      setLoading(false)
    }
  };
  return (
    
    <div className="font-sans fixed inset-0 bg-[#9c0004] md:bg-black md:bg-opacity-50 flex items-center justify-center z-[9999]">
      {loading? 
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl p-6 relative overflow-y-auto mx-4 max-h-[90%] flex items-center justify-center">
      {/* Botão de Fechar */}
      <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
        &times;
      </button>
      <div className="w-12 h-12 border-4 border-t-[#9c0004] border-gray-200 rounded-full animate-spin"></div>



    </div>
      : response === "success" ?
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl p-6 relative overflow-y-auto mx-4 max-h-[90%] flex flex-col items-center justify-center">
      {/* Botão de Fechar */}
      <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-3xl md:text-3xl  text-[#9c0004] mb-4">Oba!</h2>
      <p className="text-xl text-center">Sua solicitação foi enviada com sucesso.</p>
      <button className='bg-[#9c0004] rounded-lg w-full h-10 text-white text-md mt-4'
      onClick={onClose}>Fechar</button>

    </div>
      
      :<div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl p-6 relative overflow-y-auto mx-4 max-h-[90%]">
        {/* Botão de Fechar */}
        <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
          &times;
        </button>

        {/* Título do Modal */}
        {/* <h1 className="text-lg text-black mb-2">Predialnet</h1> */}
        <h2 className="text-2xl md:text-3xl  text-[#9c0004] mb-4">{title}</h2>
        <p className="text-sm">{subtitle}</p>
        <p className={missingField == "none" ? "hidden" : 'text-xs text-red-700 mt-2'}>Por favor, preencha o campo a seguir corretamente: {missingField}</p>
        <hr className="border-gray-300 mt-4 mb-6" />

        {/* Formulário */}
        {type=="telefonia" || type=="viaRadio" || type=="portoMaravilha"  ? <form className="space-y-4">
          {/* Campo Seleção de Plano */}
          <div>
            <label htmlFor="nome" className="block mb-1 text-sm font-normal">Nome</label>
            <input
                id="nome"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
          </div>
          {/* Campo Seleção de Plano */}
          <div>
            <label htmlFor="plan" className="block mb-1 text-sm font-normal">Confirme o plano escolhido</label>
            <select
              id="plan"
              defaultValue={plan}
              onChange={(e) => setPlan1(e.target.value)}
              className="w-full border border-gray-300 p-2 h-11 rounded focus:outline-none focus:border-[#9c0004]"
            >
              <option value="">Selecione</option>
              {fields.find(field => field.id === "plan").options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Grupo: Endereço, Número e Complemento */}
          <div className="flex flex-col md:flex-row md:gap-6 gap-4">
          <div className="flex flex-row gap-4">
            <div className="w-full md:flex-1">
              <label htmlFor="address" className="block mb-1 text-sm font-normal">Endereço</label>
              <input
                id="address"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
            <div className="w-2/5 md:w-1/4">
              <label htmlFor="number" className="block mb-1 text-sm font-normal">Número</label>
              <input
                id="number"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
            </div>
            <div className="md:flex-1">
              <label htmlFor="complement" className="block mb-1 text-sm font-normal">Complemento</label>
              <input
                id="complement"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
          </div>

          {/* Grupo: Bairro e CEP */}
          <div className="flex flex-row md:gap-6 gap-4">
            <div className="w-full md:flex-1">
              <label htmlFor="neighborhood" className="block mb-1 text-sm font-normal">Bairro</label>
              <input
                id="neighborhood"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
            <div className="w-2/3 md:w-1/4">
              <label htmlFor="cep" className="block mb-1 text-sm font-normal">CEP</label>
              <input
                id="cep"
                type="text"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
          </div>

          {/* Grupo: Telefone e E-mail */}
          <div className="flex flex-row md:gap-6 gap-4">
          <div className="w-full md:flex-1">
            <label htmlFor="email" className="block mb-1 text-sm font-normal">E-mail</label>
              <input
                id="email"
                type="email"
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
            <div className="w-2/3 md:w-1/4">
              <label htmlFor="phone" className="block mb-1 text-sm font-normal">Telefone</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
              />
            </div>
            
            
            
          </div>

          {/* Botão de Enviar */}
          <button
            onClick={e => handleSubmit(e)}
            className="w-full bg-[#9c0004] text-white py-3 rounded mt-6 hover:bg-[#7b0003] transition"
          >
            Enviar
          </button>
        </form>


        :
        
        
        <form className="space-y-4">
        

        {/* Grupo: Informações */}
        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
        <div className="flex flex-row gap-4">
                <div className=" ">
                  <label htmlFor={formConfig[type].fields[0].htmlFor} className="block mb-1 text-sm font-normal">{formConfig[type].fields[0].label}</label>
                  <input
                    id={formConfig[type].fields[0].id}
                    type={formConfig[type].fields[0].type}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
                    onChange={handleInputChange}
                  />
                </div>
                <div className=" ">
                  <label htmlFor={formConfig[type].fields[1].htmlFor} className="block mb-1 text-sm font-normal">{formConfig[type].fields[1].label}</label>
                  <input
                    id={formConfig[type].fields[1].id}
                    onChange={handleInputChange}
                    type={formConfig[type].fields[0].type}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
                  />
                </div>
          </div>
          <div className="md:w-2/5">
          <label htmlFor={formConfig[type].fields[2].htmlFor} className="block mb-1 text-sm font-normal">{formConfig[type].fields[2].label}</label>
            <input
              id={formConfig[type].fields[2].id}
              onChange={handleInputChange}
              type={formConfig[type].fields[0].type}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
            />
          </div>
        </div>

        {/* SELECT */}
        <div>
            <label htmlFor={formConfig[type].fields[3].htmlFor} className="block mb-1 text-sm font-normal">{formConfig[type].fields[3].label}</label>
            <select
              id={formConfig[type].fields[3].id}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 h-11 rounded focus:outline-none focus:border-[#9c0004]"
            >
              <option value="">Selecione</option>
              {formConfig[type].fields[3].options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

        {/* Grupo: Telefone e E-mail */}
        <div className="flex flex-row md:gap-6 gap-4">
          <div className='w-full'>
        <label htmlFor={formConfig[type].fields[4].htmlFor} className="block mb-1 text-sm font-normal">{formConfig[type].fields[4].label}</label>
        <textarea
          id={formConfig[type].fields[4].id}
          onChange={handleInputChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-[#9c0004]"
        ></textarea>
        </div>
          </div>
          
          
      

        {/* Botão de Enviar */}
        <button
          onClick={e => handleSubmit(e)}
          className="w-full bg-[#9c0004] text-white py-3 rounded mt-6 hover:bg-[#7b0003] transition"
        >
          Enviar
        </button>
      </form>}

      </div>}
    </div>
  );
};

export default FormModal;
