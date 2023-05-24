import React, { useState } from 'react'
import axios from 'axios';
import Card from './Card';
import ButtonsGroup from './ButtonsGroup';
import { Triangle } from  'react-loader-spinner'
import DefRumble from './DefRumble';
import gif from '../tutorial.gif'
import BigLogo from '../BigLogo.svg'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const cheerio = require('cheerio');





function Main({DefRef,LinksScroll,LinksRef}) {
    const [url,setUrl] = useState('') ;
    const [Data,setData] = useState(null);
    const [Links,setLinks] = useState(null);
    const [isLoading,setLoading] = useState(false);
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    const BypassCorsUrl = 'https://corsproxy.io/?' ;
    const ApiUrl = 'https://rumble.com/embedJS/u3/?request=video&ver=2&v=' ;

    
    
    const handleSumbit = () => {
      setLoading(true)
      LinksScroll()
        //should check url if valid 
        console.log(BypassCorsUrl+url)
        axios(BypassCorsUrl+url)
        .then(response=>response.data)
        .then(data => {
          //console.log(data)
          const $ = cheerio.load(data)
          const myjson = JSON.parse($('[type=application/ld+json]').text())
          const id = myjson[0].embedUrl.split('/')[4]
           axios(ApiUrl+id)
            .then(response=>response.data)
            .then(data=>{
                //  console.log(data.i)
                  setData(data)  
                 setLoading(false)
                  setLinks(data.ua.mp4)
                  //console.log(data.ua.mp4) 
                
                  
            })
        })
    }


  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
           
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">A better way to</span>
              <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-green-400 sm:pb-5">
                download rumble videos
              </span>
            </h1>
            <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Rumble Downloader is a free &amp; fast &amp; online tool to download videos from rumble
            </p>
            <div className="mt-2 sm:mt-12">
              <div  className="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Link
                    </label>
                    <input
                      id="link"
                      type="text"
                      placeholder="Paste your Link here"
                      value={url} onChange={(e)=>setUrl(e.target.value)}
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      
                      onClick={handleSumbit}
                      className="inline-flex items-center justify-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-green-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline mr-2 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                         Download
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                     If download doesn't work You can also try{' '}
                     <a onClick={openModal} className="font-medium text-white cursor-pointer">
                      THIS{' '}
                      </a>
                    and select DOWNLOAD.
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Modal */} 
                <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Tutorial
                        </Dialog.Title>
                        <div className="mt-2">
                          <img src={gif} />
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          {/* Modal-Fin */}    
    
        <div className="mt-12 -mb-16 lg:m-0 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
            <img
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={BigLogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div ref={LinksRef} className='mt-20 lg:mt-0 md:mt-50'>

    
    {isLoading ? <div   className='flex items-center justify-center rotate-90'>
      <Triangle
            
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
    </div>
          :
          Data && <div className='flex flex-col gap-5 md:flex-row justify-center items-center'> 
                <Card Thumbnail={Data.i} title={Data.title} Length={Data.duration} pubDate={Data.pubDate} />
               <div className='lg:ml-12'>
                  <div className='flex flex-wrap justify-center gap-5'> 
                        {
                            
                            Object.keys(Links).map((key)=>(
                                //key=quality 
                                //Links[key].meta.size
                                //Links[key].url
                                <ButtonsGroup quality={key} size={Links[key].meta.size} DownLoadLink={Links[key].url}/>
                            ))
                        }
                    </div>

                </div> 
                
                
                
             </div> 
          
          }

    </div>    
    <DefRumble DefRef={DefRef}/>
  </div>
  )
}

export default Main