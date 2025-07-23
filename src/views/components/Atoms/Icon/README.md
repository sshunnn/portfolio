# Icon Component

汎用的なSVGアイコンコンポーネントです。

## 基本的な使用方法

```tsx
import Icon from '@/views/components/Atoms/Icon';

// 基本的な使用
<Icon name="chevron-left" />

// サイズ指定
<Icon name="chevron-right" size={24} />

// カスタムスタイル
<Icon 
  name="play" 
  size={32} 
  color="#667eea" 
  strokeWidth={3}
  className="custom-icon"
/>
```

## 利用可能なアイコン

| アイコン名 | 説明 |
|------------|------|
| `chevron-left` | 左向きシェブロン |
| `chevron-right` | 右向きシェブロン |
| `play` | 再生ボタン |
| `pause` | 一時停止ボタン |
| `arrow-left` | 左向き矢印 |
| `arrow-right` | 右向き矢印 |
| `close` | 閉じるボタン |
| `menu` | メニューボタン |
| `external-link` | 外部リンク |
| `github` | GitHubアイコン |
| `email` | メールアイコン |
| `phone` | 電話アイコン |
| `location` | 位置アイコン |

## Props

| Prop | 型 | デフォルト | 説明 |
|------|----|-----------|----- |
| `name` | `IconName` | - | アイコン名（必須） |
| `size` | `number` | `20` | アイコンのサイズ（px） |
| `className` | `string` | `''` | 追加のCSSクラス |
| `color` | `string` | - | アイコンの色 |
| `strokeWidth` | `number` | - | ストロークの太さ |

## アニメーションクラス

```tsx
// 回転アニメーション
<Icon name="loading" className="icon--spin" />

// パルスアニメーション
<Icon name="heart" className="icon--pulse" />

// バウンスアニメーション
<Icon name="star" className="icon--bounce" />
```

## 新しいアイコンの追加

1. `IconName` 型に新しいアイコン名を追加
2. `iconPaths` オブジェクトにSVGパスを追加

```tsx
export type IconName = 
  | '既存のアイコン...'
  | 'new-icon'; // 新しいアイコン名

const iconPaths: Record<IconName, React.ReactNode> = {
  // ...既存のアイコン
  'new-icon': (
    <path 
      d="M..." 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
};
```
