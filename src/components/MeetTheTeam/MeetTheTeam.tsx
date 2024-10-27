import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import { employeeData } from "@/lib/getEmployeeData";

const MeetTheTeam = () => {
  return (
    <section className="flex flex-col items-center justify-center border-t border-black py-12">
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
  );
};

export default MeetTheTeam;
