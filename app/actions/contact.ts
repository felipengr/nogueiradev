"use server"

import nodemailer from "nodemailer"

export interface ContactFormData {
	name: string
	email: string
	message: string
	recaptchaToken: string
}

export async function sendContactEmail(data: ContactFormData) {
	try {
		// Verificar reCAPTCHA
		const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.recaptchaToken}`,
		})

		const recaptchaData = await recaptchaResponse.json()

		if (!recaptchaData.success || recaptchaData.score < 0.5) {
			return {
				success: false,
				message: "Falha na verificação reCAPTCHA. Por favor, tente novamente.",
			}
		}

		// Configurar transporter do nodemailer
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASSWORD,
			},
		})

		// Email para você
		await transporter.sendMail({
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: `[Portfolio] Nova mensagem de ${data.name}`,
			html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
			replyTo: data.email,
		})

		// Email de confirmação para o remetente
		await transporter.sendMail({
			from: process.env.EMAIL,
			to: data.email,
			subject: "Mensagem recebida - Felipe Nogueira",
			html: `
        <h2>Olá ${data.name}!</h2>
        <p>Obrigado por entrar em contato! Recebi sua mensagem e responderei em breve.</p>
        <p><strong>Sua mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Atenciosamente,</p>
        <p><strong>Felipe Nogueira</strong></p>
        <p>Full Stack Developer</p>
      `,
		})

		return {
			success: true,
			message: "Mensagem enviada com sucesso!",
		}
	} catch (error) {
		console.error("Error sending email:", error)
		return {
			success: false,
			message: "Erro ao enviar mensagem. Por favor, tente novamente.",
		}
	}
}
