import Image from "next/image";
import Logo from "../public/RD-Logo.svg";

function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="">
      
      <Image alt="Rumble Downloader Logo" src={Logo} className='h-10 w-10'/>
      <span className="ml-3 text-xl">Rumble Downloader</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white cursor-pointer" href="" >How To Use?</a>
      <a className="mr-5 hover:text-white cursor-pointer" href="" >What is Rumble</a>
      <a className="mr-5 hover:text-white cursor-pointer" href="" >Contact</a>
    </nav>
   
  </div>
</header>
  )
}

export default Header