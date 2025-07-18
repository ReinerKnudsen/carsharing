import useFetch from '../utils/useFetch';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/trips');
  const userId = 1;
  const trips = data?.filter(trip => trip.driver === userId);
  console.log(trips);

  return (
    <section>
      {isPending && <div>Loading</div>}
      {trips &&
        trips.map(trip => {
          return (
            <div key={trip.id}>
              <div>Start: {trip.startdate}</div>
              <div>Ende: {trip.enddate}</div>
            </div>
          );
        })}
    </section>
  );
}
