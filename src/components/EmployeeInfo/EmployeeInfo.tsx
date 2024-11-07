"use client";

import { useState, useRef } from "react";
import EmployeeInfoOverlay from "./EmployeeInfoOverlay";

interface EmployeeInfoProps {
  src: string;
  alt: string;
  name: string;
  title: string;
  information: string;
}

const EmployeeInfo = ({
  src,
  alt,
  name,
  title,
  information,
}: EmployeeInfoProps) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  return (
    <>
      <div ref={container} className="my-8 h-[20rem] w-[20rem] px-8 py-4">
        <img
          className="h-full w-full cursor-pointer object-cover"
          onClick={toggleInfo}
          src={src}
          alt={alt}
        />
        <h2 className="pt-4 text-center capitalize">{name}</h2>
        <h2 className="pt-1 text-center capitalize">{title}</h2>
      </div>
      <EmployeeInfoOverlay
        container={container}
        toggleInfo={toggleInfo}
        isInfoOpen={isInfoOpen}
        name={name}
        title={title}
        information={information}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default EmployeeInfo;
