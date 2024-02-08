
interface CardProps {
    Thumbnail : string;
    title : string;
    Length : number;
    pubDate : string
  }

function secondsToHms(d:any) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + ":" : "";
    var mDisplay = m > 0 ? m + ":" : "";
    
    return hDisplay + mDisplay + s; 
}

export default function Card({Thumbnail,title,Length,pubDate} : CardProps) {

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a>
        <img className="rounded-t-lg" src={Thumbnail} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title + ' ['+secondsToHms(Length) +']'}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{new Date(pubDate).toLocaleString()}</p>
        
    </div>
</div>
  )
}

