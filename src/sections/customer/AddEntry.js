import React, {useState} from "react"


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

const formValue = [
  {
    id: '',
    firstname: '',
    lastname: '',
    mail: '',
    phone: '',
  }
]


const submitHandler = () =>{
  alert('submit')
}
let [Name, setname] = useState(0);

const AddEntry = () =>{
  const handleChange = (event)=>{
      setname(event.target.value);
  }
  return(
      <div><form>
          <Card><CardHeader
              title="Add Entry"
              />
              <CardContent sx={{ pt: 0,
                                my: -3 }}>
                <Box sx={{ mx: 1.5,
                          my: 1.5 }}>
                  <Grid
                    container
                    spacing={3}
                    sx={{gap:2,display:'flex' ,flexDirection:'row'}}
                  >
                    <Grid xs={7} md={6} >
                      <TextField fullWidth label="First name" name="firstName" onChange={handleChange} required/>
                    </Grid>
                    <Grid xs={7} md={6}>
                      <TextField fullWidth label="Last name"  name="lastName" onChange={handleChange} required/>
                    </Grid>
                    <Grid xs={7} md={6}>
                      <TextField fullWidth label="Email Address" name="email" onChange={handleChange} required/>
                    </Grid>
                    {/* <Grid
                      xs={7}
                      md={6}
                    >
                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        // onChange={handleChange}
                        required
                        // value={values.country}
                      />
                    </Grid> */}
                    <Grid xs={7} md={6} >
                     <TextField fullWidth label="Phone Number" name="phone" onChange={handleChange} type="number" required/>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button variant="contained" sx={{mx: 20}} onSubmit={submitHandler()}>
                  Save details
                </Button>
              </CardActions>
            </Card>
        </form>
     </div>
  )
}
export default  AddEntry