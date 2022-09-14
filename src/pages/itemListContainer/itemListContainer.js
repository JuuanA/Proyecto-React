import { useEffect , useState } from "react";
import ItemList from "../../components/itemList/itemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [productosLista , setProductosLista] = useState([]);
    const {categoryName} = useParams();

    const getProducts = async () => {
        let url;
        if (categoryName) {
            url = `https://fakestoreapi.com/products/category/${categoryName}`;
        }else {
            url = 'https://fakestoreapi.com/products';
        }
        fetch(url ,{
            method : 'GET',
            headers: {'Content-Type': 'application/json',
        },
    })
            .then(res=>res.json())
            .then(data=>setProductosLista(data))
    }
    useEffect(() => {
        getProducts()}, [categoryName])

    return (
        <div className="divLista">
            <ItemList  lista={productosLista}/>
        </div>
        );
};

export default ItemListContainer;