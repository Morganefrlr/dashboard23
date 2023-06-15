
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const Calendar = () => {
    return (
        <div className="mainCalendar">
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateCalendar />
            </LocalizationProvider>
        </div>
            
       
        
    );
};

export default Calendar;

