import "./globals.css";

export const metadata = {
  title: "I miei progetti",
  description: "Una pagina rapida per raggiungere le mie app pubbliche.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
