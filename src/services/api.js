import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export async function createSession(email, password) {
  const response = await api.put('/sessions', {
    email,
    password,
  });
  return response;
}

export async function createUser(email, password) {
  const response = await api.post('/users', {
    email,
    password,
  });
  return response;
}

export async function getTasks(userId) {
  try {
    if (userId) {
      const response = await api.get(`users/${userId}/tasks`);
      return response;
    }
  } catch (e) {
    return e;
  }
}
