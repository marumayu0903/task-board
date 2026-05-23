# Task Board Project

## Git Operations Rule

**Every time code changes are made, push to GitHub immediately.**

### Workflow
1. Make code changes
2. Stage the relevant files: `git add <files>`
3. Commit with a clear message: `git commit -m "..."`
4. Push to GitHub: `git push`

Do not batch multiple unrelated changes into one commit. Each logical change gets its own commit and push.

### Commit Message Format
- `feat: <description>` — new feature
- `fix: <description>` — bug fix
- `refactor: <description>` — code restructuring
- `docs: <description>` — documentation update
- `chore: <description>` — maintenance / tooling

### Branch Strategy
- Work on `main` for small, incremental changes
- Create a feature branch for larger work: `git checkout -b feat/<name>`

## Project Overview

Vite + React で構築したタスクボードアプリ。
- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え
- タスクを削除
- 完了済タスクはグレー表示

### 使用カラー（RGB）
| 用途 | RGB値 |
|---|---|
| ダークネイビー（ヘッダー背景） | rgb(22, 42, 62) |
| スチールブルー（ボタン・アクセント） | rgb(88, 129, 148) |
| ライトブルーグレー（背景） | rgb(214, 228, 231) |
| オリーブグリーン（完了チェック・強調） | rgb(185, 201, 101) |

## Development Commands

```bash
npm install      # 依存パッケージをインストール
npm run dev      # 開発サーバーを起動（http://localhost:5173）
npm run build    # 本番ビルド
npm run preview  # ビルド結果をプレビュー
```

## プロジェクト構成

| ファイル | 役割 |
|---|---|
| `index.html` | アプリのHTMLテンプレート（Reactのマウントポイント） |
| `vite.config.js` | Viteビルドツールの設定（Reactプラグイン登録） |
| `package.json` | 依存パッケージとスクリプトの定義 |
| `src/main.jsx` | Reactのエントリーポイント（DOMにAppをマウント） |
| `src/App.jsx` | タスクボードのメインコンポーネント（ロジック） |
| `src/App.css` | スタイル定義（指定カラー使用） |

## Claude Code 許可ダイアログについて

Claude Codeはセキュリティのため、以下の操作を行う前にユーザーの承認を求めます。
- **ファイル書き込み（Write）**: 新規ファイルの作成
- **ファイル編集（Edit）**: 既存ファイルの変更
- **Bash コマンド実行**: `git`、`npm` などのシェルコマンド

ダイアログが出たら「Allow」をクリックすると操作が実行されます。
