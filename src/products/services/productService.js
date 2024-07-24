const PRODUCTS = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/420px-Empire_State_Building_%28aerial_view%29.jpg',
        price: 25,
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/420px-Empire_State_Building_%28aerial_view%29.jpg',
        price: 20,
        creator: 'u2'
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) =>{
        return resolve(PRODUCTS)
    })
}

const productService = {getProducts}

export default productService