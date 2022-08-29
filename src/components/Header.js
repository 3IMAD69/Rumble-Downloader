import React from 'react'
import Logo from '../RD-Logo.svg'

function Header({DefScroll,ContactScroll}) {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      
      <img src={Logo} className='h-10 w-10'/>
      <span class="ml-3 text-xl">Rumble Downloader</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white cursor-pointer">How To Use?</a>
      <a class="mr-5 hover:text-white cursor-pointer" onClick={DefScroll}>What is Rumble</a>
      <a class="mr-5 hover:text-white cursor-pointer" onClick={ContactScroll}>Contact</a>
    </nav>
   
  </div>
</header>
  )
}

export default Header