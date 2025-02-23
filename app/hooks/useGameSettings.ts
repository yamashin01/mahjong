import { useState } from "react";
import { GameSettingType } from "../types/types";
import { GAME_SETTINGS } from "../constants";

const DEFAULT_GAME_SETTINGS: GameSettingType = {
  title: "",
  location: null,
  session_date: new Date().toISOString().split("T")[0],
  number_of_players: 4,
  starting_points: GAME_SETTINGS.DEFAULT_STARTING_POINTS,
  first_place_bonus: GAME_SETTINGS.DEFAULT_FIRST_PLACE_BONUS,
  second_place_bonus: GAME_SETTINGS.DEFAULT_SECOND_PLACE_BONUS,
  rate: GAME_SETTINGS.DEFAULT_RATE,
};

export const useGameSettings = () => {
  const [gameSettings, setSettings] = useState<GameSettingType>(DEFAULT_GAME_SETTINGS);

  const updateGameSetting = <K extends keyof GameSettingType>(
    key: K,
    value: GameSettingType[K]
  ) => {
    setSettings({ ...gameSettings, [key]: value });
  };

  const validateGameSettings = (): boolean => {
    return (
      gameSettings.session_date.trim() !== "" &&
      gameSettings.starting_points > 0 &&
      gameSettings.rate > 0
    );
  };

  return {
    gameSettings,
    updateGameSetting,
    validateGameSettings,
  };
};
