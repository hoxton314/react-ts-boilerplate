import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { API_URL, STAGE } from '../constants/envs'

export const axiosInstanceUnauthenticated = axios.create({
  baseURL: API_URL,
})

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
axiosInstance.interceptors.response.use(undefined, async (error: any) => {
  console.error(error)
  if (error.response && error.response.status === 401 && process.env.STAGE === 'prod') {
    // redirect to login page
  }

  return Promise.reject(error)
})

if (STAGE === 'local') {
  // Mocking axios requests for development
  const mockAdapter = new MockAdapter(axiosInstance)

  mockAdapter.onGet('/auth').reply(200)
}
