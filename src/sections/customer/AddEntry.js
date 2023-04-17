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
import { render } from "nprogress";

const AddEntry = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, phone }),
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

  render(
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader title="Add Entry" />
          <CardContent sx={{ pt: 0, my: -3 }}>
            <Box sx={{ mx: 1.5, my: 1.5 }}>
              <Grid
                container
                spacing={3}
                sx={{ gap: 2, display: "flex", flexDirection: "row" }}
              >
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    name="firstName"
                    onChange={handleFirstNameChange}
                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    name="lastName"
                    onChange={handleLastNameChange}
                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    onChange={handleEmailChange}
                    required
                  />
                </Grid>
                <Grid xs={7} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    onChange={handlePhoneChange}
                    type="number"
                    required
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit" sx={{ mx: 20 }}>
              Save details
            </Button>
          </CardActions>
        </Card>

      </form>
  )}
