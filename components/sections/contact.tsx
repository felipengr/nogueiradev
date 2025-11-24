"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Loader2, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { useTranslations } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

declare global {
	interface Window {
		grecaptcha: {
			ready: (callback: () => void) => void
			execute: (siteKey: string, options: { action: string }) => Promise<string>
		}
	}
}

export function Contact() {
	const t = useTranslations("contact")
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<{
		type: "success" | "error" | null
		message: string
	}>({ type: null, message: "" })
	const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	// Reset status após 5 segundos
	useEffect(() => {
		if (submitStatus.type) {
			const timer = setTimeout(() => {
				setSubmitStatus({ type: null, message: "" })
			}, 5000)
			return () => clearTimeout(timer)
		}
	}, [submitStatus])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus({ type: null, message: "" })

		if (!isRecaptchaLoaded) {
			setSubmitStatus({
				type: "error",
				message: "Carregando proteção anti-spam...",
			})
			setIsSubmitting(false)
			return
		}

		try {
			// Executar reCAPTCHA v3
			const token = await window.grecaptcha.execute(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
				{ action: "submit" }
			)

			const form = formRef.current
			if (!form) {
				throw new Error("Form not found")
			}

			const formData = new FormData(form)
			const data = {
				name: formData.get("name") as string,
				email: formData.get("email") as string,
				message: formData.get("message") as string,
				recaptchaToken: token,
			}

			const result = await sendContactEmail(data)

			if (result.success) {
				setSubmitStatus({
					type: "success",
					message: result.message,
				})
				form.reset()
			} else {
				setSubmitStatus({
					type: "error",
					message: result.message,
				})
			}
		} catch (error) {
			console.error("Error:", error)
			setSubmitStatus({
				type: "error",
				message: t("error"),
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "felipenogueira.94@gmail.com",
			href: "mailto:felipenogueira.94@gmail.com",
		},
		{
			icon: Phone,
			label: "WhatsApp",
			value: "+55 11 97408-4935",
			href: "https://wa.me/5511974084935",
		},
		{
			icon: Github,
			label: "GitHub",
			value: "github.com/felipengr",
			href: "https://github.com/felipengr",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: "Felipe Nogueira",
			href: "https://www.linkedin.com/in/nogueirafelipe94/",
		},
	]

	return (
		<>
			{/* reCAPTCHA v3 Script */}
			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
				onLoad={() => {
					window.grecaptcha.ready(() => {
						setIsRecaptchaLoaded(true)
					})
				}}
			/>

			<section id="contact" className="py-20 px-4 bg-muted/30">
				<div className="container mx-auto max-w-7xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
						<p className="text-lg text-muted-foreground">{t("subtitle")}</p>
					</motion.div>

					<div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="space-y-6"
						>
							<div className="space-y-4">
								<h3 className="text-2xl font-bold">{t("getInTouch")}</h3>
								<p className="text-muted-foreground">{t("description")}</p>
							</div>

							<div className="space-y-4">
								{contactInfo.map((info, index) => (
									<motion.div
										key={info.label}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<Link
											href={info.href}
											target={info.href.startsWith("http") ? "_blank" : undefined}
											rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
											className="flex items-center gap-4 p-4 rounded-lg border-2 bg-card hover:bg-muted transition-colors group"
											style={{
												backgroundColor: "var(--color-card)",
											}}
										>
											<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
												<info.icon className="h-6 w-6" />
											</div>
											<div className="min-w-0 flex-1">
												<p className="font-semibold">{info.label}</p>
												<p className="text-sm text-muted-foreground truncate">{info.value}</p>
											</div>
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<Card
								className="p-6 border-2 shadow-lg h-full"
								style={{
									backgroundColor: "var(--color-card)",
								}}
							>
								<form
									ref={formRef}
									onSubmit={handleSubmit}
									className="space-y-6 h-full flex flex-col"
								>
									{/* Name */}
									<div className="space-y-2">
										<Label htmlFor="name">{t("name")}</Label>
										<Input
											id="name"
											name="name"
											type="text"
											placeholder={t("namePlaceholder")}
											required
											className="bg-background"
										/>
									</div>

									{/* Email */}
									<div className="space-y-2">
										<Label htmlFor="email">{t("email")}</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder={t("emailPlaceholder")}
											required
											className="bg-background"
										/>
									</div>

									{/* Message */}
									<div className="space-y-2 flex-1">
										<Label htmlFor="message">{t("message")}</Label>
										<Textarea
											id="message"
											name="message"
											placeholder={t("messagePlaceholder")}
											required
											rows={5}
											className="bg-background resize-none h-32"
										/>
									</div>

									{/* Status Message */}
									{submitStatus.type && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											className={`p-4 rounded-lg text-sm ${
												submitStatus.type === "success"
													? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
													: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
											}`}
										>
											{submitStatus.message}
										</motion.div>
									)}

									{/* Submit Button */}
									<Button
										type="submit"
										size="lg"
										className="w-full bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
										disabled={isSubmitting || !isRecaptchaLoaded}
									>
										{isSubmitting ? (
											<>
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												{t("sending")}
											</>
										) : (
											t("send")
										)}
									</Button>
								</form>
							</Card>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}
