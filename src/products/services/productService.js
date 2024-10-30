const PRODUCTS = [
  {
    id: 'p1',
    title: 'Xiaomi',
    description: 'The best quality price on the market',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Xiaomi_Poco_F1_on_Wikipedia.jpg/500px-Xiaomi_Poco_F1_on_Wikipedia.jpg',
    price: 250,
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Samsng galaxy',
    description: 'One of the best cell phones in the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Samsung_Foldable_Phones.jpg/400px-Samsung_Foldable_Phones.jpg',
    price: 500,
    creator: 'u2'
  }
]

const getProducts = () => {
  return new Promise((resolve, reject) => {
    return resolve(PRODUCTS)
  })
}

const productService = { getProducts }

export default productService
