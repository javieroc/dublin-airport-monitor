export type FlightsReponse = {
  // pagination: Pagination;
  total: number;
  data: Timetable[];
}

export interface StatsResponse {
  flightsTotal: number;
  cancelled: number;
  delayedMoreThan45Min: number;
  delayedBetween30And45Min: number;
  delayedBetween15And30Min: number;
  delayedBetween0And15Min: number;
}

export interface PaginationParams {
  pageIndex: number;
  pageSize: number;
}

export interface PaginationApiParams {
  limit?: number;
  offset?: number;
}

export interface QueryParams {
  flightDate?: string;
}

export type Timetable = {
  timetable_date: string;
  codeshared?: string;
  status: string;
  type: string;
  departure: Departure;
  arrival: Arrival;
  airline: Airline;
  flight: Flight;
}

export type Airline = {
  iataCode: string;
  icaoCode: string;
  name: string;
}

export type Departure = {
  actualRunway?: string;
  actualTime?: string;
  baggage: unknown;
  delay?: number;
  estimatedRunway?: string;
  estimatedTime: string;
  gate?: string;
  iataCode: string;
  icaoCode: string;
  scheduledTime: string;
  terminal?: string;
}

export type Arrival = {
  actualRunway?: string;
  actualTime?: string;
  baggage?: string;
  delay?: number;
  estimatedRunway?: string;
  estimatedTime?: string;
  gate?: string;
  iataCode: string;
  icaoCode: string;
  scheduledTime: string;
  terminal?: string;
}

export type Flight = {
  iataNumber: string;
  icaoNumber: string;
  number?: string;
}

export type Pagination = {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
