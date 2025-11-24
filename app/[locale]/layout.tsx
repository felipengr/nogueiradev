import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const isEnglish = locale === "en"

	return {
		title: {
			default: "Felipe Nogueira | Full Stack Developer",
			template: "%s | Felipe Nogueira",
		},
		description: isEnglish
			? "Full Stack Developer specialized in React, Next.js, Node.js, and VTEX IO. Building exceptional digital experiences with modern technologies."
			: "Full Stack Developer especializado em React, Next.js, Node.js e VTEX IO. Construindo experiências digitais excepcionais com tecnologias modernas.",
		keywords: [
			"Felipe Nogueira",
			"Full Stack Developer",
			"React",
			"Next.js",
			"Node.js",
			"TypeScript",
			"VTEX IO",
			"FastStore",
			"Web Development",
			"Frontend",
			"Backend",
			"São Paulo",
			"Brazil",
		],
		authors: [{ name: "Felipe Nogueira" }],
		creator: "Felipe Nogueira",
		publisher: "Felipe Nogueira",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL("https://www.nogueiradev.com.br"),
		alternates: {
			canonical: "/",
			languages: {
				"pt-BR": "/pt-BR",
				en: "/en",
			},
		},
		openGraph: {
			type: "website",
			locale: locale === "en" ? "en_US" : "pt_BR",
			url: "https://www.nogueiradev.com.br",
			title: "Felipe Nogueira | Full Stack Developer",
			description: isEnglish
				? "Full Stack Developer specialized in React, Next.js, Node.js, and VTEX IO. Building exceptional digital experiences."
				: "Full Stack Developer especializado em React, Next.js, Node.js e VTEX IO. Construindo experiências digitais excepcionais.",
			siteName: "Felipe Nogueira Portfolio",
			images: [
				{
					url: "/og-image",
					width: 1200,
					height: 630,
					alt: "Felipe Nogueira - Full Stack Developer",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Felipe Nogueira | Full Stack Developer",
			description: isEnglish
				? "Full Stack Developer specialized in React, Next.js, Node.js, and VTEX IO."
				: "Full Stack Developer especializado em React, Next.js, Node.js e VTEX IO.",
			images: ["/og-image"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: "/icon",
			apple: "/apple-icon",
		},
	}
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={cn(inter.className, "antialiased")}>
				<GoogleTagManager />
				<GoogleTagManagerNoScript />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						<div className="relative min-h-screen grid-pattern">{children}</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
