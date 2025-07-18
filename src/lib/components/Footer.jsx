import { House, Car, Map, CalendarDays, HandCoins } from 'lucide-react';

export function Footer() {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex flex-row justify-between items-center px-8 py-4'>
      <House />
      <Map />
      <CalendarDays />
      <HandCoins />
    </div>
  );
}
