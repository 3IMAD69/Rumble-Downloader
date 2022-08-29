import React from 'react'
const cheerio = require('cheerio');
function Card({Thumbnail,title,Length,pubDate}) {



    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + ":" : "";
        var mDisplay = m > 0 ? m + ":" : "";
        
        return hDisplay + mDisplay + s; 
    }

    function htmlToText(msg){
       return (cheerio.load(msg).text())
    }
    //new Date('2022-08-25T13:37:18+00:00').toLocaleString()
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a>
        <img class="rounded-t-lg" src={Thumbnail} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{htmlToText(title) + ' ['+secondsToHms(Length) +']'}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{new Date(pubDate).toLocaleString()}</p>
        
    </div>
</div>
  )
}

export default Card