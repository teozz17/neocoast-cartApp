import React, { useState } from "react";
import CategoryButton from "Components/CategoryButton";
import { AiFillFilter } from "react-icons/ai";
import PropTypes from 'prop-types';

import "./index.scss";

const CategoryFilter = ({categories, setActualCategory, actualCategory}) => {

    const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

    return (
        <div className="category-filter">
            <div 
                className="category-filter__icon"
                onClick={() => setCategoriesMenuOpen(true)}
                onMouseEnter={() => setCategoriesMenuOpen(true)}
                onMouseLeave={() => setCategoriesMenuOpen(false)}
                title="Filter by category"
            >
                <AiFillFilter 
                    className="category-filter__selector" 
                /> 
            </div>
            <div 
                className={ categoriesMenuOpen ? "category-filter__container__open" : "category-filter__container"} 
                onMouseEnter={() => setCategoriesMenuOpen(true)}
                onMouseLeave={() => setCategoriesMenuOpen(false)}
            >
                <ul className={ categoriesMenuOpen ? "category-filter__container__list__open" : "category-filter__container__list"}>
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
        </div>
    );
}

CategoryFilter.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    setActualCategory: PropTypes.func.isRequired,
    actualCategory: PropTypes.string.isRequired,
};

export default CategoryFilter;