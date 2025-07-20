import { House, Map, CalendarDays, HandCoins } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex flex-row justify-between items-center px-8 py-4'>
      <Link to='/'>{<House />}</Link>
      <Link to='/trips'>{<Map />}</Link>
      <Link to='/bookings'>{<CalendarDays />}</Link>
      <Link to='/account'>{<HandCoins />}</Link>
    </div>
  );
}
