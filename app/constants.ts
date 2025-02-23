export const GAME_SETTINGS = {
  DEFAULT_STARTING_POINTS: 25000,
  DEFAULT_RATE: 5,
  DEFAULT_FIRST_PLACE_BONUS: 10000,
  DEFAULT_SECOND_PLACE_BONUS: 5000,
  MIN_PLAYERS: 3,
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: "必須項目です",
  INVALID_PLAYERS: "プレイヤー名を入力してください",
  INVALID_DATE: "日付を入力してください",
  INVALID_POINTS: "点数は0以上で入力してください",
  INVALID_RATE: "レートは1以上で入力してください",
} as const;
