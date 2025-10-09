import { House, Map, CalendarDays, HandCoins } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <div className='fixed bottom-4 left-10 right-10 flex flex-row justify-between items-center px-8 py-6 border-t-2 border-slate-200'>
      <Link to='/'>{<House />}</Link>
      <Link to='/trips'>{<Map />}</Link>
      <Link to='/bookings'>{<CalendarDays />}</Link>
      <Link to='/account'>{<HandCoins />}</Link>
    </div>
  );
}
