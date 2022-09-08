import { Question } from './question';

export interface Result {
  question: Question;
  isAnswerCorrect: boolean;
  answer: string;
}
