import {FC} from 'react';
import {useFlights} from '../hooks';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {Datum} from '../types';

const FlightsTable: FC = () => {
  const {data: response} = useFlights({pageIndex: 0, pageSize: 20, flightDate: '2025-01-16'});

  const columnHelper = createColumnHelper<Datum>();

  const columns = [
    columnHelper.accessor('flight.number', {
      header: () => 'Flight #',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('departure.airport', {
      header: () => 'Departure',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('arrival.airport', {
      header: () => 'Arrival',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('flight_date', {
      header: () => 'Flight Date',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('departure.estimated', {
      header: () => 'Estimated Departure Time',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('departure.delay', {
      header: () => 'Delay',
      cell: (info) => info.getValue() ? `${info.getValue()}m` : '-',
    }),
    columnHelper.accessor('flight_status', {
      header: () => 'Flight Status',
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: response?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <section className="rounded-lg border border-gray-200 bg-gray-50">
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="border-b text-xs uppercase text-gray-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="px-6 py-3">
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
            <tr key={row.id} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export {FlightsTable};
