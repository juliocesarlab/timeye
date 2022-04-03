import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
})

export async function createSession(email, password) {
    const response = await api.put('/sessions', {
      email,
      password
    })
    return response.data
}