import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn Dancing in 10 days | 30 day plan",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "90Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "How to learn Singing in 30 days | 30 day Challange",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "10Mn views",
    timestamp: "1 month ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
  {
    title: "Jawan: Chaleya | SRK | Nayantara",
    image: "image.jpg",
    logoImage: "logo.jpg",
    author: "T Series",
    views: "100Mn views",
    timestamp: "10 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            logoImage={video.logoImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
