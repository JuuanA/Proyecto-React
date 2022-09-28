import { useEffect , useState } from "react";
import ItemList from "../../components/itemList/itemList";
import {  useParams } from "react-router-dom";
import { getFirestore, getDocs, collection , query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
    const [productosLista , setProductosLista] = useState([]);
    const {categoryName} = useParams();

    const getProducts = () => {
        const db = getFirestore();

        const querySnap =  collection(db, 'items');

        if (categoryName) {
            const queryFiltro = query (querySnap, where("categoryId", '==', categoryName)
            );
            getDocs(queryFiltro).then((respuesta) => {
            const data = respuesta.docs.map((product) => {
                console.log(product.data());
                return { id: product.id, ...product.data() };
            });
            setProductosLista(data);
        });
        }
        else {
        getDocs(querySnap).then((respuesta) => {
            const data = respuesta.docs.map((product) => {
                console.log(product.data());
                return { id: product.id, ...product.data() };
            });
            setProductosLista(data);
        });
    }
    };

    useEffect(() => {
        getProducts()}, [categoryName])

    return (
        <div className="divLista">
            <ItemList  lista={productosLista}/>
        </div>
        );
    };
export default ItemListContainer;