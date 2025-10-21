# ライツアウトゲーム (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたライツアウトパズルゲームです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-game-lights-out/demo/

## 主要機能
### 操作方法
- **セルクリック**: そのセルと上下左右のセルの状態を切り替え
- **リセットボタン**: 初期状態に戻す
- **新しいゲームボタン**: 新しいランダム配置を生成

### ゲーム機能
- 5×5グリッドのライツアウトパズル
- セルクリックで十字型パターンの状態切り替え
- 全ライト消灯でクリア
- クリック回数の表示
- ゲームリセット機能
- 新しいゲーム生成

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── lights-out/             # ライツアウトゲーム機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── GameBoard/      # ゲームボード
│       │   ├── GameControls/   # ゲーム操作ボタン群
│       │   ├── GameInfo/       # ゲーム情報表示
│       │   └── Cell/           # ゲームセル
│       ├── LightsOutGame/      # 機能ルートコンポーネント
│       ├── useLightsOut.ts     # ゲームロジックフック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License