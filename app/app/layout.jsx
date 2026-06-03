export const metadata = {
  title: "DJ Digital",
  description: "Web Developer"
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="nl">
      <body>

        {children}

      </body>
    </html>
  )
}