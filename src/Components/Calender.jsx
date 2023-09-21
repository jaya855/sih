import React ,{useState} from 'react'
import CalendarComponent from './CalendarComponent';
function Calendar() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
    <button
      onClick={openCalendar}
      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    >
      Open Calendar
    </button>
    <CalendarComponent isOpen={isCalendarOpen} onClose={closeCalendar} />
  </div>
  )
}

export default Calendar
