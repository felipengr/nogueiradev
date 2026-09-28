export interface Brand {
	name: string
	logo: string
	/** Intrinsic pixel size of the logo file — lets each logo render at a
	 * consistent height with its own natural width, instead of being
	 * stretched/shrunk to fit a fixed box. */
	width: number
	height: number
	/** Set to true once a clean, correctly-sized logo file exists at `logo`. */
	available: boolean
}

export const brandsData: Brand[] = [
	{ name: "Reserva", logo: "/images/brands/reserva.png", width: 580, height: 117, available: true },
	{
		name: "Baw Clothing",
		logo: "/images/brands/baw-clothing.svg",
		width: 142,
		height: 24,
		available: true,
	},
	{ name: "Arezzo", logo: "/images/brands/arezzo.png", width: 490, height: 114, available: true },
	{ name: "Cartier", logo: "/images/brands/cartier.png", width: 490, height: 172, available: true },
	{
		name: "Uno de 50",
		logo: "/images/brands/uno-de-50.png",
		width: 2050,
		height: 730,
		available: true,
	},
	{ name: "Creamy", logo: "/images/brands/creamy.svg", width: 112, height: 32, available: true },
	{ name: "Mr Cat", logo: "/images/brands/mr-cat.png", width: 183, height: 44, available: false },
	{
		name: "Chilli Beans",
		logo: "/images/brands/chilli-beans.png",
		width: 490,
		height: 88,
		available: true,
	},
]
