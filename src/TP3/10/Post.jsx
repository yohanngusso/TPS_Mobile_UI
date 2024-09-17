import PropTypes from 'prop-types';
import './Post.css';

export default function Post({ image, title, text, date, author, likes, shares, comments }) {
    return (
        <div className="post">
            <img src={image} alt={title} className="post-image" />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{text}</p>
                <p><small>{date} por {author}</small></p>
                <p>Curtidas: {likes} | Compartilhamentos: {shares}</p>
                <div className="post-comments">
                    {comments.map((comment, index) => (
                        <p key={index}>{comment}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};