import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primary">Add User</button>
        </div>
        <table className="table">
          <thead>
            <tr className="table-info">
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Richie</td>
              <td>richie@example.com</td>
              <td>Web Developer</td>
              <td>1234567</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Richie</td>
              <td>richie@example.com</td>
              <td>Web Developer</td>
              <td>1234567</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <i className="fa-solid fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
