import {FC} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {useFilters} from '../hooks';

const Navbar: FC = () => {
  const {
    fancyTimetableDate,
    previousDate,
    nextDate,
    selectedAirline,
    setSelectedAirline,
    airlineOptions,
  } = useFilters();

  return (
    <nav className="flex flex-col items-center gap-2 border-b border-gray-200 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800">RyanFail</h1>
      <menu className="flex content-center gap-2">
        <button onClick={previousDate} className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400" aria-label="Left">
          <FaArrowLeft className="size-4 text-gray-800" />
        </button>
        <h3 className="text-xl">{fancyTimetableDate}</h3>
        <select
          id="airline"
          value={selectedAirline}
          onChange={(e) => setSelectedAirline(e.target.value as typeof airlineOptions[number])}
          className="block rounded-sm border border-gray-300 bg-gray-50 p-1 text-xs text-gray-800">
          <option>Choose an Airline</option>
          {airlineOptions.map((airline) => (
            <option key={airline} value={airline}>{airline}</option>
          ))}
        </select>
        <button onClick={nextDate} className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400">
          <FaArrowRight className="size-4 text-gray-800" />
        </button>
      </menu>
    </nav>
  );
};

export {Navbar};
