import {FC} from 'react';
import {useAverageDelay, useHighestDelay, useFilters} from '../hooks';

const HighlightsBoard: FC = () => {
  const {formattedTimetableDate, selectedAirline} = useFilters();
  const {data: flight} = useHighestDelay(
      {flightDate: formattedTimetableDate, airline: selectedAirline},
  );
  const {data: average} = useAverageDelay(
      {flightDate: formattedTimetableDate, airline: selectedAirline},
  );
  return (
    <>
      <section className="row-span-2 flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">{`The average delay for flights today is ${average?.averageDelay} minutes.`}</h3>
      </section>
      <section className="relative flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">{`The most delayed flight was the Flight# ${flight?.flight?.number} from ${flight?.departure?.iataCode} to ${flight?.arrival?.iataCode} with a delay of ${flight?.departure?.delay}min. 😤`}</h3>
      </section>
      <section className="flex flex-col items-center justify-center rounded-lg border bg-gray-50 p-4 pr-8 text-xl">
        <h3 className="text-lg font-semibold text-gray-900">Coming Soon</h3>
      </section>
    </>
  );
};

export {HighlightsBoard};
