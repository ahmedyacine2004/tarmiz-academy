import { useState } from "react";
import Modal from "./Modal";

function Form() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [isVisible, setVisible] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    fullname: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "<10k",
  });

  const isConfirmed =
    loanInputs.fullname == "" ||
    loanInputs.phoneNumber == "" ||
    loanInputs.age == "";
  return (
    <>
      <div
        onClick={() => {
          console.log(isVisible);
          if (isVisible) {
            setVisible(false);
          }
        }}
      >
        <form action="" id="loanForm">
          <h1>Requesting loan</h1>
          <hr />
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={loanInputs.fullname}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, fullname: event.target.value });
            }}
          />
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={loanInputs.phoneNumber}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, phoneNumber: event.target.value });
            }}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={loanInputs.age}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, age: event.target.value });
            }}
          />
          <label htmlFor="emplyee">Are you an employee ?</label>
          <input
            type="checkbox"
            name="emplyee"
            id="emplyee"
            checked={loanInputs.isEmployee}
            onChange={(event) => {
              setLoanInputs({
                ...loanInputs,
                isEmployee: event.target.checked,
              });
            }}
          />
          <label
            htmlFor="salary"
            style={{ alignSelf: "self-start", margin: "12px 0px" }}
          >
            Salary
          </label>
          <select
            name="salery"
            id="salary"
            value={loanInputs.salary}
            onChange={(event) => {
              setLoanInputs({ ...loanInputs, salary: event.target.value });
            }}
          >
            <option value="<10k">Less than 10k per year</option>
            <option value="<50k">Less than 50k per year</option>
            <option value="+50k">More than 50k per year</option>
          </select>
          <input
            className={isConfirmed ? "disabled" : ""}
            type="submit"
            value={"Submit"}
            onClick={(event) => {
              const { age, phoneNumber } = loanInputs;
              event.preventDefault();
              setVisible(true);
              if (
                (Number(age) < 18 || Number(age) > 65) &&
                (phoneNumber.length < 10 || phoneNumber.length > 12)
              ) {
                setErrorMessage(
                  "The age is not allowed & the phone number is invalid"
                );
              } else if (Number(age) < 18 || Number(age) > 65) {
                setErrorMessage("The age is not allowed ");
              } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
                setErrorMessage("The phone number is invalid");
              }
            }}
            disabled={isConfirmed}
          />
        </form>
        <Modal errorMessage={errorMessage} isVisible={isVisible} />
      </div>
    </>
  );
}

export default Form;
