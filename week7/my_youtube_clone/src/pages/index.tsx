import {AppBar} from "@/components/Appbar"
import {VideoGrid} from "@/components/VideoGrid"

export default function Home() {
  return (
    <div className="grid">
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
  );
}
