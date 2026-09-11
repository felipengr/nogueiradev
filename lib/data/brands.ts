export interface Brand {
	name: string
	logo: string
	/** Set to true once a clean, correctly-sized logo file exists at `logo`. */
	available: boolean
}

export const brandsData: Brand[] = [
	{ name: "Reserva", logo: "/images/brands/reserva.png", available: true },
	{ name: "Baw Clothing", logo: "/images/brands/baw-clothing.svg", available: true },
	{ name: "Arezzo", logo: "/images/brands/arezzo.png", available: true },
	{ name: "Cartier", logo: "/images/brands/cartier.png", available: true },
	{ name: "Uno de 50", logo: "/images/brands/uno-de-50.svg", available: true },
	{ name: "Creamy", logo: "/images/brands/creamy.svg", available: true },
	{ name: "Mr Cat", logo: "/images/brands/mr-cat.png", available: false },
	{ name: "Chilli Beans", logo: "/images/brands/chilli-beans.png", available: true },
]
