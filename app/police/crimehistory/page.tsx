"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';


export default function CrimeHistory() {
    
    const [crimeHistory,setCrimeHistory]=useState<any[]>([])
    const [temp, setTemp] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/crimeCRUD/fetchCrimeHistory')
        .then((res) => res.json())
        .then((data) => {
            setCrimeHistory(data.data);
            console.log(data);
            console.log(data.data)
        })
        .catch((err) => console.log(err));

        for(let i=0;i<crimeHistory.length;i++){
            setTemp([...temp,crimeHistory[i]])
        }
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'C_DATE', headerName: 'Date', width: 150 },
        { field: 'C_DESC', headerName: 'Description', width: 150 },
        { field: 'C_LATITUDE', headerName: 'Latitude', width: 150 },
        { field: 'C_LONGITUDE', headerName: 'Longitude', width: 150 },
        { field: 'C_NAME', headerName: 'Name', width: 150 },
        { field: 'C_STATUS', headerName: 'Status', width: 150 },
        { field: 'C_TIME', headerName: 'Time', width: 150 },
        { field: 'C_TYPE', headerName: 'Type', width: 150 },
      ];

    const rows =
    crimeHistory.map((crime)=>{
            return(
                {
                    id:crime.C_ID,
                    C_DATE:crime.C_DATE,
                    C_DESC:crime.C_DESC,
                    C_LATITUDE:crime.C_LATITUDE,
                    C_LONGITUDE:crime.C_LONGITUDE,
                    C_NAME:crime.C_NAME,
                    C_STATUS:crime.C_STATUS,
                    C_TIME:crime.C_TIME,
                    C_TYPE:crime.C_TYPE
                }
            )
        })
    return(
        <div className=''>
            <Navbar/>
            
            {/* "Checking" */}
            <div className='p-10 mt-20'>

                <DataGrid rows={rows} columns={columns} />
            </div>

        </div>
    )
}