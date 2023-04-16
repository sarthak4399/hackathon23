import { CardActions, Divider, CardHeader, CardContent, Grid, TextField, Card, Box, Button } from '@mui/material';

function equipmentIssue() {
  return (
    <form>
        <Card>
                <CardHeader
                  // subheader="Add Entry"
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
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          // helperText="Please specify the first name"
                          label="Name"
                          name="name"
                          // onChange={handleChange}
                          required
                          // value={values.firstName}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Mobile No"
                          name="mobile"
                          // onChange={handleChange}
                          required
                          // value={values.lastName}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Equipment Name"
                          name="equipment"
                          // onChange={handleChange}
                          required
                          // value={values.email}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Quantity"
                          name="quantity"
                          type="number"
                          // onChange={handleChange}
                          required
                          // value={values.country}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Purpose"
                          name="purpose"
                          // onChange={handleChange}
                          required
                          // value={values.phone}
                        />
                      </Grid>
                      
                    </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button variant="contained" sx={{}}>
                    Submit
                  </Button>
                </CardActions>
              </Card>
    </form>
  )
}

export default equipmentIssue