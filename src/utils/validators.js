// src/utils/validators.js
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

export function isRequired(value) {
  return value !== null && value !== undefined && value !== '';
}

export function minLength(value, min) {
  return value.length >= min;
}