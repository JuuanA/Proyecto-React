import data from '../mockData';
import { useEffect , useState } from "react";
import ItemList from "../itemList/itemList";


const ItemListContainer = () => {

    const [productosLista , setProductosLista] = useState([]);

    useEffect(() => {
        getProducts.then((response) => {
            setProductosLista(response);
        })
        .catch(error => console.log (error))
    }, []);


    const getProducts =  new Promise((resolve , reject) => {
            setTimeout(() => {
            resolve(data);
            }, 2000);
    });

    return (
        <>  
            <ItemList lista={productosLista}/>
        </>
        );
};

export default ItemListContainer;