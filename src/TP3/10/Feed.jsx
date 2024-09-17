import Post from './Post';
import './Feed.css';

export default function Feed() {
    const posts = [
        {
            id: 1,
            image: '/src/assets/images/post1.jpg',
            title: 'Postagem 1',
            text: 'Texto da postagem 1',
            date: '2023-10-01',
            author: 'Autor 1',
            likes: 10,
            shares: 2,
            comments: ['Comentário 1', 'Comentário 2']
        },
    ];

    return (
        <div className="feed">
            {posts.map(post => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
}