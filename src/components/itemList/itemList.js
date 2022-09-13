import Item from '../item/item';
import { Link } from 'react-router-dom';

const ItemList = ({lista}) => {
    return (
    <div className="listContenedor">
        {lista.map((item) => (
                <Link key={item.id}
                to={'/details/'+item.id} style ={{textDecoration:'none'}}> 
            <Item
                titulo={item.title}
                precio={item.price}
                category={item.category}
                description={item.description}
                image={item.image}
                />
            </Link>    
        ))}
        </div>
    ); 
};

export default ItemList;