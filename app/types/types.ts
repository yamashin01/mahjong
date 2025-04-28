export interface GameSettingType {
  title: string;
  location: string | null;
  session_date: string;
  number_of_players: 3 | 4;
  starting_points: number;
  first_place_bonus: number;
  second_place_bonus: number;
  penalty_for_no_win_1: number;
  penalty_for_no_win_2: number;
  penalty_for_no_win_3: number;
  penalty_for_bust: number;
  rate: number;
}
