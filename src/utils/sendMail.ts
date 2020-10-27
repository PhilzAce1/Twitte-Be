import sgMail from '@sendgrid/mail';
import { SEND_GRID_API_KEY } from '../config';
export async function sendMessage(to: string): Promise<void> {
	sgMail.setApiKey(SEND_GRID_API_KEY);
	const msg = {
		to, // Change to your recipient
		from: 'akuagwuphilemon11@gmail.com', // Change to your verified sender
		subject: 'Onboarding Email',
		text: `Welcome to Twitee Application`,
		// html: html,
	};

	return sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
}
