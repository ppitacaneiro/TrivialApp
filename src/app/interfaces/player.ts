import { Score } from './score';
export interface Player {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  rankings?: Score[];
}
