import { Inter, Playfair_Display } from "next/font/google"

export const inter = Inter({ subsets: ["latin"], display: "swap" })

// High-contrast serif for headlines, applied directly via className on each
// heading — kept apart from Inter's grotesque sans used for body/UI text.
export const playfairDisplay = Playfair_Display({
	subsets: ["latin", "latin-ext"],
	display: "swap",
})
