"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { VALIDATION_MESSAGES } from "@/app/constants";
import { usePlayerSettings } from "@/app/hooks/usePlayerSettings";
import { PlayerInputs } from "./PlayerInputs";
import { GameSettingInputs } from "./GameSettingInputs";
import { useGameSettings } from "@/app/hooks/useGameSettings";

export function NewGameForm() {
  const router = useRouter();
  const { playerSettings, updatePlayers, addPlayer, removePlayer, validatePlayerSettings } =
    usePlayerSettings();
  const { gameSettings, updateGameSetting, validateGameSettings } = useGameSettings();

  const startGame = async () => {
    if (validatePlayerSettings() && validateGameSettings()) {
      try {
        // TODO: API call to create new game
        const response = await fetch("/api/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerSettings),
        });

        if (!response.ok) {
          throw new Error("Failed to create game");
        }

        const { id } = await response.json();
        router.push(`/games/${id}`);
      } catch (error) {
        console.error("Error creating game:", error);
        alert("対局の作成に失敗しました。");
      }
    } else {
      alert(VALIDATION_MESSAGES.REQUIRED_FIELD);
    }
  };

  return (
    <div className="space-y-6">
      <form className="space-y-4">
        <PlayerInputs
          players={playerSettings.players}
          onPlayerChange={updatePlayers}
          onAddPlayer={addPlayer}
          onRemovePlayer={removePlayer}
        />
        <GameSettingInputs settings={gameSettings} onUpdateSetting={updateGameSetting} />
      </form>
      <div>
        <Button className="w-full" onClick={startGame}>
          対局開始
        </Button>
      </div>
    </div>
  );
}
