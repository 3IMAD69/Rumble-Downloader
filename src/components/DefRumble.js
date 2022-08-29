import React from 'react'

function DefRumble({DefRef}) {
  return (
    <div className="relative  pt-16 sm:pt-24 lg:pt-32">
    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
      <div>
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Rubmle</h2>
        <p className="mt-2 text-3xl font-extrabold  tracking-tight sm:text-4xl" ref={DefRef}>
          What is Rumble?
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Rumble is an online video platform headquartered in Longboat Key, Florida. It was founded in October 2013 by Chris Pavlovski, a technology entrepreneur from Canada. 
        The site is popular among American right-leaning users
        </p>
      </div>
      
    </div>
  </div>
  )
}

export default DefRumble