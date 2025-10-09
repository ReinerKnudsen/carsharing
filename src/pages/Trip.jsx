import useFetch from '../utils/useFetch';

export default function Trip() {
  const { data: driversData } = useFetch('http://localhost:3000/drivers');
  const { data: tripsData } = useFetch('http://localhost:3000/trips');

  let thisDriver;
  let thisGroup;
  let groupTrips;

  // Only process data when it's loaded
  if (driversData) {
    thisDriver = driversData.find(driver => driver.id == 3);
    thisGroup = thisDriver && thisDriver.group;
  }
  if (tripsData) {
    groupTrips =
      tripsData &&
      tripsData
        .filter(trip => trip.group === thisGroup)
        .sort((a, b) => {
          return a.endkm < b.endkm ? 1 : -1;
        });
  }
  return (
    <section>
      <h1 className='pl-2 py-2 w-full bg-slate-200'>Fahrten</h1>
      {(!driversData || !tripsData) && <div>Loading ...</div>}
      {driversData && tripsData && (
        <div className='w-full pl-4 pt-4 text-lg overflow-y-scroll'>
          <table className='table-fixed w-full '>
            <thead>
              <tr>
                <th className='cell-left font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                  Start
                </th>
                <th className='cell-left  font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                  Ende
                </th>
                <th className='cell-left font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                  Fahrer
                </th>
                <th className='cell-center  font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                  {' '}
                  Kilometer
                </th>
                <th className='cell-center  font-semibold text-gray-700 border-b-2 border-gray-200 pb-2'>
                  {' '}
                  Preis
                </th>
              </tr>
            </thead>
            <tbody>
              {groupTrips.map(trip => (
                <tr
                  key={trip.id}
                  className='even:bg-slate-200 even:rounded-lg hover:bg-blue-50 hover:font-semibold transition-colors'>
                  <td className='py-3 px-2 cell-left'>
                    {new Date(trip.startdate).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </td>
                  <td className='py-3 px-2 cell-left'>
                    {new Date(trip.enddate).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </td>
                  <td className='py-3 px-2 cell-left'>
                    {driversData.find(driver => driver.id == trip.driver)?.firstname}
                  </td>
                  <td className='py-3 px-2 cell-center'>{trip.endkm - trip.startkm} km</td>
                  <td className='py-3 px-2 cell-center'>{trip.amount} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
