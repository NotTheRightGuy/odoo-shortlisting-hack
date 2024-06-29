import React from 'react'
import Navbar from '../ui/Navbar'
import Link from 'next/link'

function Section1() {
  return (
    <div className='relative'>
        <Navbar />
        <div className='w-screen h-screen flex flex-col items-start gap-5 justify-center px-20'>
            <h1 className='font-extrabold tracking-tight text-5xl'>
                Empowering Communities,<br />Enhancing <span className='text-blue-700'>Security</span>
            </h1>
            <p className='text-lg text-gray-600 leading-9'>Empowering Communities to <span className='bg-pink-500 px-4 py-1.5 text-slate-50 rounded-xl'>Report</span> Incidents, Enabling <br />
             Switch <span className='bg-blue-600 px-4 py-1.5  text-slate-50 rounded-xl'>Response</span> ,and Facilitating Effective <span className='bg-orange-500 px-4 py-1.5 text-slate-50 rounded-xl'>Resolution</span></p>
             <Link href={'/'} className='text-base bg-slate-900 text-slate-50 rounded-xl px-4 py-3 font-bold'>Report Incident</Link>
        </div>
    </div>
  )
}

export default Section1