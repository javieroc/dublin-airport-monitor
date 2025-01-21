import {FC} from 'react';
import {useAverageDelay, useHighestDelay} from '../hooks';

const HighlightsBoard: FC = () => {
  const {data: flight} = useHighestDelay({flightDate: '2025-01-16'});
  const {data: average} = useAverageDelay({flightDate: '2025-01-16'});
  return (
    <>
      <section className="row-span-2 flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">{`The average delay for flights today is ${average?.averageDelay} minutes.`}</h3>
      </section>
      <section className="relative flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">{`The most delayed flight was the Flight# ${flight?.flight.number} from ${flight?.departure.airport} to ${flight?.arrival.airport} with a delay of ${flight?.departure.delay}min. 😤`}</h3>
      </section>
      <section className="flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">Coming Soon</h3>
      </section>
    </>
  );
};

export {HighlightsBoard};
