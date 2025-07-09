import './globals.css'

export const metadata = {
  title: 'Login UI',
  description: '3D animated login box with glow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white">{children}</body>
    </html>
  )
}
