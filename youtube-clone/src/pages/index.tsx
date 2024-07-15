import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to learn Dancing in 10 days | 30 day plan"}
        image={"image.jpg"}
        logoImage={"logo.jpg"}
        author={"T Series"}
        views={"90Mn views"}
        timestamp={"10 days ago"}
      ></VideoCard>
    </div>
  );
}
