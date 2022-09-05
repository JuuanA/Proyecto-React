const Item = ({titulo, precio , image}) => {
    return (
        <div>
            <img width={'250px'} src={image} alt={titulo} />
            <h2>{titulo}</h2>
            <h3>{precio}</h3>
        </div>
    );
};



export default Item;