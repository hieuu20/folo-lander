import React from 'react';

export function Feature5() {
    return (
        <video
            autoPlay={true}
            playsInline
            loop
            preload="auto"
            controls={false}
            muted={true}
            className="w-full h-auto object-cover scale-110 origin-center"
            >
                <source src={"/feature/5/video.mp4"} type="video/mp4" />
        </video>
    );
}
