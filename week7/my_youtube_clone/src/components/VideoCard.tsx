export function VideoCard(props: any) {

    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl"  src={props.image} />    
        <progress className="progress w-full bg-gray-400" value={props.progress} max="100"></progress>    
        <div className="flex">
            <div className="p-2">
                <img className="rounded-full w-15 h-15" src={props.thumbnail} />                
            </div>
            <div className="p-2">
                <div className="text-lg">{props.title}</div>
                <div className="text-gray-400 text-base">{props.author}</div>
                <div className="text-gray-500 text-sm">{props.views} | {props.timestamp}</div>
            </div>
        </div>
    </div>
}