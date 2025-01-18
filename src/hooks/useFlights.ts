import {DefaultError, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {api} from '../axios';
import {FlightsReponse, PaginationApiParams, PaginationParams} from '../types';

const getFlights = async (
    params: PaginationApiParams = {},
): Promise<FlightsReponse> => {
  const {data} = await api.get<FlightsReponse>('/flights', {params});
  return data;
};

function useFlights(
    {pageIndex, pageSize}: PaginationParams,
    options?: UseQueryOptions<FlightsReponse, DefaultError, FlightsReponse>,
) {
  return useQuery<FlightsReponse>({
    queryKey: ['FLIGHTS', pageIndex, pageSize],
    queryFn: () => getFlights({offset: pageIndex * pageSize, limit: pageSize}),
    ...options,
  });
}

export {useFlights};
