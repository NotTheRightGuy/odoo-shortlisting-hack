"use client"
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';


export default function CrimeHistory() {
    
    // const [crimeHistory, setCrimeHistory] = useState([]);
    const [crimeHistory,setCrimeHistory]=useState<any[]>([])
    // const [docs, setDocs] = useState(documents || []);


    useEffect(() => {
        fetch('/api/crimeCRUD/fetchCrimeHistory')
        .then((res) => res.json())
        .then((data) => {
            setCrimeHistory(data);
            console.log(data);
        })
        .catch((err) => console.log(err));
    }, []);


    const columns  = [
        { field: 'id', headerName: 'C_ID', width: 150 },
        { field: 'C_DATE', headerName: 'C_DATE', width: 150 },
        { field: 'C_DESC', headerName: 'C_DESC', width: 150 },
        { field: 'C_LATITUDE', headerName: 'C_LATITUDE', width: 150 },
        { field: 'C_LONGITUDE', headerName: 'C_LONGITUDE', width: 150 },
        { field: 'C_NAME', headerName: 'C_NAME', width: 150 },
        { field: 'C_STATUS', headerName: 'C_STATUS', width: 150 },
        { field: 'C_TIME', headerName: 'C_TIME', width: 150 },
        { field: 'C_TYPE', headerName: 'C_TYPE', width: 150 }
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
        <div>
            {/* Checking */}
            <DataGrid rows={rows} columns={columns} />

        </div>
    )
}