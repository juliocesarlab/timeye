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

export async function saveDate(userId, taskId, date) {
  try {
    const response = await api.put(`users/${userId}/tasks/${taskId}`, {
      timeSpent: date,
    });
    return response;
  } catch (e) {
    return e;
  }
}

export async function createTask(userId, taskName) {
  try {
    const response = await api.post(`users/${userId}/tasks`, {
      name: taskName,
    });
    return response;
  } catch (e) {
    return e;
  }
}

export async function updateTaskName(taskName, userId, taskId) {
  try {
    const response = await api.put(`users/${userId}/tasks/${taskId}`, {
      name: taskName,
    });
    return response;
  } catch (e) {
    return e;
  }
}

export async function deleteTask(userId, taskId) {
  try {
    const response = await api.delete(`users/${userId}/tasks/${taskId}`);
    return response;
  } catch (e) {
    return e;
  }
}
