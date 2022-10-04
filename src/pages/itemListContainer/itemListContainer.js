import { useEffect , useState } from "react";
import ItemList from "../../components/itemList/itemList";
import {  useParams } from "react-router-dom";
import { getFirestore, getDocs, collection , query, where} from 'firebase/firestore';

export const ItemListContainer = () => {
    const [productosLista , setProductosLista] = useState([]);
    const {categoryName} = useParams();

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'items');
        const querySnapshot = categoryName
            ? query(queryBase, where('categoryId', '==', categoryName))
            : queryBase ;

            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() };
                });
                setProductosLista(data);
                });
            };

            useEffect(() => {
                getProducts();
            }, [categoryName]);
            

    return (
        <div className="divLista">
            <ItemList  lista={productosLista}/>
        </div>
        );
        };
export default ItemListContainer;