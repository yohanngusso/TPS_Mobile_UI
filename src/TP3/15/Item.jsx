import './Item.css';

import PropTypes from 'prop-types';
import './Item.css';

export default function Item({ item, onPreference }) {
    return (
        <div className="item">
            <h2>{item}</h2>
            <div className="buttons">
                <button onClick={() => onPreference(item, 'like')}>Gosto</button>
                <button onClick={() => onPreference(item, 'dislike')}>Não Gosto</button>
            </div>
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.string.isRequired,
    onPreference: PropTypes.func.isRequired
};
