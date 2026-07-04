import { Link } from "react-router-dom";
import { noDuplicate } from "../utilities/noDuplicate";

const Categories = ({ categories }) => {
    console.log(categories);
    const uniqueCategories = noDuplicate(categories);
    console.log('uniqueCategories:', uniqueCategories);
    // const {category} = useParams();
    
    return (
        <div>
            <div role="tablist" className="tabs tabs-lift tabs-lg">
                {
                    uniqueCategories.map(uniqueCategory =>
                        <Link key={uniqueCategory} to={`/products/${uniqueCategory}`} role="tab" className="tab"
                        >{uniqueCategory}
                        </Link>)
                }
                {/* <p>{category}</p> */}
            </div>
        </div>
    );
};

export default Categories;