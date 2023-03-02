import React from "react";

export default function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    comments: "",
    joinedNewsLetter: true,
    employment: "",
    favColor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("password do not match");
      return;
    }

    if (formData.joinedNewsLetter) {
      console.log("Thanks for signing up for our newsletter!");
    }
    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-2xl m-auto gap-3 items-center mt-60"
    >
      <input
        className="border border-b-lime-200 py-2 px-3"
        type="text"
        onChange={handleChange}
        placeholder="First Name"
        name="firstName"
        value={FormData.firstName}
      />
      <input
        className="border border-b-lime-200 py-2 px-3"
        type="text"
        onChange={handleChange}
        placeholder="Last Name"
        name="lastName"
        value={FormData.lastName}
      />
      <input
        className="border border-b-lime-200 py-2 px-3"
        type="email"
        onChange={handleChange}
        placeholder="Email"
        name="email"
        value={FormData.email}
      />

      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        className="border border-b-lime-200 py-2 px-3"
      />
      <input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
        className="border border-b-lime-200 py-2 px-3"
      />

      <textarea
        className="border border-b-lime-200 py-2 px-3"
        value={formData.comments}
        placeholder="comments"
        onChange={handleChange}
        name="comments"
      />
      <div className="flex gap-1">
        <input
          id="okayToEmail"
          type="checkbox"
          name="joinedNewsLetter"
          onChange={handleChange}
          checked={formData.joinedNewsLetter}
        />{" "}
        <label htmlFor="okayToEmail">I want to join the newsletter</label>
      </div>

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="Part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favorite color</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Indigo">Indigo</option>
        <option value="Violet">Violet</option>
      </select>
      <br />
      <br />
      <button className="py-1 px-4 border">Submit</button>
      <br />
      <br />
    </form>
  );
}
