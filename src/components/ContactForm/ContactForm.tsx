"use client";

import { useState, useRef, FormEvent } from "react";
import Button from "@/components/buttons/Button/Button";
import Input from "../inputs/Input/Input";
import TextArea from "../inputs/TextArea/TextArea";
import FormLabel from "../FormLabel/FormLabel";
import DropDownList from "../inputs/DropDownList/DropDownList";
import { handleContactForm } from "@/lib/actions";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export const ContactForm = ({ ...defaultProps }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dropdown, setDropdown] = useState<string[]>([]);
  const [services, setServices] = useState("");
  const [dimensions, setDimensions] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "services") setServices(value);
    if (name === "dimensions") setDimensions(value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "services") setServices(value);
    if (name === "dimensions") setDimensions(value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    if (name === "dropdown") setDropdown([value]);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      setLoading(true);
      setMessage(null);

      const formState = { message: "" };
      const response = await handleContactForm(formState, form.current);

      console.log(response);
      if (response && response.message) {
        setMessage(response.message);

        if (response.message === "Success") {
          setName("");
          setEmail("");
          setDropdown([]);
          setServices("");
          setDimensions("");
        }
      }
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      ref={form}
      {...defaultProps}
      className="flex w-full flex-[2.5] flex-col items-start justify-between pt-4 md:pl-12"
    >
      <FormFieldContainer>
        <FormLabel htmlFor="name" label="What's your name?" labelNumber="01" />
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleInputChange}
          placeholder="Joe Smith"
          required
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="email"
          label="What's your email?"
          labelNumber="02"
        />
        <Input
          id="email"
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="joe.smith@email.com"
          required
        />
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
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
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
          onChange={handleTextareaChange}
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
          onChange={handleTextareaChange}
          placeholder="Please enter approximate value if unknown"
        />
      </FormFieldContainer>

      <div className="pb-1">
        <Button
          ariaLabel="Button which allows users to submit the form"
          label="submit"
        />
        {message && <p>{message}</p>}
        {loading && <Toast>Sending message...</Toast>}
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

interface ToastProps {
  children: React.ReactNode;
}

const Toast = ({ children }: ToastProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      gsap.set(container, { y: -200 });
      gsap.to(container, { y: 0 });
    },
    { scope: container },
  );
  return (
    <div className="">
      <p>{children}</p>
    </div>
  );
};
