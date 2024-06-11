import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import PagesHero from "@/components/PagesHero/PagesHero";
import Form from "@/components/Form/Form";
import EmployeeInfo from "@/components/EmployeeInfo/EmployeeInfo";
import { assetsConfig } from "@/config/assets";
import { employeeData } from "./employeeData";

const Page = () => {
  return (
    <>
      <NavBar />
      <PagesHero
        img={assetsConfig.officePicture[0].src}
        description={assetsConfig.officePicture[0].description}
        header={"Get In Touch"}
      />
      <section className="flex flex-col p-4 md:flex-row md:px-12 lg:px-32">
        <div className="flex flex-col justify-between md:flex-[1.5]">
          <div>
            <p className="pt-4">
              Whether you have a question, a comment, or are ready to start your
              new project with us, get in touch. We can&apos;t wait to hear from
              you.
            </p>
            <p className="py-4">
              If you want us to work together on your next project you can email
              or contact us using the form
            </p>
          </div>
          <div className="hidden pb-2 text-xs md:flex md:flex-col md:text-base">
            <p>10 Green Road, Statcross</p>
            <p>WSN1 R30, London</p>
            <p>07423 126 586</p>
            <p>email@emailaddress.com</p>
          </div>
        </div>
        <Form />
      </section>
      <section className="flex flex-col items-center justify-center border-t border-cyan-900 py-12">
        <h1 className="py-8 text-2xl uppercase">meet the team</h1>
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
          {employeeData.map((employee, index) => {
            return (
              <EmployeeInfo
                key={index}
                src={employee.src}
                name={employee.name}
                title={employee.title}
                information={employee.information}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
