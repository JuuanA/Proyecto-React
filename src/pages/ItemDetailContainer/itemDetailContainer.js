import { useState, useEffect } from "react";
import '../ItemDetailContainer/ItemDetailContainerEstilo.css';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore, doc , getDoc } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos , setProductos] = useState();

    const db = getFirestore();

    const getProducts = () => {
    const queryDoc = doc(db, 'items', id);

    getDoc(queryDoc)
        .then((respuesta) => {
            setProductos({ id: respuesta.id , ...respuesta.data() });
        })
        .catch((error) => console.log(error));        
    };

    
    useEffect(() => {
        getProducts();
        }, [id]);
    return (
        <div className="fondoDetalles">
            {productos ? (<ItemDetail productos={productos} />)
            : (<h2 className="detalles">Obteniendo detalles...</h2>
            )}
        </div>
    );
};


    export default ItemDetailContainer