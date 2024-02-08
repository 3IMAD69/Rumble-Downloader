'use client';

import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  LinksScroll : () => void | undefined;
}

function Submit_button( {setLoading ,LinksScroll} : SubmitButtonProps) {
    const { pending } = useFormStatus()

    useEffect(()=>{
      setLoading(pending)
    },[pending])
    
  return (
    <button
    type="submit"
    onClick={LinksScroll}
    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-green-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 "
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline mr-2 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
         Download
    </button>
  )
}

export default Submit_button