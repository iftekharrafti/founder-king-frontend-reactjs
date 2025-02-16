import React from 'react';

const VideoPlayer = ({ videoId }) => {
    return (
        <div className="relative aspect-video bg-white rounded-lg overflow-hidden">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Promotional Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
            />
        </div>
    );
};

export default VideoPlayer;