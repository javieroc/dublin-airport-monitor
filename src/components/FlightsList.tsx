import {FC, useState} from 'react';
import {usePaginatedFlights, useTimetableDate} from '../hooks';
import {FaAngleLeft, FaAngleRight, FaArrowRight} from 'react-icons/fa';
import {format} from 'date-fns';

const FlightsList: FC = () => {
  const pageSize = 50;
  const {formattedTimetableDate} = useTimetableDate();
  const [pageIndex, setPageIndex] = useState(0);
  const {data: response} = usePaginatedFlights(
      {flightDate: formattedTimetableDate, pageIndex, pageSize},
  );
  const totalPages = response?.total ? Math.ceil(response.total / pageSize) : 0;

  return (
    <section className="grid grid-cols-1 gap-2 sm:hidden">
      <h3 className="text-xl">Timetable</h3>
      {response?.data.map((flight, index) => (
        <div key={index} className="flex flex-col gap-1 rounded-lg bg-neutral-100 px-3 py-4 dark:bg-neutral-800">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <h3>{flight.flight.iataNumber}</h3>
              <h3>-</h3>
              <h3 className="flex items-center gap-1">
                <span>{flight.departure.iataCode}</span>
                <FaArrowRight className="size-3 text-gray-800" />
                <span>{flight.arrival.iataCode}</span>
              </h3>
            </div>
            <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">{flight.status}</span>
          </div>
          <div className="flex gap-2">
            <h3>{format(new Date(flight.departure.estimatedTime), 'HH:mm')}</h3>
            <h3>{`Delay: ${flight.departure.delay}min`}</h3>
          </div>
        </div>
      ))}
      {response && <nav
        className="flex justify-center pt-4 sm:hidden"
        aria-label="Table navigation"
      >
        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
          <li>
            <button
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setPageIndex(pageIndex-1)}
              disabled={pageIndex === 0}
            >
              <FaAngleLeft className="mr-1" />
            </button>
          </li>

          {Array.from({length: totalPages}, (_, i) => (
            <li key={i}>
              <button
                className={`flex h-8 items-center justify-center border px-3 leading-tight ${
                      pageIndex === i ?
                        'border-gray-300 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                        'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                onClick={() => setPageIndex(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setPageIndex(pageIndex+1)}
              disabled={pageIndex === totalPages - 1}
            >
              <FaAngleRight className="ml-1" />
            </button>
          </li>
        </ul>
      </nav>}
    </section>
  );
};

export {FlightsList};
