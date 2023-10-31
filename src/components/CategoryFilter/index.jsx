import React, { useState } from "react";
import CategoryButton from "Components/CategoryButton";
import { AiFillFilter } from "react-icons/ai";

import "./index.scss";

const CategoryFilter = ({categories, setActualCategory, actualCategory}) => {

    const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

    return (
        <div className="category-filter">
            <div className="category-filter__icon" onClick={() => {
                        setCategoriesMenuOpen(!categoriesMenuOpen);
                    }} >
                <AiFillFilter 
                    className="category-filter__selector" 
                /> 
            </div>
            <ul className={ categoriesMenuOpen ? "category-filter__list__open" : "category-filter__list"}>
                {categories.map((category) => (
                    <li key={category}>
                        <CategoryButton
                            isDisabled={actualCategory === category}
                            key={category}
                            name={category}
                            onCLick={() => setActualCategory(category)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryFilter;