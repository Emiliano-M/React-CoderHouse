const Product = 
    [
        {  
            name: "Gorra",
            price: 800,
            img:"https://static.dafiti.com.ar/p/tommy-hilfiger-2813-046993-1-product.jpg",
            id: 1,
        },

        {  
            name: "Remera",
            price: 1000,
            img:"https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg",
            id: 1,
        },

        {  
            name: "Pantalon",
            price: 1200,
            img:"https://www.guantexindustrial.com.ar/2218-large_default/pantalon-nautico-gabardina-blanco-talle-m-2.jpg",
            id: 1,
        },

        {  
            name: "Zapatillas",
            price: 4000,
            img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/05a81c6269db4ac0a5c0a9ae01650845_9366/Zapatillas_Runfalcon_Negro_G28970.jpg",
            id: 1,
        }
    ]

export const getProduct = () =>
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout(() => 
        {
            resolve(Product)
        }, 2000)
    } )

}