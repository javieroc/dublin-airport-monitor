export type FlightsReponse = {
  // pagination: Pagination;
  total: number;
  data: Datum[];
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
  pageIndex?: number;
  pageSize?: number;
}

export interface PaginationApiParams {
  limit?: number;
  offset?: number;
}

export interface QueryParams {
  flightDate?: string;
}

export type Datum = {
  flight_date: Date;
  flight_status: FlightStatus | null;
  departure: Arrival;
  arrival: Arrival;
  airline: Airline;
  flight: Flight;
  aircraft: Aircraft | null;
  live: Live | null;
}

export type Aircraft = {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export type Airline = {
  name: string;
  iata: string;
  icao: string;
}

export type Arrival = {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: null | string;
  gate: null | string;
  baggage?: null | string;
  delay: number | null;
  scheduled: Date;
  estimated: Date;
  actual: Date | null;
  estimated_runway: Date | null;
  actual_runway: Date | null;
}

export type Flight = {
  number: null | string;
  iata: string;
  icao: string;
  codeshared: null;
}

export type FlightStatus = 'active' | 'landed' | 'scheduled';

export type Live = {
  updated: Date;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}

export type Pagination = {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
