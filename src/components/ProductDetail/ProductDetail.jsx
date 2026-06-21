import { useParams } from "react-router-dom";

const ProductDetail = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h2>Book Details: {id}</h2>
        </div>
    );
};

export default ProductDetail;