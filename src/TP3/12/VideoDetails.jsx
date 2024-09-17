import MainMenu from './MainMenu';
import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';
import RelatedVideos from './RelatedVideos';
import UserComments from './UserComments';
import './VideoDetails.css';

const video = {
    title: "Título do Vídeo",
    author: "Autor do Vídeo",
    description: "Descrição do vídeo.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    relatedVideos: [
        { title: "Vídeo Relacionado 1", author: "Autor 1", thumbnail: "related1.jpg" },
        { title: "Vídeo Relacionado 2", author: "Autor 2", thumbnail: "related2.jpg" }
    ],
    comments: [
        { name: "Usuário 1", date: "2023-01-01", comment: "Ótimo vídeo!" },
        { name: "Usuário 2", date: "2023-01-02", comment: "Muito informativo." }
    ]
};

export default function VideoDetails() {
    return (
        <div className="video-details">
            <MainMenu />
            <div className="video-content">
                <VideoPlayer videoUrl={video.videoUrl} />
                <VideoInfo 
                    title={video.title} 
                    author={video.author} 
                    description={video.description} 
                />
                <div className="ad-section">Propaganda</div>
                <RelatedVideos videos={video.relatedVideos} />
                <UserComments comments={video.comments} />
            </div>
        </div>
    );
}