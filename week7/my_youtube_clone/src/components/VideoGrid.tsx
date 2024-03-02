import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        key: "V001",
        title: "Video 1: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard1_channel.jpg",
        image: "/VideoCard1_main.jpg",
        progress: 30,
    },
    {
        key: "V002",
        title: "Video 2: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard2_channel.jpg",
        image: "/VideoCard2_main.jpg",
        progress: 28,
    },
    {
        key: "V003",
        title: "Video 3: Anime video of Naruto I guess",
        author: "XYZ AnimeList",
        views: "200K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard3_channel.jpg",
        image: "/VideoCard3_main.jpg",
        progress: 80,
    },
    {
        key: "V001",
        title: "Video 1: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard1_channel.jpg",
        image: "/VideoCard1_main.jpg",
        progress: 30,
    },
    {
        key: "V002",
        title: "Video 2: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard2_channel.jpg",
        image: "/VideoCard2_main.jpg",
        progress: 28,
    },
    {
        key: "V003",
        title: "Video 3: Anime video of Naruto I guess",
        author: "XYZ AnimeList",
        views: "200K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard3_channel.jpg",
        image: "/VideoCard3_main.jpg",
        progress: 80,
    },
    {
        key: "V001",
        title: "Video 1: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard1_channel.jpg",
        image: "/VideoCard1_main.jpg",
        progress: 30,
    },
    {
        key: "V002",
        title: "Video 2: Yodha trailer 2024",
        author: "ABC Productions",
        views: "100K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard2_channel.jpg",
        image: "/VideoCard2_main.jpg",
        progress: 28,
    },
    {
        key: "V003",
        title: "Video 3: Anime video of Naruto I guess",
        author: "XYZ AnimeList",
        views: "200K",
        timestamp: "2 days ago",
        thumbnail: "/VideoCard3_channel.jpg",
        image: "/VideoCard3_main.jpg",
        progress: 80,
    },
    
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
        { VIDEOS.map((video => <VideoCard 
            key={video.key}
            title={video.title} 
            author={video.author} 
            views={video.views} 
            timestamp={video.timestamp} 
            thumbnail={video.thumbnail}
            image={video.image}
            progress={video.progress}
        ></VideoCard>))}
    </div>
}