"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { dummySessions } from "../dummyData/sessions";
import { CalendarIcon, CoinsIcon, MapPinIcon, TrophyIcon, UsersIcon } from "lucide-react";
import { dummySessionScores } from "../dummyData/sessionScores";

type ScoreType = {
  player: string;
  scores: number[];
  total: number;
};

export default function GamePage() {
  // 初期スコアは空の配列にする（入力するたびに追加される）
  const initialScores: ScoreType[] = dummySessionScores.map(player => ({
    player: player.name,
    scores: [],
    total: 0,
  }));

  const [scores, setScores] = useState<ScoreType[]>(initialScores);
  const [newScores, setNewScores] = useState(Array(dummySessionScores.length).fill(""));

  // ダミー情報を使用
  const sessionInfo = dummySessions;
  const sessionScores = dummySessionScores;

  const addScores = () => {
    // 全プレイヤーのスコアが入力されているか確認
    if (newScores.every(score => score !== "")) {
      const updatedScores = scores.map((player, index) => {
        const newScore = Number.parseInt(newScores[index]);
        const updatedScores = [...player.scores, newScore];
        return {
          ...player,
          scores: updatedScores,
          total: updatedScores.reduce((sum, score) => sum + score, 0),
        };
      });
      setScores(updatedScores);
      // 入力フィールドをリセット
      setNewScores(Array(dummySessionScores.length).fill(""));
    } else {
      alert("全てのプレイヤーのスコアを入力してください。");
    }
  };

  const calculateRanking = () => {
    return [...scores]
      .sort((a, b) => b.total - a.total)
      .map((player, index) => ({ ...player, rank: index + 1 }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
  };

  // 半荘数を取得（スコアが入力されていない場合は0）
  const gameCount = scores[0]?.scores.length || 0;

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">対局の詳細</h1>
        <div className="space-x-2">
          <Link href="/games">
            <Button variant="outline">対局履歴に戻る</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">トップページに戻る</Button>
          </Link>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">{sessionInfo.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">
                日付: {formatDate(sessionInfo.session_date)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">場所: {sessionInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <CoinsIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">
                開始点数: {sessionInfo.starting_points.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <UsersIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">
                プレイヤー数: {sessionInfo.number_of_players}人
              </span>
            </div>
            <div className="flex items-center gap-2">
              <TrophyIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">
                ウマ: 1位 {sessionInfo.first_place_bonus.toLocaleString()}, 2位{" "}
                {sessionInfo.second_place_bonus.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CoinsIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">レート: {sessionInfo.rate}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>スコア入力</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mb-4">
            {sessionScores.map((player, index) => (
              <Input
                key={index}
                type="number"
                placeholder={`${player.name}のスコア`}
                value={newScores[index]}
                onChange={e => {
                  const updatedScores = [...newScores];
                  updatedScores[index] = e.target.value;
                  setNewScores(updatedScores);
                }}
                className="flex-1"
              />
            ))}
            <Button onClick={addScores} className="md:flex-none">
              追加
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>スコア表</CardTitle>
        </CardHeader>
        <CardContent>
          {gameCount > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>プレイヤー</TableHead>
                  {Array.from({ length: gameCount }).map((_, index) => (
                    <TableHead key={index}>半荘{index + 1}</TableHead>
                  ))}
                  <TableHead>合計</TableHead>
                  <TableHead>順位</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calculateRanking().map(player => (
                  <TableRow key={player.player}>
                    <TableCell>{player.player}</TableCell>
                    {player.scores.map((score, index) => (
                      <TableCell key={index}>{score.toLocaleString()}</TableCell>
                    ))}
                    <TableCell>{player.total.toLocaleString()}</TableCell>
                    <TableCell>{player.rank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              まだスコアが入力されていません。上のフォームからスコアを入力してください。
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
