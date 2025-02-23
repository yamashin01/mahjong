import { useState } from "react";
import { GAME_SETTINGS } from "../constants";

const DEFAULT_PlAYER_SETTINGS = {
  players: ["", "", ""],
  number_of_players: GAME_SETTINGS.MIN_PLAYERS,
};

export const usePlayerSettings = () => {
  const [playerSettings, setPlayerSettings] = useState(DEFAULT_PlAYER_SETTINGS);

  const updatePlayers = (index: number, value: string) => {
    const newPlayers = [...playerSettings.players];
    newPlayers[index] = value;
    setPlayerSettings({ ...playerSettings, players: newPlayers });
  };

  const addPlayer = () => {
    setPlayerSettings({ ...playerSettings, players: [...playerSettings.players, ""] });
  };

  const removePlayer = () => {
    if (playerSettings.players.length > playerSettings.number_of_players) {
      setPlayerSettings({
        ...playerSettings,
        players: playerSettings.players.slice(0, -1),
      });
    }
  };

  const validatePlayerSettings = (): boolean => {
    const requiredPlayersCount = playerSettings.number_of_players;
    const hasValidPlayers = playerSettings.players
      .slice(0, requiredPlayersCount)
      .every(player => player.trim() !== "");

    return hasValidPlayers;
  };

  return {
    playerSettings,
    updatePlayers,
    addPlayer,
    removePlayer,
    validatePlayerSettings,
  };
};
