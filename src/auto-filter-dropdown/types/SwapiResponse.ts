import { Planet } from './Planet';

export type SwapiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};
