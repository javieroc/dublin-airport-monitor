import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {FlightsReponse, PaginationApiParams, PaginationParams, QueryParams} from '../types';
import {api} from '../axios';

const getFlights = async (
    params: PaginationApiParams & QueryParams = {},
): Promise<FlightsReponse> => {
  const {data} = await api.get<FlightsReponse>('/flights', {params});
  return data;
};

function useFlights(
    {pageIndex, pageSize, flightDate}: PaginationParams & QueryParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: ['FLIGHTS', pageIndex, pageSize, flightDate],
    queryFn: () => getFlights({flightDate}),
    ...options,
  });
}

export {useFlights};
