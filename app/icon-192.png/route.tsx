import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
	width: 192,
	height: 192,
}

export const contentType = "image/png"

export default function Icon192() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 110,
				background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
				fontWeight: "bold",
				fontFamily: "sans-serif",
				borderRadius: "24px",
			}}
		>
			FN
		</div>,
		{
			...size,
		}
	)
}
