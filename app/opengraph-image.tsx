import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: "80px",
				background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: 72,
					height: 72,
					borderRadius: 16,
					background: "rgba(255, 255, 255, 0.15)",
					color: "white",
					fontSize: 32,
					fontWeight: 700,
					marginBottom: 40,
				}}
			>
				FN
			</div>
			<div
				style={{
					display: "flex",
					fontSize: 64,
					fontWeight: 700,
					color: "white",
					lineHeight: 1.2,
					maxWidth: 900,
				}}
			>
				Sites e lojas online que fazem sua marca vender mais.
			</div>
			<div
				style={{
					display: "flex",
					fontSize: 28,
					color: "rgba(255, 255, 255, 0.85)",
					marginTop: 32,
				}}
			>
				Felipe Nogueira · Full Stack Developer
			</div>
		</div>,
		{ ...size }
	)
}
