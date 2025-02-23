export interface GameSettingType {
  title: string;
  location: string | null;
  session_date: string;
  number_of_players: 3 | 4;
  starting_points: number;
  first_place_bonus: number;
  second_place_bonus: number;
  rate: number;
}
