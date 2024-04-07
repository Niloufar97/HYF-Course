import { useState } from "react";

const FormExercise = () => {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const minLength = 8;

  const makeUpperCase = (text) => {
    return text.toUpperCase();
  };
  const firstnameChange = (e) => {
    const uppercaseValue = makeUpperCase(e.target.value);
    setFirstname(uppercaseValue);
  };
  const lastnameChange = (e) => {
    const uppercaseValue = makeUpperCase(e.target.value);
    setLastname(uppercaseValue);
  };
  const changepass = (e) => {
    setPass(e.target.vlaue);
  };
  const changeconfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  const submitHandler = () => {
    if (pass === confirmPass && pass.length >= minLength) {
      console.log(pass, firstname, lastname);
    }
  };
  /*
    Requirements:

    1. Create a form with the following fields:
      - First Name (text)
      - Last Name (text)
      - Email (email)
      - Password (password)
      - Confirm Password (password)
      - Submit (button)

    2. The submit button should only be enabled if all the fields are filled out and the password and confirm password fields match.

    3. The first name and last name fields should be uppercase.

    4. The email field should be lowercase, and has to be a valid email address (use ).

    5. The password field should be at least 8 characters long.

    6. All the fields should have placeholder text.

    7. When submit is clicked, the form should log the values of the fields to the console, and the fields should be cleared, if the form is valid.
  */

  return (
    <div className="user-form">
      <h2>User Form</h2>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={firstnameChange}
          placeholder="Enter firstname..."
          required
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={lastnameChange}
          placeholder="Enter lastname..."
          required
        />
        <label>Email:</label>
        <input type="email" placeholder="Enter email..." required />
        <label>Password:</label>
        <input
          type="password"
          value={pass}
          onChange={changepass}
          placeholder="Enter password..."
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPass}
          onChange={changeconfirmPass}
          placeholder="Confirm password..."
          required
        />
        <button type="button" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExercise;
