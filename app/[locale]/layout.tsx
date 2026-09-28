import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/gtm"
import { StructuredData } from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const isEnglish = locale === "en"

	const title = isEnglish
		? "Felipe Nogueira | Websites & Online Stores That Sell"
		: "Felipe Nogueira | Criação de Sites e Lojas Virtuais"

	const description = isEnglish
		? "Full stack developer specialized in fast, high-converting websites and e-commerce. Projects delivered for brands like Reserva, Cartier, and Arezzo. Request a quote."
		: "Desenvolvedor full stack especializado em sites e lojas virtuais rápidas e feitas para vender. Projetos entregues para marcas como Reserva, Cartier e Arezzo. Peça um orçamento."

	return {
		title: {
			default: title,
			template: "%s | Felipe Nogueira",
		},
		description,
		keywords: isEnglish
			? [
					"website developer",
					"build a website",
					"freelance web developer",
					"e-commerce developer",
					"online store development",
					"React developer",
					"Next.js developer",
					"VTEX IO",
					"FastStore",
					"Felipe Nogueira",
					"Brazil",
				]
			: [
					"criar site",
					"criação de site",
					"desenvolvedor de site",
					"desenvolvedor freelancer",
					"loja virtual",
					"criação de loja virtual",
					"e-commerce",
					"site profissional",
					"orçamento site",
					"desenvolvedor React",
					"desenvolvedor Next.js",
					"VTEX IO",
					"FastStore",
					"Felipe Nogueira",
					"São Paulo",
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
			title,
			description,
			siteName: "Felipe Nogueira",
			images: [
				{
					url: "/opengraph-image",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/opengraph-image"],
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
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<StructuredData />
			</head>
			<body className={cn(inter.className, "antialiased")} suppressHydrationWarning>
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
