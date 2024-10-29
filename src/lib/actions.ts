import { validateEmail } from "@/utils/validation";
import emailjs from "@emailjs/browser";

export const handleFormSubmit = async (
  formState: { message: string },
  formElement: HTMLFormElement,
) => {
  try {
    const formData = new FormData(formElement);

    let name = formData.get("name");
    if (!name) return { message: "Please enter a name" };

    let email = formData.get("email");
    if (!validateEmail(email)) return { message: "Must be a valid email" };
    email = email.toLowerCase();

    if (!name || !email) {
      return { message: "Name and email fields are required" };
    }
  } catch (error) {
    console.error(error);
    return { message: error };
  }

  const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
    throw new Error("Email JS environment variables are not set");
  }

  const sendEmail = await emailjs
    .sendForm(emailServiceId, emailTemplateId, formElement, emailPublicKey)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => console.log(error.text),
    );
};
