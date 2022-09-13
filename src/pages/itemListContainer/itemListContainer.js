import { useEffect , useState } from "react";
import ItemList from "../../components/itemList/itemList";

export const ItemListContainer = () => {
    const [productosLista , setProductosLista] = useState([]);
    const getProducts = async () => {
        fetch('https://fakestoreapi.com/products' ,{
            method : 'GET',
            headers: {'Content-Type': 'application/json',
        },
    })
            .then(res=>res.json())
            .then(data=>setProductosLista(data))
    }
    useEffect(() => {
        getProducts()}, [])

    return (
        <div className="divLista">
            <ItemList  lista={productosLista}/>
        </div>
        );
};

export default ItemListContainer;