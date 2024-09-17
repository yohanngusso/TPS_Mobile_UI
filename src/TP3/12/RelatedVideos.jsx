import PropTypes from 'prop-types';
import './RelatedVideos.css';

export default function RelatedVideos({ videos }) {
    return (
        <div className="related-videos">
            <h2>Vídeos Relacionados</h2>
            <div className="videos-list">
                {videos.map((video, index) => (
                    <div key={index} className="video">
                        <img className="thumbnail" src={video.thumbnail} alt={video.title} />
                        <div className="video-info">
                            <p>{video.title}</p>
                            <p>{video.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

RelatedVideos.propTypes = {
    videos: PropTypes.array.isRequired,
};