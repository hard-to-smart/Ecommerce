const apiKey = import.meta.env.VITE_API_KEY

export const getProducts= 'https://fakestoreapi.com/products'

export const getBlogs = 'https://jsonplaceholder.typicode.com/posts'

export const getFeaturedProducts = 'https://fakestoreapi.com/products?limit=4'

export const getConversionRate = 'https://v6.exchangerate-api.com/v6/' + apiKey + "/latest"