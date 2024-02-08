"use client";

import { Triangle } from  'react-loader-spinner'
import gif from '../public/tutorial.gif'
import BigLogo from '../public/BigLogo.svg'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { useFormState } from "react-dom";
import { getlinks } from '@/app/actions';
import Submit_button from './Submit_button';
import { LinksType, Mp42 } from './types';
import Card from './Card';
import ButtonsGroup from './ButtonsGroup';


export default function Rumbled() {
    const [state, formAction] = useFormState(getlinks, null);
    const [Data,setData] = useState<LinksType | null>(null);
    const [isLoading,setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const LinksRef = useRef<HTMLParagraphElement | null>(null)
    
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    const LinksScroll = () =>  LinksRef.current?.scrollIntoView({behavior:'smooth'}) 
    useEffect(()=>
    {
      if (state?.data)
        setData(state.data)
    },[state])

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
            <form action={formAction} className="mt-2 sm:mt-12">
              {
                state?.error &&
                <div className=" mb-4 text-sm text-red-700 rounded-lg" role="alert">
                  <span className="font-medium">{state?.error}</span>
                </div>

              }
              <div  className="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label  htmlFor="link" className="sr-only">
                      Link
                    </label>
                    <input
                      id="link"
                      type="text"
                      name="link"
                      placeholder="Paste your Link here"
                      className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Submit_button setLoading={setLoading} LinksScroll={LinksScroll}/>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                     If download doesn't work You can also try{' '}
                     <a href="" onClick={openModal} className="font-medium text-white cursor-pointer">
                      THIS{' '}
                      </a>
                    and select DOWNLOAD.
                  .
                </p>
              </div>
            </form>
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
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Tutorial
                        </Dialog.Title>
                        <div className="mt-2">
                          <Image src={gif} alt="Tutorial"/>
                        </div>

                        <div className="mt-4 flex justify-end">
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
    
        <div className="hidden md:block mt-12 -mb-16 lg:m-0 lg:relative">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <Image
              className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={BigLogo}
              alt="Big Ruble Downloader Logo"
            />
          </div>
        </div>
      </div>
    </div>


    <div ref={LinksRef} className='flex items-center justify-center mx-10 mt-20'>
      {isLoading ? 
      <div   className='flex items-center justify-center rotate-90'>
        <Triangle
              
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              // wrapperClassName=""
              visible={true}
            />
      </div>
            :
            Data && <div className='flex flex-col gap-5 md:flex-row justify-center items-center'> 
                  <Card Thumbnail={
                    Data.t.some(item => item.w === 1280) ? 
                    (Data.t.find(item => item.w === 1280)?.i || Data.i) : 
                    Data.i
                } 
                  title={Data.title} Length={Data.duration} pubDate={Data.pubDate} />
                <div className='lg:ml-12'>
                    <div className='flex flex-wrap justify-center gap-5'> 
                          {
                              Object.keys(Data.ua.mp4).map((key)=>(
                                  <ButtonsGroup quality={key} size={Data.ua.mp4[key as keyof Mp42 ].meta.size} DownLoadLink={Data.ua.mp4[key as keyof Mp42].url}/>
                              ))
                          }
                      </div>

                  </div> 
              </div> 
            }
    </div>

    </div>    
//   </div>
  )
}
