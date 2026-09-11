export interface Testimonial {
	id: string
	quote: {
		"pt-BR": string
		en: string
	}
	author: string
	role: string
	company?: string
	avatar?: string
	/** Set to true only once this is a real quote from a real client. */
	published: boolean
}

export const testimonialsData: Testimonial[] = [
	// PLACEHOLDER — replace with a real quote from a real client before setting published: true.
	{
		id: "placeholder-1",
		quote: {
			"pt-BR": "",
			en: "",
		},
		author: "",
		role: "",
		published: false,
	},
]
