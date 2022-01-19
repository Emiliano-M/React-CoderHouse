import { initializeApp } from "firebase/app"
import { getDocs, getDoc, doc, collection, query, where, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const getProducts = (key, operator, value) => {

  return new Promise ((resolve, reject) => {
    const collectionQuery = key && operator && value ?
    query(collection(db, "items"), where(key, operator, value)) :
    collection(db, "items")

    getDocs(collectionQuery).then((QuerySnapshot) => {
      const products = QuerySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      resolve(products)
    }).catch(error => {
      reject("Error obteniendo productos: ", error)
    })
  })

}

export const getProduct = (item) => {

  return new Promise ((resolve, reject) => {

    getDoc(doc(db, "items", item)).then((QuerySnapshot) => {
      const product = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
      resolve(product)
    }).catch((error) => {
        reject("Error obteniendo el producto: ", error)
    })

  })

}

export const getCategories = () => {
  return new Promise ((resolve, reject) => {
    
    getDocs(collection(db, "categories")).then((QuerySnapshot) => {
      const categories = QuerySnapshot.docs.map(doc => {
        return{ id: doc.id, ...doc.data()}
    })
    resolve(categories)
    }).catch(error => {
      reject("Error obteniendo categorias: ", error)
    })

  })
}

export const getTickets = () => {
  return new Promise ((resolve, reject) => {
    
    getDocs(collection(db, "forms")).then((querySnapshot) => {
      const tickets = querySnapshot.docs.map(doc => {
        return{ id: doc.id, ...doc.data()}
    })

    resolve(tickets)

    }).catch(error => {
      reject("Error obteniendo tickets: ", error)
    })

  })
}