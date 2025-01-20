import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {FlightsReponse, PaginationApiParams, PaginationParams, QueryParams} from '../types';
import {QUERY_KEYS} from '../constants';
import {api} from '../axios';

const getFlights = async (
    params: PaginationApiParams & QueryParams = {},
): Promise<FlightsReponse> => {
  const {data} = await api.get<FlightsReponse>('/flights', {params});
  return data;
};

function useFlights(
    {flightDate}: QueryParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: [QUERY_KEYS.FLIGHTS, 'ALL', flightDate],
    queryFn: () => getFlights(
        {flightDate},
    ),
    ...options,
  });
}

function usePaginatedFlights(
    {pageIndex, pageSize, flightDate}: PaginationParams & QueryParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: [QUERY_KEYS.FLIGHTS, pageIndex, pageSize, flightDate],
    queryFn: () => getFlights(
        {flightDate, offset: pageIndex * pageSize, limit: pageSize},
    ),
    ...options,
  });
}

export {useFlights, usePaginatedFlights};
