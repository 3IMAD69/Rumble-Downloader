
import './App.css';
import axios from 'axios';
import { useRef, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
const cheerio = require('cheerio');

function App() {
  const DefRef = useRef(null)
  const DefScroll = () => DefRef.current.scrollIntoView({behavior:'smooth'}) 

  const ContactRef = useRef(null)
  const ContactScroll = () => ContactRef.current.scrollIntoView({behavior:'smooth'}) 

  const LinksRef = useRef(null)
  const LinksScroll = () => LinksRef.current.scrollIntoView({behavior:'smooth'}) 

  return (
   <div>
    <Header DefScroll={DefScroll} ContactScroll={ContactScroll} />
      {/* <div className="flex items-center justify-center">

        <label>url </label>
        <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <button type='sumbit' onClick={handleSumbit}>Go</button>
        {Data && <p>dhd</p> }
        </div> */}

        <Main DefRef={DefRef} LinksScroll={LinksScroll} LinksRef={LinksRef} />
       <Footer ContactRef={ContactRef}/>
   </div> 
    
  );
}

export default App;
