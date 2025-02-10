import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {FlightsReponse, PaginationApiParams, PaginationParams, QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getFlights = async (
    params: PaginationApiParams & QueryParams = {},
): Promise<FlightsReponse> => {
  const {data} = await api.get<FlightsReponse>('/timetable', {params});
  return data;
};

function useFlights(
    {flightDate, airline}: QueryParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: [QUERY_KEYS.FLIGHTS, 'ALL', flightDate, airline],
    queryFn: () => getFlights(
        {flightDate, airline},
    ),
    ...options,
  });
}

function usePaginatedFlights(
    {pageIndex, pageSize, flightDate, airline}: PaginationParams & QueryParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: [QUERY_KEYS.FLIGHTS, pageIndex, pageSize, flightDate, airline],
    queryFn: () => getFlights(
        {flightDate, offset: pageIndex * pageSize, limit: pageSize, airline},
    ),
    ...options,
  });
}

export {useFlights, usePaginatedFlights};
