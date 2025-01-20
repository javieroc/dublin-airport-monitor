import {FC} from 'react';
import {useAverageDelay, useHighestDelay} from '../hooks';

const HighlightsBoard: FC = () => {
  const {data: flight} = useHighestDelay({flightDate: '2025-01-16'});
  const {data: average} = useAverageDelay({flightDate: '2025-01-16'});
  return (
    <>
      <section className="row-span-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{`The average delay for flights today is ${average?.averageDelay} minutes.`}</h3>
      </section>
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3 className="text-lg font-semibold text-gray-900">{`The most delayed flight was the Flight# ${flight?.flight.number} from ${flight?.departure.airport} to ${flight?.arrival.airport} with a delay of ${flight?.departure.delay}min. 😤`}</h3>
      </section>
      <section className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <h3>{`The most delayed flight was the Flight# ${flight?.flight.number} from ${flight?.departure.airport} to ${flight?.arrival.airport} with a delay of ${flight?.departure.delay}min.`}</h3>
      </section>
    </>
  );
};

export {HighlightsBoard};
