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

type ScoreType = {
  player: string;
  scores: number[];
  total: number;
};

const initialScores: ScoreType[] = [
  { player: "プレイヤー1", scores: [0, 0, 0, 0], total: 0 },
  { player: "プレイヤー2", scores: [0, 0, 0, 0], total: 0 },
  { player: "プレイヤー3", scores: [0, 0, 0, 0], total: 0 },
  { player: "プレイヤー4", scores: [0, 0, 0, 0], total: 0 },
];

export default function GamePage({ id }: { id: string }) {
  const [scores, setScores] = useState<ScoreType[]>(initialScores);
  const [newScores, setNewScores] = useState(["", "", "", ""]);

  const addScores = () => {
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
      setNewScores(["", "", "", ""]);
    } else {
      alert("全てのプレイヤーのスコアを入力してください。");
    }
  };

  const calculateRanking = () => {
    return [...scores]
      .sort((a, b) => b.total - a.total)
      .map((player, index) => ({ ...player, rank: index + 1 }));
  };

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
        <CardHeader>
          <CardTitle>スコア入力</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            {newScores.map((score, index) => (
              <Input
                key={index}
                type="number"
                placeholder={`プレイヤー${index + 1}のスコア`}
                value={score}
                onChange={e => {
                  const updatedScores = [...newScores];
                  updatedScores[index] = e.target.value;
                  setNewScores(updatedScores);
                }}
              />
            ))}
            <Button onClick={addScores}>追加</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>スコア表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>プレイヤー</TableHead>
                {scores[0].scores.map((_, index) => (
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
                    <TableCell key={index}>{score}</TableCell>
                  ))}
                  <TableCell>{player.total}</TableCell>
                  <TableCell>{player.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
