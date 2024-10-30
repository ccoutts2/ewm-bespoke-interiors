import emailjs from "@emailjs/browser";
import { validateEmail } from "@/utils/validation";

export const handleContactForm = async (
  formState: { message: string },
  formElement: HTMLFormElement,
) => {
  try {
    const formData = new FormData(formElement);

    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) {
      return { message: "Please enter a name and a valid email." };
    }
    if (!validateEmail(email)) {
      return { message: "Must be a valid email." };
    }
    const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      return { message: "EmailJS environment variables are not set." };
    }

    await emailjs.sendForm(
      emailServiceId,
      emailTemplateId,
      formElement,
      emailPublicKey,
    );

    return { message: "Success" };
  } catch (error) {
    console.error(error);
    return { message: "Error sending email. Please try again later." };
  }
};
