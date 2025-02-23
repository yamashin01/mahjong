"use client";

import { GameSettingType } from "@/app/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface GameSettingsInputsProps {
  settings: GameSettingType;
  onUpdateSetting: <K extends keyof GameSettingType>(key: K, value: GameSettingType[K]) => void;
}

export function GameSettingInputs({ settings, onUpdateSetting }: GameSettingsInputsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>対局情報入力</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="md:flex md:space-x-4 w-full">
          <div className="flex-1">
            <Label htmlFor="title">対局名</Label>
            <Input
              id="title"
              placeholder="空欄の場合は「対局」となります。"
              value={settings.title}
              onChange={e => onUpdateSetting("title", e.target.value)}
              className="mt-2"
            />
          </div>

          <div className="flex-1 md:mt-0 mt-2">
            <Label htmlFor="location">場所</Label>
            <Input
              id="location"
              placeholder="空欄でもOKです。"
              value={settings.location ?? ""}
              onChange={e => onUpdateSetting("location", e.target.value || null)}
              className="mt-2"
            />
          </div>
          <div className="flex-1 md:mt-0 mt-2">
            <Label htmlFor="session_date">日付</Label>
            <Input
              id="session_date"
              type="date"
              value={settings.session_date}
              onChange={e => onUpdateSetting("session_date", e.target.value)}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div className="mt-4 w-full">
          <div className="md:flex md:space-x-4 w-full">
            <div className="flex-1">
              <Label>3人麻雀 / 4人麻雀</Label>
              <RadioGroup
                value={settings.number_of_players.toString()}
                onValueChange={value =>
                  onUpdateSetting("number_of_players", parseInt(value) as 3 | 4)
                }
                className="flex mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3" id="three-players" />
                  <Label htmlFor="three-players">3人</Label>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <RadioGroupItem value="4" id="four-players" />
                  <Label htmlFor="four-players">4人</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex-1 md:mt-0 mt-2">
              <Label htmlFor="starting-points">開始点数</Label>
              <Input
                id="starting-points"
                type="number"
                value={settings.starting_points}
                onChange={e => onUpdateSetting("starting_points", parseInt(e.target.value))}
                className="mt-2"
                min={0}
                required
              />
            </div>
            <div className="flex-1 md:mt-0 mt-2">
              <Label htmlFor="rate">レート</Label>
              <Input
                id="rate"
                type="number"
                value={settings.rate}
                onChange={e => onUpdateSetting("rate", parseInt(e.target.value))}
                className="mt-2"
                min={1}
                required
              />
            </div>
          </div>

          <div className="md:flex md:space-x-4 w-full mt-2">
            <div className="flex-1 md:mt-0 mt-2">
              <Label htmlFor="first_place_bonus">ウマ（1位）</Label>
              <Input
                id="first_place_bonus"
                type="number"
                value={settings.first_place_bonus}
                onChange={e => onUpdateSetting("first_place_bonus", parseInt(e.target.value))}
                className="mt-2"
                min={0}
                required
              />
            </div>

            <div className="flex-1 md:mt-0 mt-2">
              <Label htmlFor="second_place_bonus">ウマ（2位）</Label>
              <Input
                id="second_place_bonus"
                type="number"
                value={settings.second_place_bonus}
                onChange={e => onUpdateSetting("second_place_bonus", parseInt(e.target.value))}
                className="mt-2"
                min={0}
                required
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
