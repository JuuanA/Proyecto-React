


export const ItemDetail = ({productos}) => {
    return (
        <div className='itemDetail'> 
            <img className="detail-image" src={productos.image} alt={productos.title} />
            <h2>{productos.title}</h2>
            <div>
                <p>{productos.description}</p>
                <p>{productos.category}</p>
                <p className="precio">Precio ${productos.price} </p>
            </div>
        </div>
    );
};

export default ItemDetail;