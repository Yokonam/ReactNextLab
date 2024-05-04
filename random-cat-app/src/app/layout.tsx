import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ランダム画像',
  description: 'ランダムに画像を表示'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
