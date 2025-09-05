import "../styles/global.scss";

export const metadata = {
  title: "Gallery",
  description: "testFullstack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
