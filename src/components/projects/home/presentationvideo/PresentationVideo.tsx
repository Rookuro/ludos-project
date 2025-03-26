import './style.css'

export default function PresentationVideo() {
    return(
    <>
        <div className="presentationvideo-container">
            <div className="presentationvideo-title">
                <h1>Présentation de notre plugin</h1>
            </div>
            <div className="presentationvideo-video-youtube">
                <iframe
                width="1112"
                height="592"
                src="https://www.youtube.com/watch?v=c1W7Pddei3U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
        </div>
    </>
    );
}