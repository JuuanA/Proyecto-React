import Item from '../item/item';

const ItemList = ({lista}) => {
    return (
    <div>
        {lista.map((producto) => (
            <Item
                key={producto.id}
                titulo={producto.titulo}
                precio={producto.precio}
                image={producto.image}
            />
        ))}
        </div>
    ); 
};

export default ItemList;