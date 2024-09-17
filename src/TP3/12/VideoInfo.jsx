import './VideoInfo.css';

import PropTypes from 'prop-types';

export default function VideoInfo({ title, author, description }) {
    return (
        <div className="video-info">
            <h1>{title}</h1>
            <p className="author">Por {author}</p>
            <div className="video-menu">
                <button>Curtir</button>
                <button>Compartilhar</button>
                <button>Salvar</button>
                <button>Denunciar</button>
            </div>
            <p className="description">{description}</p>
        </div>
    );
}

VideoInfo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
