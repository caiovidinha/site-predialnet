// Utilitários de validação e sanitização de inputs

/**
 * Sanitiza string removendo tags HTML e scripts
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, ''); // Remove event handlers
};

/**
 * Valida formato de email
 */
export const validateEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sanitized = sanitizeInput(email);
  
  // Verifica tamanho máximo
  if (sanitized.length > 254) return false;
  
  return emailRegex.test(sanitized);
};

/**
 * Valida e sanitiza telefone
 */
export const validatePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  
  const digits = phone.replace(/\D/g, '');
  
  // Telefone brasileiro deve ter 10 ou 11 dígitos
  return digits.length === 10 || digits.length === 11;
};

/**
 * Valida CEP
 */
export const validateCEP = (cep) => {
  if (!cep || typeof cep !== 'string') return false;
  
  const digits = cep.replace(/\D/g, '');
  return digits.length === 8;
};

/**
 * Valida nome (apenas letras, espaços e alguns caracteres especiais)
 */
export const validateName = (name) => {
  if (!name || typeof name !== 'string') return false;
  
  const sanitized = sanitizeInput(name);
  
  // Entre 2 e 100 caracteres, apenas letras, espaços e acentos
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,100}$/;
  return nameRegex.test(sanitized);
};

/**
 * Valida endereço
 */
export const validateAddress = (address) => {
  if (!address || typeof address !== 'string') return false;
  
  const sanitized = sanitizeInput(address);
  
  // Entre 3 e 200 caracteres
  return sanitized.length >= 3 && sanitized.length <= 200;
};

/**
 * Valida número de endereço
 */
export const validateAddressNumber = (number) => {
  if (!number || typeof number !== 'string') return false;
  
  const sanitized = sanitizeInput(number);
  
  // Aceita números, S/N, letras (para blocos/apartamentos)
  const numberRegex = /^[0-9A-Za-z\s/-]{1,10}$/;
  return numberRegex.test(sanitized);
};

/**
 * Sanitiza objeto de formulário completo
 */
export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

/**
 * Valida formulário completo
 */
export const validateFormData = (formData, requiredFields = []) => {
  const errors = [];
  
  // Verifica campos obrigatórios
  for (const field of requiredFields) {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`Campo ${field} é obrigatório`);
    }
  }
  
  // Valida email se presente
  if (formData.email && !validateEmail(formData.email)) {
    errors.push('E-mail inválido');
  }
  
  // Valida telefone se presente
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.push('Telefone inválido');
  }
  
  // Valida CEP se presente
  if (formData.cep && !validateCEP(formData.cep)) {
    errors.push('CEP inválido');
  }
  
  // Valida nome se presente
  if (formData.nome && !validateName(formData.nome)) {
    errors.push('Nome inválido');
  }
  
  // Valida endereço se presente
  if (formData.address && !validateAddress(formData.address)) {
    errors.push('Endereço inválido');
  }
  
  // Valida número se presente
  if (formData.number && !validateAddressNumber(formData.number)) {
    errors.push('Número inválido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
