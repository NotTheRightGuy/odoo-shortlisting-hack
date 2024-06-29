import Map from '@/components/Map'
import LiveFeedIcon from '@/components/ui/LiveFeedIcon'
import LiveIncidentField from '@/components/ui/LiveIncidentField'
import PoliceNavbar from '@/components/ui/PoliceNavbar'
import PoliceSidebar from '@/components/ui/PoliceSidebar'
import React from 'react'

function PoliceDashboard() {
  return (
    <div className='h-screen w-screen flex flex-col items-start justify-start gap-5'>
    <PoliceNavbar />
    <PoliceSidebar />
    <div className='pt-20 pl-24 font-semibold text-3xl'>Dashboard</div>
    <div className='flex md:flex-row flexc items-center justify-between gap-5 w-full h-full overflow-hidden pl-24 pb-8 pr-4'>
        <div className='h-full md:w-[calc(100vw-40em)] w-full overflow-hidden rounded-3xl'>
            <Map />
        </div>
        <div className='w-full px-5 pt-0 pb-5 rounded-xl border border-slate-200 h-full overflow-y-scroll overflow-x-hidden flex-1 flex flex-col items-start justify-start gap-3'>
          <div className='sticky font-semibold text-2xl w-full h-fit py-5 top-0 bg-white'>
            Live Incident Feed
          </div>
            <LiveIncidentField C_SEVERITY='low' />
        </div>
    </div>
    </div>
  )
}
export default PoliceDashboard