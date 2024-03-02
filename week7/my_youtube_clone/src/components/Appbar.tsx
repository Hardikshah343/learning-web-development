import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="text-md flex justify-between p-3">
        <div className="inline-flex items-center p-1">
            <img className="w-1/4 inline-flex items-center p-1 " src="yt_logo_rgb_dark.png" />
        </div>
        <div className="p-1">
            <SearchBar />
        </div>
        <div className="inline-flex items-center p-1">
            Sign in
        </div>
    </div>
}