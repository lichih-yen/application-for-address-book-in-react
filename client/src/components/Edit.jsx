import React, { useState } from "react";

const Edit = () => {
  // const [image, setImage] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };
  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
  };

  return (
    <div className="container">
      {/* <NavLink to="/">Home</NavLink> */}
      <form className="mt-4">
        <div className="row">
          {/* <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Image
            </label>
            <input
              type="text"
              value={inputVal.image}
              onChange={setData}
              className="form-control"
              id="exampleInputEmail1"
              name="image"
            />
          </div> */}
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstName}
              name="firstName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="John"
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastName}
              name="lastName"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Doe"
              required
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
              aria-describedby="emailHelp"
              placeholder="j.doe@example.com"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhone}
              name="phone"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="5181234567"
              maxLength={10}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
