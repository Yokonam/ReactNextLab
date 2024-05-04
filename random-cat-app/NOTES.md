# random-cat を app router にしてみる

## `app`ディレクトリに変更し、ページを作るときは page.tsx にファイル名を追加する

- 例: `src/app/page.tsx`

## getServerSideProps は使えない

Server Components がデフォルトで有効になっているためらしい。
Client Components を使うときは'use client'を使う。

サーバーサイドのデータフェッチングは新しい API を介して行われる

## img タグは使えないので Image コンポーネントを使う

Image コンポーネントを使うときは、next/image をインポートする

## Image コンポーネントで外部の画像を表示するときは`next.config.js`に設定を追加する

````js
    images: {
      domains: ['api.thecatapi.com', 'cdn2.thecatapi.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.thecatapi.com',
          pathname: '/v1/images/search/**'
        },
        {
          protocol: 'https',
          hostname: 'cdn2.thecatapi.com',
          pathname: '/images/**'
        }
      ]
    },
    ```
````
