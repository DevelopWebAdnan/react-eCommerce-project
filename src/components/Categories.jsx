import { NavLink } from "react-router-dom";
import { noDuplicate } from "../utilities/noDuplicate";

const Categories = ({ categories }) => {
    // console.log(categories);
    const uniqueCategories = noDuplicate(categories);
    console.log('uniqueCategories:', uniqueCategories);
    // const {category} = useParams();

    return (
        <div className="mt-4">
            <div role="tablist" className="tabs tabs-lift tabs-lg">
                {
                    uniqueCategories.map(uniqueCategory =>
                        <NavLink
                            key={uniqueCategory}
                            to={`/products/${uniqueCategory}`}
                            role="tab"
                            className={({ isActive }) => `tab ${isActive}? "tab-active" : ""`}
                        >{uniqueCategory}
                        </NavLink>)
                }
                {/* <p>{category}</p> */}
            </div>
        </div>
    );
};

export default Categories;