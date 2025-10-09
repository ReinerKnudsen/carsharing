import useFetch from '../utils/useFetch';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/trips');
  const userId = 1;
  const trips = data?.filter(trip => trip.driver === userId);
  console.log(trips);

  return (
    <section>
      <h1 className='py-2 w-full bg-slate-200'>Deine Fahrten</h1>
      {isPending && <div>Loading</div>}
      {trips &&
        trips.map(trip => {
          return (
            <div
              key={trip.id}
              className='flex flex-row items-center justify-start gap-4 my-2 mx-2'>
              <div>Start: {trip.startdate}</div>
              <div>Ende: {trip.enddate}</div>
            </div>
          );
        })}
    </section>
  );
}
