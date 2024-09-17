import './VideoPlayer.css';

import PropTypes from 'prop-types';

export default function VideoPlayer({ videoUrl }) {
    return (
        <div className="video-player">
            <video controls>
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    );
}

VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
};
