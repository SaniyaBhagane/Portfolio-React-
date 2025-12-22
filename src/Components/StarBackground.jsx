import { useEffect, useState } from "react";


export const StarBackground = () => {

    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();
    }, []);
    
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 9000);

        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
            id: i,
            size: Math.random() * 2 + 0.8,   // smaller range
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.4 + 0.4, // softer
            blur: Math.random() * 0.6,          // depth
            animationDuration: Math.random() * 5 + 2,
            });

        }
        setStars(newStars);
    };

    

            

    return (
        <div className="fixed inset-0  overflow-hidden pointer-events-none z-0"> 
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle"  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    filter: `blur(${star.blur}px)`,
                    animationDuration: `${star.animationDuration}s`,
                    }}/>
            ))}
        </div>                    
    
    );
} ;      