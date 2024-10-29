"use client";

import { useState, forwardRef } from "react";
import type { DetailedHTMLProps, FormHTMLAttributes } from "react";
import Button from "@/components/buttons/Button/Button";
import Input from "../inputs/Input/Input";
import TextArea from "../inputs/TextArea/TextArea";
import FormLabel from "../FormLabel/FormLabel";
import DropDownList from "../inputs/DropDownList/DropDownList";

interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  handleInputChange: () => void;
  buttonLabel: string;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ buttonLabel, handleInputChange, ...defaultProps }, ref) => {
    const [activeLabel, setActiveLabel] = useState("");

    return (
      <form
        ref={ref}
        {...defaultProps}
        className="flex w-full flex-[2.5] flex-col items-start justify-between pt-4 md:pl-12"
      >
        <FormFieldContainer>
          <FormLabel
            htmlFor="name"
            activeLabel={activeLabel}
            label="What's your name?"
            labelNumber="01"
          />
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
            activeLabel={activeLabel}
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
            activeLabel={activeLabel}
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
            onChange={handleInputChange}
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel
            htmlFor="services"
            activeLabel={activeLabel}
            label="What do you want to get in touch about?"
            labelNumber="04"
          />
          <TextArea
            id="services"
            name="services"
            onChange={handleInputChange}
            placeholder="Share as many details as possible such as space and scale of work"
          />
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel
            htmlFor="dimensions"
            activeLabel={activeLabel}
            label="Do you have dimensions for your space?"
            labelNumber="05"
          />
          <TextArea
            id="dimensions"
            name="dimensions"
            onChange={handleInputChange}
            placeholder="Please enter approximate value if unknown"
          />
        </FormFieldContainer>

        <div className="pb-1">
          <Button
            ariaLabel="Button which allows users to submit the form"
            label="submit"
          />
        </div>
      </form>
    );
  },
);

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
