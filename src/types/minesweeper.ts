export enum Difficulty {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
}

export interface Game {
  id: string;
  name: string;
  difficulty: Difficulty
}