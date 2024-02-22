export type Session = {
  id?: string;
  counter: number;
  played: number;
  won: number;
  lost: number;
  active: boolean;
  created?: string;
};
