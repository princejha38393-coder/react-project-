import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

function Mycanander() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DateCalendar 
                         />
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    )
}

export default Mycanander