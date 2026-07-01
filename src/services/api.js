// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function request(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const api = {
  // Records
  getRecords: () => request('/records'),
  getRecord: (id) => request(`/records/${id}`),
  createRecord: (data) =>
    request('/records', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  updateRecord: (id, data) =>
    request(`/records/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  deleteRecord: (id) =>
    request(`/records/${id}`, {
      method: 'DELETE',
    }),
};