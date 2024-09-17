import PropTypes from 'prop-types';
import './UserComments.css';

export default function UserComments({ comments }) {
    return (
        <div className="user-comments">
            <h2>Comentários dos Usuários</h2>
            {comments.map((comment, index) => (
                <div key={index} className="comment-item">
                    <p><strong>{comment.name}</strong> ({comment.date})</p>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </div>
    );
}

UserComments.propTypes = {
    comments: PropTypes.array.isRequired
};