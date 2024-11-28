import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await auth();
  const session = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/john-doe.jpg",
    },
    expires: new Date(Date.now() + 3600 * 1000).toISOString(), // 1 hour expiration
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header session={session} />
          <main className=" bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
