export const GTM_ID = "GTM-W9JWSKRK"

type WindowWithDataLayer = Window & {
	dataLayer: Record<string, unknown>[]
}

declare const window: WindowWithDataLayer

export const pushToDataLayer = (data: Record<string, unknown>) => {
	if (typeof window !== "undefined" && window.dataLayer) {
		window.dataLayer.push(data)
	}
}

// Eventos customizados
export const gtmEvents = {
	// Formulário de contato
	contactFormSubmit: (status: "success" | "error") => {
		pushToDataLayer({
			event: "contact_form_submit",
			form_status: status,
		})
	},

	// Clique no WhatsApp
	whatsappClick: (location: string) => {
		pushToDataLayer({
			event: "whatsapp_click",
			click_location: location, // "hero", "contact_section", "footer"
			link_url: "https://wa.me/5511974084935",
		})
	},

	// Cliques em redes sociais
	socialClick: (platform: string, location: string, url: string) => {
		pushToDataLayer({
			event: "social_click",
			social_platform: platform, // "github", "linkedin", "email"
			click_location: location, // "hero", "contact_section", "footer"
			link_url: url,
		})
	},

	// Cliques em CTAs
	ctaClick: (buttonName: string, destination: string) => {
		pushToDataLayer({
			event: "cta_click",
			button_name: buttonName,
			destination,
		})
	},

	// Visualização de projeto
	projectClick: (projectName: string, projectUrl: string) => {
		pushToDataLayer({
			event: "project_click",
			project_name: projectName,
			project_url: projectUrl,
		})
	},
}
