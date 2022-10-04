import './../item/itemEstilo.css'


const Item = ({titulo, precio , image}) => {
    return (
        <div>
            <img height={'250px'}width={'250px'} src={image} alt={titulo} />
            <h2>{titulo}</h2>
            <h3>$ {precio}</h3>
        </div>
    );
};



export default Item;