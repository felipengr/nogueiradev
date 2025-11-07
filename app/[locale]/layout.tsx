import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ThemeProvider } from "next-themes"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={`${inter.variable} font-sans antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<NextIntlClientProvider messages={messages}>
						<div className="grid-pattern min-h-screen">{children}</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
