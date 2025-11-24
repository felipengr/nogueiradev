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
			status,
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

	// Cliques em links sociais
	socialClick: (platform: string, url: string) => {
		pushToDataLayer({
			event: "social_click",
			platform,
			url,
		})
	},

	// Visualização de projeto
	projectView: (projectName: string) => {
		pushToDataLayer({
			event: "project_view",
			project_name: projectName,
		})
	},
}
