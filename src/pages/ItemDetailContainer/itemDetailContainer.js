import { useState, useEffect } from "react";
import '../ItemDetailContainer/ItemDetailContainerEstilo.css';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productos , setProductos] = useState(null);
    const getProducts = async () => {
        await fetch(`https://fakestoreapi.com/products/${id}`, {})
        .then((res) => res.json())
        .then((producto) => { setProductos(producto); });
};
useEffect(() => {
    getProducts(); }, 
    [id]);
    return (
        <div className="fondoDetalles">
            {productos ? (<ItemDetail productos={productos} />)
            : (<h2 className="detalles">Obteniendo detalles...</h2>
            )}
        </div>
    );
};


    export default ItemDetailContainer