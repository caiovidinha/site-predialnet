/**
 * Função helper para enviar eventos ao Google Tag Manager dataLayer
 * @param {string} event - Nome do evento
 * @param {object} params - Parâmetros adicionais do evento
 */
export const trackEvent = (event, params = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...params,
    });
  }
};

/**
 * Eventos pré-configurados para o site
 */
export const events = {
  // Visualização de planos
  planView: (planName, planValue, location = 'plans_section') => 
    trackEvent('plan_view', {
      plan_name: planName,
      plan_value: planValue,
      location,
    }),

  // Clique em assinar plano
  planClick: (planName, planValue, method = 'site', location = 'plans_section') => 
    trackEvent('plan_click', {
      plan_name: planName,
      plan_value: planValue,
      method, // 'site' ou 'whatsapp'
      location,
    }),

  // Formulário
  formOpen: (formType, planName = null) => 
    trackEvent('form_open', {
      form_type: formType,
      plan_name: planName,
    }),

  formSubmit: (formType, planName = null, success = true) => 
    trackEvent('form_submit', {
      form_type: formType,
      plan_name: planName,
      success,
    }),

  // Upgrade de plano
  upgradeClick: (planName, planValue, device) => 
    trackEvent('upgrade_click', {
      plan_name: planName,
      plan_value: planValue,
      device,
    }),

  // WhatsApp
  whatsappClick: (location, planName = null) => 
    trackEvent('whatsapp_click', {
      location,
      plan_name: planName,
    }),

  // Planos especiais
  specialPlanView: (planType) => 
    trackEvent('special_plan_view', {
      plan_type: planType, // 'viaRadio' ou 'portoMaravilha'
    }),

  specialPlanClick: (planType, planName, method = 'site') => 
    trackEvent('special_plan_click', {
      plan_type: planType,
      plan_name: planName,
      method,
    }),

  // Info modal Wi-Fi 6
  infoModalOpen: (topic = 'wifi6') => 
    trackEvent('info_modal_open', {
      topic,
    }),

  // Navegação
  navigationClick: (linkText, destination) => 
    trackEvent('navigation_click', {
      link_text: linkText,
      destination,
    }),

  // Atendimento/Suporte
  supportClick: (type) => 
    trackEvent('support_click', {
      support_type: type,
    }),

  // Área do cliente
  customerAreaClick: (action) => 
    trackEvent('customer_area_click', {
      action, // 'speed_test', 'second_bill', 'support', 'account'
    }),
};
