import React, { useState } from "react";
import {
  CardActions,
  Divider,
  CardHeader,
  CardContent,
  Grid,
  TextField,
  InputAdornment,
  OutlinedInput,
  Card,
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

const AddEntry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [components, setcomponents] = useState("");
  const [purpose, setPurpose] = useState("");


  const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setcomponents(event.target.value);
    setPurpose(event.target.value);


  };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, components, purpose  }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Entry saved successfully");
        })
        .catch((error) => {
          console.error(error);
          alert("An error occurred while saving the entry");
        });
    
    // Note that you will need to replace the URL "/api/entries" with the actual URL of your API endpoint.
    
    // That's it! Now when the form is submitted, the data will be sent to the server and saved to the database (or perform other necessary operations). 
  };
  const handleSubmit1 = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, components, purpose 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Entry saved successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while saving the entry");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit1} >
        <Card>
          <CardHeader title="Add Entry" />
          <CardContent sx={{ pt: 1, my: -3 }}>
            <Box sx={{ mx: 1.5, my: 1.5 }}>
              <Grid
                container
                spacing={1}
                sx={{ gap: 3, display: "flex", flexDirection: "row" }}
              >
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    onChange={handleChange}
                    required
                  />
                </Grid>
                {/* <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    required
                  />
                </Grid> */}
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    // type="number"
                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Components"
                    name="component"
                    onChange={handleChange}

                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Purpose"
                    name="purpose"
                    onChange={handleChange}
                 
                    required
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit" sx={{ mx: 20 }} onClick={console.log('hello')}>
              Save details
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default AddEntry;
