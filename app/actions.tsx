'use server';

import { z } from 'zod';
import cheerio from 'cheerio';
import axios from 'axios';

export async function getlinks(prevState : any , formData : FormData)
{
    const Base_Api_Url = 'https://rumble.com/embedJS/u3/?request=video&ver=2&v=';
    const schema  = z.object(
        {
            link : z.string()
            .url({message:"Invalid Url , Please Enter a valid url !"})
            .includes("rumble",{message : "Please provide a valid Rumble Link"})
        }
    )
    const result = schema.safeParse({
        link : formData.get('link')
    })
    if (result.success)
    {
        const first_req = await axios.get(result.data.link,
            {
                headers:{
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
                }
            }
        );
        const $ = cheerio.load(first_req.data)
        const myjson = JSON.parse($('[type=application/ld+json]').text())
        const id = myjson[0].embedUrl.split('/')[4]
        console.log(Base_Api_Url +id)
        const res = await fetch(Base_Api_Url+id)
        const link_data = await res.json();
        console.log(link_data)
        return { data: link_data }
    }
    if (result.error)
        return {error: result.error.format().link?._errors[0]}
}