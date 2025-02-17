# 麻雀スコア管理アプリ

麻雀の対局スコアを簡単に記録・管理できるWebアプリケーションです。
点数計算を自動化し、対局履歴を簡単に管理することができます。

## 機能概要

### コア機能

- プレイヤーの登録・管理
- 対局の記録・管理
- スコアの自動計算
- 対局履歴の表示

### 主な特徴

- シンプルで使いやすいUI
- レスポンシブ対応（スマートフォン・タブレット対応）
- リアルタイムでのスコア計算
- 安全なユーザー認証

## 技術スタック

### フロントエンド

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

### バックエンド

- Supabase（データベース）
- Clerk（認証）

### インフラ

- Vercel

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yamashin01/mahjong.git

# 依存パッケージのインストール
npm install

# 開発サーバーの起動
yarn dev
```

## 環境変数の設定

```env
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## ローカル開発

```bash
# 開発サーバーの起動
yarn dev

# ビルド
yarn build

# 本番モードでの起動
yarn start
```
