import React, { useState } from "react";
import {
  TextField,
  Box,
  Grid2,
  Button,
  Typography,
  // Stack,
} from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [SignUp, setSighUp] = useState(false);

  // const [loginJson, setLoginJson] = useState({});

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // setUser(codeResponse);
      if (codeResponse.access_token) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            // console.log("resresres", res);
            setProfile(res.data);
            localStorage.setItem("Name", res.data.name);
            localStorage.setItem("EmailId", res.data.email);
            localStorage.setItem("Picture", res.data.picture);
            localStorage.setItem("token", codeResponse.access_token);
            navigate("/TaskManagement"); // Navigate after successful login
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  const handleSignUp = () => {
    setSighUp(true);
  };

  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  // });

  // Handle input field changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target; // Destructure the name and value from the input
  //   setFormData({
  //     ...formData, // Spread the existing state
  //     [name]: value, // Update the specific input field based on its name
  //   });
  // };
  //   log out function to log the user out of google and set the profile array to null
  //   const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  //   };
  // useEffect(() => {
  //   if (user.access_token) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log("resresres", res);
  //         setProfile(res.data);
  //         localStorage.setItem("Name", res.data.name);
  //         localStorage.setItem("EmailId", res.data.email);
  //         localStorage.setItem("Picture", res.data.picture);
  //         localStorage.setItem("token", user.access_token);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       access_token: token,
  //     }));
  //   }
  // }, []);

  const [isHelvetica, setIsHelvetica] = useState(true);

  const toggleFont = () => {
    setIsHelvetica(!isHelvetica);
  };

  console.log("profile", profile);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={2} p={2}>
        {SignUp === false ? (
          <>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <Typography variant="h6" color="info">
                Login
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField fullWidth required name="EmailId" label="Email Id" />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField
                fullWidth
                required
                type="Password"
                name="Password"
                label="Password"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 12,
              }}
            >
              <Button variant="contained" justifyContent="right">
                Login
              </Button>
            </Grid2>

            <Typography>Don't have an Account</Typography>
            <Typography
              sx={{
                color: "#4F75FF",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => handleSignUp()}
            >
              SignUp
            </Typography>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 12,
              }}
            >
              <Button variant="contained" onClick={() => login()}>
                Login with Google
              </Button>
            </Grid2>
          </>
        ) : (
          <>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <Typography variant="h6" color="info">
                Signup
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, md: 8 }}>
              {" "}
              <TextField
                fullWidth
                required
                name="FirstName"
                label="First Name"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField fullWidth required name="LastName" label="Last Name" />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField fullWidth required name="EmailId" label="Email Id" />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField fullWidth required name="Password" label="Password" />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 8,
                lg: 8,
                xl: 8,
                xxl: 8,
              }}
            >
              <TextField
                fullWidth
                required
                name="ConfirmPassword"
                label="Confirm Password"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 12,
              }}
            >
              <Button
                variant="contained"
                alignItems="right"
                justifyContent="right"
              >
                Signup
              </Button>
            </Grid2>
          </>
        )}
      </Grid2>
      {/* <div>
        <h2>Font Toggle Example</h2>
        <p
          style={{
            fontFamily: isHelvetica ? "Helvetica" : "Times New Roman",
          }}
        >
          This is a sample paragraph. Click the button below to change the font
          between Helvetica and Times New Roman.
        </p>
        <button onClick={toggleFont}>Toggle Font</button>
      </div> */}
      {/* <div>
        <h2>Real-Time Form Input</h2>

        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username" // Set name to match the state property
              value={formData.username} // Bind the input value to the state
              onChange={handleInputChange} // Update state on input change
            />
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email" // Set name to match the state property
              value={formData.email} // Bind the input value to the state
              onChange={handleInputChange} // Update state on input change
            />
          </div>
        </form>

        <div>
          <h4>Real-Time Preview:</h4>
          <p>
            <strong>Username:</strong> {formData.username}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      </div> */}
    </Box>
  );
}

export default Login;
