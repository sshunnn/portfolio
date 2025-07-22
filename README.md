# Shun's Portfolio Website

> モダンなWebテクノロジーで構築されたプロフェッショナルポートフォリオサイト

[![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![Framework](https://img.shields.io/badge/Framework-Next.js-blue)](https://nextjs.org)
[![Language](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org)

## 📋 プロジェクト概要

本プロジェクトは、Next.js 15とTypeScriptを基盤とした高性能なポートフォリオWebサイトです。モダンなUI/UXデザインと最適化されたパフォーマンスを実現し、プロフェッショナルな印象を与える作品集サイトとして開発されました。

### 🎯 主な特徴

- **レスポンシブデザイン**: 全デバイスに最適化された表示
- **高速パフォーマンス**: Next.js Image最適化とSSR/SSG
- **アクセシビリティ対応**: WAI-ARIAガイドラインに準拠
- **SEO最適化**: メタタグとJSON-LD構造化データ
- **モダンアニメーション**: CSS Modules + SCSS による滑らかな UI/UX

## 🚀 技術スタック

### フロントエンド
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: SCSS Modules
- **Font**: Kaisei Opti (Google Fonts)

### 開発・デプロイ環境
- **Package Manager**: npm
- **Hosting**: Vercel
- **Version Control**: Git

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── controllers/           # ビジネスロジック層
├── models/               # データモデル定義
├── styles/               # グローバルスタイル
│   ├── globals.scss      # ベーススタイル
│   └── variables.scss    # SCSS変数定義
├── utils/                # ユーティリティ関数
└── views/                # プレゼンテーション層
    ├── components/       # 再利用可能コンポーネント
    │   ├── Atoms/       # 基本コンポーネント
    │   ├── Molecules/   # 複合コンポーネント
    │   └── Organisms/   # 複雑なコンポーネント
    └── templates/       # ページテンプレート
```

## 🛠️ セットアップ手順

### 前提条件
- Node.js 18.17以上
- npm 9.0以上

### インストール

```bash
# リポジトリのクローン
git clone [repository-url]
cd portfolio

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーが起動後、[http://localhost:3000](http://localhost:3000) でアプリケーションにアクセスできます。

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# コード品質チェック
npm run lint

# 型チェック
npm run type-check
```

## 🌍 デプロイメント

### Vercelでの自動デプロイ

1. **GitHubリポジトリとVercelの連携**
   - [Vercel Dashboard](https://vercel.com/dashboard)にアクセス
   - 「New Project」からGitHubリポジトリを選択
   - プロジェクト設定を確認し、デプロイを実行

2. **自動デプロイの設定**
   - `main`ブランチへのプッシュで自動デプロイが実行されます
   - プルリクエストごとにプレビュー環境が自動作成されます

### 環境変数の設定

```bash
# .env.local ファイルを作成し、必要な環境変数を設定
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 パフォーマンス指標

- **Lighthouse Score**: 95+
- **Core Web Vitals**: 全指標で良好
- **Bundle Size**: 最適化済み
- **画像最適化**: Next.js Image コンポーネント使用

## 🤝 コントリビューション

プロジェクトの改善にご協力いただける場合は、以下の手順でお願いします：

1. フォークしてブランチを作成
2. 変更を加えてコミット
3. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは個人利用目的で作成されています。

## 📞 お問い合わせ

プロジェクトに関するご質問やフィードバックがございましたら、お気軽にお問い合わせください。

---

**最終更新**: 2025年7月23日  
**開発者**: Shun
