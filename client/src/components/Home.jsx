import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState([]);
  // console.log(userData);

  useEffect(() => {
    Axios.get("/getdata").then((response) => {
      let data = response.data;
      // console.log(data);
      setUserData(data);
    });
  }, []);

  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/register" className="btn btn-primary">
            <PersonAddAltIcon style={{ paddingRight: 5 }} />
            Add User
          </NavLink>
        </div>
        <table className="table">
          <thead>
            <tr className="table-info">
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((val, key) => {
              return (
                <>
                  <tr>
                    <th scope="row">{parseInt(key + 1)}</th>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td className="d-flex justify-content-between">
                      <button className="btn btn-success">
                        <VisibilityIcon />
                      </button>
                      <button className="btn btn-primary">
                        <EditIcon />
                      </button>
                      <button className="btn btn-danger">
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
