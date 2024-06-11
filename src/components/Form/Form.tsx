"use client";

import { useState, useRef, ChangeEvent } from "react";

import Button from "@/components/buttons/Button/Button";
import Input from "../inputs/Input/Input";
import TextArea from "../inputs/TextArea/TextArea";
import FormLabel from "../FormLabel/FormLabel";

const Form = () => {
  const [activeLabel, setActiveLabel] = useState("");
  const [isError, setIsError] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    services: "",
    textarea: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const isNameValid = () => {
    if (!formFields.name.length) {
      return false;
    }

    return true;
  };

  const isEmailValid = () => {
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    };
    if (!formFields.email.length || !validateEmail(formFields.email)) {
      return false;
    }
    return true;
  };

  const isServicesValid = () => {
    if (!formFields.services.length) {
      return false;
    }
    return true;
  };

  const isMessageValid = () => {
    if (!formFields.textarea.length) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    return (
      isNameValid() && isEmailValid() && isServicesValid() && isMessageValid()
    );
  };

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (isFormValid()) {
  //     emailjs
  //       .sendForm(
  //         process.env.NEXT_PUBLIC_SERVICE_ID,
  //         process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //         form.current,
  //         {
  //           publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  //         },
  //       )
  //       .then(
  //         () => {
  //           console.log("SUCCESS!");
  //           setFormSubmitted(true);
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1000);
  //         },
  //         (error) => {
  //           console.log("FAILED...", error);
  //         },
  //       );
  //   } else {
  //     setIsError(true);
  //   }
  // };

  const handleInputFocus = (labelFor: string) => {
    setActiveLabel(labelFor);
  };

  const handleInputBlur = () => {
    setActiveLabel("");
  };
  return (
    <form
      // ref={form}
      // onSubmit={sendEmail}
      className="flex w-full flex-[2.5] flex-col items-start justify-center pt-4 md:pl-12"
    >
      <FormFieldContainer>
        <FormLabel
          htmlFor="name"
          activeLabel={activeLabel}
          label="What's your name?"
        />
        <Input
          onChange={onChange}
          id="name"
          name="name"
          type="text"
          placeholder="Joe Smith"
          onFocus={() => handleInputFocus("name")}
          onBlur={handleInputBlur}
          isError={isError}
          formFields={formFields}
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="email"
          activeLabel={activeLabel}
          label="What's your email?"
        />
        <Input
          onChange={onChange}
          id="email"
          name="email"
          type="email"
          placeholder="joe.smith@email.com"
          onFocus={() => handleInputFocus("email")}
          onBlur={handleInputBlur}
          isError={isError}
          formFields={formFields}
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="services"
          activeLabel={activeLabel}
          label="What do you want to get in touch about?"
        />
        <TextArea
          onChange={onChange}
          id="textarea"
          name="textarea"
          placeholder="Share as many details as possible such as space and scale of work"
          onFocus={() => handleInputFocus("textarea")}
          onBlur={handleInputBlur}
          isError={isError}
          formFields={formFields}
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormLabel
          htmlFor="textarea"
          activeLabel={activeLabel}
          label="Do you have dimensions for your space?"
        />
        <TextArea
          onChange={onChange}
          id="textarea"
          name="textarea"
          placeholder="Please enter approximate value if unknown"
          onFocus={() => handleInputFocus("textarea")}
          onBlur={handleInputBlur}
          isError={isError}
          formFields={formFields}
        />
      </FormFieldContainer>
      {isError && <ErrorMessage />}
      <div className="pb-4">
        {/* <Button
      className={`${styles.button} ${
        formSubmitted ? styles.button_confirm : ""
      }`}
      label={formSubmitted ? "Sent" : "Send"}
    /> */}
        <Button label="submit" />
      </div>
    </form>
  );
};

export default Form;

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
