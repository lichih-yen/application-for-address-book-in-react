import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardActions";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Axios } from "axios";

const Details = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("/getuser/:id").then((response) => {
      let data = response.data;
      // console.log(data);
      setUserData(data);
    });
  }, []);

  return (
    <div className="container mt-4" style={{ alignItems: "center" }}>
      <h1>
        Name: {userData.firstName} {userData.lastName}
      </h1>
      <Card sx={{ maxWidth: 330 }}>
        <CardContent>
          <div className="content ">
            <img src="/profile.png" style={{ width: 50 }} alt="photo" />
            <h3 className="mt-3">
              Name: <span style={{ fontWeight: 400 }}>Richie Yen</span>
            </h3>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              <EmailIcon />
              Email: <span style={{ fontWeight: 400 }}>richie@example.com</span>
            </p>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              <PhoneAndroidIcon />
              Phone: <span style={{ fontWeight: 400 }}>0123456789</span>
            </p>
            <div className="add_btn">
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
              <button className="btn btn-danger">
                <DeleteIcon />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
