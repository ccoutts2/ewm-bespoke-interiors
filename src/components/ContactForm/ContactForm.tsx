"use client";

import { useState, useRef } from "react";
import Button from "@/components/buttons/Button/Button";
import Input from "../inputs/Input/Input";
import TextArea from "../inputs/TextArea/TextArea";
import FormLabel from "../FormLabel/FormLabel";
import DropDownList from "../inputs/DropDownList/DropDownList";
import Toast from "../Toast/Toast";

import { getDropdown } from "@/lib/getDropdownOptions";

import emailjs from "@emailjs/browser";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .email(),
  dropdown: z.string(),
  services: z.string().min(2, "Please enter this field"),
  dimensions: z.string(),
});

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [services, setServices] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [emailError, setEmailError] = useState("");
  const [servicesError, setServicesError] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") {
      setEmail(value);

      const emailValidation = Schema.shape.email.safeParse(value);
      if (!emailValidation.success && value !== "") {
        setEmailError("Please input a valid email");
      } else {
        setEmailError("");
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "services") setServices(value);
    if (name === "dimensions") setDimensions(value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    if (name === "dropdown") setDropdown(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    const validatedFields = Schema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      dropdown: formData.get("dropdown"),
      services: formData.get("services"),
      dimensions: formData.get("dimensions"),
    });

    if (!validatedFields.success) {
      setErrorMessages(validatedFields.error.flatten().fieldErrors);
      return;
    }

    try {
      const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
        setErrorMessages({
          message: "EmailJS environment variables are not set.",
        });
        return;
      }

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name: validatedFields.data.name,
          email: validatedFields.data.email,
          dropdown: validatedFields.data.dropdown,
          services: validatedFields.data.services,
          dimensions: validatedFields.data.dimensions,
        },
        emailPublicKey,
      );

      setName("");
      setEmail("");
      setDropdown("");
      setServices("");
      setDimensions("");
      setEmailError("");
      setIsToastVisible(true);

      setTimeout(() => setIsToastVisible(false), 5000);
      return { message: "Success" };
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessages({
        message: "Failed to send email. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={form}
      className="flex w-full flex-[2.5] flex-col items-start justify-between pt-4 md:pl-12"
    >
      <FormFieldContainer>
        <FormLabel htmlFor="name" label="What's your name?*" labelNumber="01" />
        <Input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
          placeholder="Joe Smith"
          required
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="email"
          label="What's your email?*"
          labelNumber="02"
        />
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="joe.smith@email.com"
          required
        />
        {emailError && (
          <p className="px-4 text-sm text-red-700">{emailError}</p>
        )}
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="dropdown"
          label="What type of work are you looking for?"
          labelNumber="03"
        />
        <DropDownList
          id="dropdown"
          name="dropdown"
          required
          options={getDropdown}
          value={dropdown}
          onChange={handleDropdownChange}
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="services"
          label="What do you want to get in touch about?"
          labelNumber="04"
        />
        <TextArea
          id="services"
          name="services"
          value={services}
          onChange={handleTextareaChange}
          required
          placeholder="Share as many details as possible such as space and scale of work"
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="dimensions"
          label="Do you have dimensions for your space?"
          labelNumber="05"
        />
        <TextArea
          id="dimensions"
          name="dimensions"
          value={dimensions}
          onChange={handleTextareaChange}
          placeholder="Please enter approximate value if unknown"
        />
      </FormFieldContainer>

      <div className="relative w-full pb-1 pt-4">
        <Button
          ariaLabel="Button which allows users to submit the form"
          label="submit"
          type="submit"
        />
        {isToastVisible && <Toast />}
      </div>
    </form>
  );
};

export default ContactForm;

interface FormFieldContainerProps {
  children: React.ReactNode;
}

const FormFieldContainer = ({ children }: FormFieldContainerProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-center border-t border-solid border-[#2d2d2d]">
      {children}
    </div>
  );
};

const ErrorMessage = () => {
  return (
    <p className="text-base text-red-700">**Please fill in all the fields**</p>
  );
};
