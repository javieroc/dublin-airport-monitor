import {FC, useState} from 'react';
import {createColumnHelper, flexRender, getCoreRowModel, getPaginationRowModel, PaginationState, useReactTable} from '@tanstack/react-table';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {Timetable} from '../types';
import {usePaginatedFlights, useFilters} from '../hooks';
import {format} from 'date-fns';

const FlightsTable: FC = () => {
  const {formattedTimetableDate, selectedAirline} = useFilters();
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });
  const {data: response} = usePaginatedFlights(
      {flightDate: formattedTimetableDate, airline: selectedAirline, ...pagination},
  );

  const columnHelper = createColumnHelper<Timetable>();

  const columns = [
    columnHelper.accessor('flight.number', {
      header: () => 'Flight #',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row: Timetable) => `${row.departure.iataCode} -> ${row.arrival.iataCode}`, {
      id: 'route',
      cell: (info) => info.getValue(),
      header: () => 'Route',
    }),
    columnHelper.accessor('departure.estimatedTime', {
      header: () => 'Estimated Departure Time',
      cell: (info) => format(new Date(info.getValue()), 'yyyy-MM-dd HH:mm'),
    }),
    columnHelper.accessor('departure.delay', {
      header: () => 'Delay',
      cell: (info) => info.getValue() ? `${info.getValue()}m` : '-',
    }),
    columnHelper.accessor('status', {
      header: () => 'Flight Status',
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: response?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
    manualPagination: true,
    pageCount: response?.total ? Math.ceil(response.total / pagination.pageSize) : undefined,
  });
  return (
    <>
      <table className="hidden w-full overflow-hidden rounded-lg bg-white shadow-md sm:table">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="px-4 py-2 text-left text-gray-800">
                  {header.isPlaceholder ?
                      null :
                      flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b bg-white">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className="hidden flex-col flex-wrap items-center justify-between pt-4 sm:flex md:flex-row"
        aria-label="Table navigation"
      >
        <span className="mb-4 block w-full text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto">
        Page{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getState().pagination.pageIndex + 1}
          </span>{' '}
        of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {table.getPageCount().toLocaleString()}
          </span>
        </span>

        <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
          <li>
            <button
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <FaAngleLeft className="mr-1" /> Previous
            </button>
          </li>

          {Array.from({length: table.getPageCount()}, (_, i) => (
            <li key={i}>
              <button
                className={`flex h-8 items-center justify-center border px-3 leading-tight ${
                table.getState().pagination.pageIndex === i ?
                  'border-gray-300 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                  'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
                onClick={() => table.setPageIndex(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
            Next <FaAngleRight className="ml-1" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export {FlightsTable};
