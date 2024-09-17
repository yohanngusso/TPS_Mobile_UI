import './CategoryList.css';
import PropTypes from 'prop-types';

export default function CategoryList({ categories, onSelectCategory }) {
    return (
        <div className="category-list">
            <h2>Categorias</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onSelectCategory(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelectCategory: PropTypes.func.isRequired
};