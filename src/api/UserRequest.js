import axios from  'axios'


const API = axios.create({baseURL: "http://localhost:5000"}) 

export const getUser = (userId) => API.get(`/user/${userId}`)
export const getPortfolios =  () => API.get('/portfolio/portfolios')
export const updateUser = (id, formData) => API.put(`/user/${id}`, formData)
export const updateHouse = (id, houseData) => API.put(`/house/${id}`, houseData)
export const getPosts =  () => API.get('/post/album')