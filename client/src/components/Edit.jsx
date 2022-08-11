import React, { useState } from "react";

const Edit = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setInputVal((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <div className="container">
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inputVal.name}
              onChange={setData}
              className="form-control"
              id="exampleInputEmail1"
              name="name"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={inputVal.email}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="text"
              value={inputVal.age}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              name="age"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              value={inputVal.mobile}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              name="mobile"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              value={inputVal.work}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              name="work"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={inputVal.address}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              name="address"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              value={inputVal.description}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
              cols="30"
              rows="5"
            ></textarea>
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
