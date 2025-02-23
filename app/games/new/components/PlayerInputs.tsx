"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GAME_SETTINGS } from "@/app/constants";

interface PlayerInputsProps {
  players: string[];
  onPlayerChange: (index: number, value: string) => void;
  onAddPlayer: () => void;
  onRemovePlayer: () => void;
}

export function PlayerInputs({
  players,
  onPlayerChange,
  onAddPlayer,
  onRemovePlayer,
}: PlayerInputsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="md:flex md:justify-between">
          <CardTitle>プレイヤー入力</CardTitle>
          <div className="grid grid-cols-2 gap-2 mt-4 md:mt-0 md:flex md:space-x-2">
            <Button onClick={onAddPlayer} type="button" className="w-full md:w-auto">
              追加
            </Button>
            <Button
              onClick={onRemovePlayer}
              disabled={players.length <= GAME_SETTINGS.MIN_PLAYERS}
              type="button"
              className="w-full md:w-auto"
            >
              削除
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {players.map((player, index) => (
            <Input
              key={index}
              placeholder={`プレイヤー${index + 1}の名前`}
              value={player}
              onChange={e => onPlayerChange(index, e.target.value)}
              required={index < 4}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
