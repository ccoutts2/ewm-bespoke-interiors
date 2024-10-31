import emailjs from "@emailjs/browser";
import { validateEmail } from "@/utils/validation";

export const handleContactForm = async (
  state: { message: string } | null,
  payload: FormData,
) => {
  try {
    const name = payload.get("name");
    const email = payload.get("email");

    if (!name || !email) {
      return { message: "Please enter a name and a valid email." };
    }
    if (!validateEmail(email as string)) {
      return { message: "Must be a valid email." };
    }

    const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      return { message: "EmailJS environment variables are not set." };
    }

    await emailjs.send(
      emailServiceId,
      emailTemplateId,
      payload,
      emailPublicKey,
    );
    return { message: "Success" };
  } catch (error) {
    console.error(error);
    return { message: "Error sending email. Please try again later." };
  }
};
