const Product = 
[
    {  
        name: "Gorra Tommy Hilfiger Classic",
        price: 800,
        category: "Gorras",
        img:"https://nazarishop.com/8064-home_default/gorra-tommy-hilfiger-classic-negra-.jpg",
        id: 1,
        size: "S/M",
        color:"Negro",
        descrip:"",
        stock: 7
    },

    {  
        name: "Remera Negra Lisa",
        price: 1000,
        category: "Torso",
        img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg",
        id: 2,
        size: "S/M",
        color:"Negro",
        descrip:"",
        stock: 10
        
    },

    {  
        name: "Pantalon Nautico De Gabardina",
        price: 1200,
        category: "Pantalones",
        img:"https://www.guantexindustrial.com.ar/2218-large_default/pantalon-nautico-gabardina-blanco-talle-m-2.jpg",
        id: 3,
        size: "S/M",
        color:"Blanco",
        descrip:"",
        stock: 9
    },

    {  
        name: "Zapatillas Runfalcon Adidas",
        price: 14000,
        category: "Zapatillas",
        img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/05a81c6269db4ac0a5c0a9ae01650845_9366/Zapatillas_Runfalcon_Negro_G28970.jpg",
        id: 4,
        size: "38-43",
        color:"Negro",
        descrip:"",
        stock: 6
    },

    {  
        name: "Campera Nike Full Zip Hoodie",
        price: 8000,
        category: "Torso",
        img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa9a78545/products/NI_BV2648-010/NI_BV2648-010-1.JPG",
        id: 5,
        size: "S/M/X",
        color:"Negro",
        descrip:"",
        stock: 8
    }
]

const Categories =
[
    {id:"Gorras"},
    {id:"Torso"},
    {id:"Pantalones"},
    {id:"Zapatillas"}
]


export const getProduct = (Category) =>
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => 
        {
            Category ? resolve(Product.filter(Product => Product.category === Category)) : resolve(Product)
        }, 500)
    } )

}

export const getOneProduct = (id) =>
{
    id = parseInt(id);
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => 
        {
            id ?resolve(Product.find((Product)=>{
                return Product.id === id;        
            })) 
            : resolve({})
        }, 500)
    } )

}

export const getCategories = () =>
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(Categories)
        }, 500)
    } )

}