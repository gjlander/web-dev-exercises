import { useParams } from 'react-router-dom';
const Item = () => {
    const { id } = useParams();
    return <div>Item id: {id}</div>;
};

export default Item;
